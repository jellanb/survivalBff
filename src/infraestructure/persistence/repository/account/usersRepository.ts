import { TB_User } from "../../entities/mssql/TB_User";
import { EntityManager } from "typeorm";


export class UsersRepository {
    async findUserByUsername(username: string, em: EntityManager ): Promise<TB_User[]> {
        return em.find(TB_User, {
            name: username
        })
    }
}
