import { Request, Response } from 'express';
import { WELCOME_MESSAGE } from './../constants/poke-api.constants';

export class PokeService {

    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send(WELCOME_MESSAGE);
    }

}