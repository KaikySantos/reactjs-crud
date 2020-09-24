import { Request, Response } from 'express';
import db from '../database/connection';

export default class UsersController{

    async read (request: Request, response: Response) {
        const trx = await db.transaction();
        try{
            const list = await trx('users').select('*');
            await trx.commit();
            return response.json(list);
        }catch(err){
            await trx.rollback();
            return response.status(400).json({
                error: 'Error!'
            })
        }
    }

    async create (request: Request, response: Response) {
        const {
            name,
            email
        } = request.body;
        const trx = await db.transaction();
        try{
            await trx('users').insert({
                name,
                email
            });
            await trx.commit();
            return response.status(201).send();
        }catch(err){
            await trx.rollback();
            return response.status(400).json({
                error: 'Error!'
            })
        }
    }

    async delete(request: Request, response: Response){
        const trx = await db.transaction();
        try{
            const {id} = request.params;
            await trx('users').where({id: id}).delete();
            await trx.commit();
            return response.status(201).send();
        }catch{
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }

    async update(request: Request, response: Response){
        const trx = await db.transaction();
        try{
            const {id} = request.params;
            const {
                name,
                email
            } = request.body;
            await trx('users').where({id: id}).update({
                name,
                email
            })
            await trx.commit();
            return response.status(201).send();
        }catch{
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}