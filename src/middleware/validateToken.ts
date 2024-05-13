import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload{
    data: {id: number},
    exp: number,
    iat: number
}

const VALIDATETOKEN = async (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.get('Authorization');
    if(authorization){
        const TOKEN = authorization.split(' ')[1];

        if(!TOKEN){
            return res.status(401).json({status: 'You dont send token'});
        }
        try {
            let decoded = jwt.verify(TOKEN, process.env.SECRET_SIGNATURE as string) as JwtPayload;
            req.body.id = decoded.data.id;
            return next();
        } catch (error) {
            return res.status(403).json({ status: 'No autorizado', error: error });
        }
    }else{
        return res.status(403).json({ status: "Se requiere la cabecera de Autorización" });
    }
}

export default VALIDATETOKEN;