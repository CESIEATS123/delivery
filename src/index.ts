import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser'
import routes from './routes';

import mongoose from "mongoose";
import errorMiddleware from './middleware/error.middleware';
import config from './config';

const uri = config.uri || "mongodb+srv://root:root@cluster0.ssyvssc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,
    { 
    dbName: 'CESIEATS'
    })
  .then(() => console.log('Connexion à MongoDB  CESIEATS réussie !'))
  .catch(() => console.log('Connexion à MongoDB CESIEATS échouée !'));
  
  mongoose.connection.on('connected', function() {
    console.log("database is ready now");
  });
  mongoose.connection.on('disconnected', function() {
  console.log("database is disconnected");
  });

const PORT = config.port || 3003;
// create instance server
const app: Application = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// api CESIEATS User et Role
app.use('/api', routes);

// Gestion des pages introuvables
app.use((req: Request, res: Response) => {
  res.status(404).json({
      message: 'Vérifier votre url',
  });
});

// Gestion des erreurs
app.use(errorMiddleware);

// Start express
app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);
});  

export default app;