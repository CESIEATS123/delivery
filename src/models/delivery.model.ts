import mongoose from 'mongoose'

const Delivery = mongoose.model( 
    "Delivery",
    new mongoose.Schema({
        order: [{
                id: String,
                number: Number,
                unitPrice: Number
            }],
        number: {
            type: Number,
            required: false
        },
        cost: {
            type: Number,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        user: {
            type: String,
            required: true
        },
        delivery_user: {
            type: String,
            required: true
        },
        address: {
            numStreet: String,
            street: String,
            city: String,
            cp: String,
            country: String
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            required: true

        },
        updateAt: {
            type: Date,
            required: false
        },
        deliveredAt: {
            type: Date,
            required: false
        },
        status: {
            type: String,
            enum: ['in progress', 'on the road', 'delivred', 'cancelled'],
            default:'in progress'
        },
    })
)

export default Delivery;
