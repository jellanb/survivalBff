import express from 'express';
import {UsersRepository} from "./infraestructure/persistence/repository/account/usersRepository";
import { Database } from './infraestructure/persistence/database'
import {error} from "winston";

const router = express.Router();
router.get('/users/userByUserName', async (req, res) =>{
    console.log(req.body.username);
    await validIfExistUsername(req.body.username);
});

const startServer = async (router: express.Router) =>{
    const app = express();
    app.use(express.json({ limit: '50mb' }));
    app.use(router);
    return app.listen( 3000,() => {
        console.log(` Picking process webserver started on PORT : ${3000}`);
    });
}

startServer(router)
    .then(() => {
        console.log(`App ready !`);
    })
    .catch((err) => {
        if (err.name === 'DatabaseError') throw err;
        console.log(`Error loading app ${err.message}`);
    });

async function  validIfExistUsername(username: string){
    const usersRepository = new UsersRepository();
    const em = new Database();
    try {
        await usersRepository.findUserByUsername(username, em.getManagerDB('account'));
        console.log('query complete');
    } catch (e) {
        console.log(e.message);
    }

}
