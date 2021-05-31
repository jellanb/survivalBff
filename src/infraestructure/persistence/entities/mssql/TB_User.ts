import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('TB_User', {schema: 'dbo'})
export class TB_User {

    @PrimaryGeneratedColumn({type:'int', name: 'JID'})
    jid?: number;

    @Column('bit',{name: 'StrUserID'})
    strUserId?: string;

    @Column('string', {name: 'password'})
    password?: string;

    @Column('tinyint', { name: 'Status' })
    status?: number;

    @Column('tinyint', { name: 'GMrank' })
    gmRank?: number;

    @Column('nvarchar', { name: 'Name' })
    name?: string;

    @Column('varchar', { name: 'Email' })
    email?: string;

    @Column('char', { name: 'sex' })
    sex?: string;

    @Column('varchar', { name: 'certificate_num' })
    certificateNum?: string;

    @Column('nvarchar', { name: 'address' })
    address?: string;

    @Column('varchar', { name: 'postcode' })
    postCode?: string;

    @Column('varchar', { name: 'phone' })
    phone?: string;

    @Column('varchar', { name: 'mobile' })
    mobile?: string;

    @Column('datetime', {name: 'regtime'})
    registerTime?: Date;

    @Column('varchar', { name: 'reg_ip' })
    ipRegistry?: string;

    @Column('datetime', {name: 'Time_log'})
    lastConnection?: Date;

    @Column('int', { name: 'freetime' })
    freeTime?: number;

    @Column('tinyint', { name: 'sec_primary' })
    secPrimary?: number;

    @Column('tinyint', { name: 'sec_content' })
    secContent?: number;

    @Column('int', { name:'AccPlayTime' })
    accPlayTime?: number;

    @Column('int', { name: 'LatestUpdateTime_ToPlayTime' })
    latestUpdatePlayTime?: number;

    @Column('int', { name: 'Play123Time' })
    playTime?: number;

}
