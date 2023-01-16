import { Request, Response, NextFunction } from "express";
import Delivery from "../models/delivery.model";

export const create = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const newDelivery = new Delivery(req.body);
        console.log(req.body);
        console.log("Delivery");
        console.log(newDelivery);
        const savedOrder = await newDelivery.save();
        res.json({
            status: "success",
            data: { ...newDelivery },
            message: 'Delivery created Succesfully',
        });
    } catch(error) {
        next(error);
    }
    
};

export const findOne = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.params.id};
        const delivery = await Delivery.find(filter);
        res.json({
            status: "success",
            data: { ...delivery },
            message: 'Delivery found Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const updateOne = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.params.id};
        const update = {updteAt: Date.now()}
        const delivery = await Delivery.findOneAndUpdate(filter, req.body);
        const deliveryU = await Delivery.findOneAndUpdate(filter, req.body);
        res.json({
            status: "success",
            data: { ...delivery },
            message: 'Delivery updated Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const updateStatus = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.params.id};
        const update = {status: req.body.status, updteAt: Date.now()}
        const delivery = await Delivery.findOneAndUpdate(filter, update);
        res.json({
            status: "success",
            data: { ...delivery },
            message: 'Delivery status updated Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const deliveyDelivred = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.params.id};
        const update = {status: 'delivred', updteAt: Date.now(), delivredAt: Date.now()}
        const delivery = await Delivery.findOneAndUpdate(filter, update);
        res.json({
            status: "success",
            data: { ...delivery },
            message: 'Delivery delivred Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const all = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const allDelivery = await Delivery.find();
        res.json({
            status: "success",
            data: { ...allDelivery },
            message: 'Deliveries found Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};