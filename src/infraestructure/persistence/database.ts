import { getConnection, getManager, createConnections, EntityManager } from 'typeorm'

export class Database {
    async closeDatabaseConnection() {
        if (getConnection('order_process').isConnected) {
            await getConnection('order_process').close();
            console.log([`Connection order_process closed`]);
        }
        if (getConnection(process.env.ENV).isConnected) {
            await getConnection(process.env.ENV).close();
            console.log([`Connection ${process.env.ENV} closed`]);
        }
    }

    async initConnectionDB() {
        try {
            console.log('Connecting to DB ...');
            await createConnections();
            console.log('Connected to DB!! :)');
            return true;
        } catch (e) {
            console.log(`Error to connect to DB ${e.message} ${JSON.stringify(e.stack)}`);
            return false;
        }
    }

    getManagerDB(db: string): EntityManager {
        return getManager(db);
    }
}
