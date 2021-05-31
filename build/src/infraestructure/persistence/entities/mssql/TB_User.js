"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TB_User = void 0;
var typeorm_1 = require("typeorm");
var TB_User = /** @class */ (function () {
    function TB_User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'JID' })
    ], TB_User.prototype, "jid", void 0);
    __decorate([
        typeorm_1.Column('bit', { name: 'StrUserID' })
    ], TB_User.prototype, "strUserId", void 0);
    __decorate([
        typeorm_1.Column('string', { name: 'password' })
    ], TB_User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column('tinyint', { name: 'Status' })
    ], TB_User.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column('tinyint', { name: 'GMrank' })
    ], TB_User.prototype, "gmRank", void 0);
    __decorate([
        typeorm_1.Column('nvarchar', { name: 'Name' })
    ], TB_User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'Email' })
    ], TB_User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column('char', { name: 'sex' })
    ], TB_User.prototype, "sex", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'certificate_num' })
    ], TB_User.prototype, "certificateNum", void 0);
    __decorate([
        typeorm_1.Column('nvarchar', { name: 'address' })
    ], TB_User.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'postcode' })
    ], TB_User.prototype, "postCode", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'phone' })
    ], TB_User.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'mobile' })
    ], TB_User.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Column('datetime', { name: 'regtime' })
    ], TB_User.prototype, "registerTime", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'reg_ip' })
    ], TB_User.prototype, "ipRegistry", void 0);
    __decorate([
        typeorm_1.Column('datetime', { name: 'Time_log' })
    ], TB_User.prototype, "lastConnection", void 0);
    __decorate([
        typeorm_1.Column('int', { name: 'freetime' })
    ], TB_User.prototype, "freeTime", void 0);
    __decorate([
        typeorm_1.Column('tinyint', { name: 'sec_primary' })
    ], TB_User.prototype, "secPrimary", void 0);
    __decorate([
        typeorm_1.Column('tinyint', { name: 'sec_content' })
    ], TB_User.prototype, "secContent", void 0);
    __decorate([
        typeorm_1.Column('int', { name: 'AccPlayTime' })
    ], TB_User.prototype, "accPlayTime", void 0);
    __decorate([
        typeorm_1.Column('int', { name: 'LatestUpdateTime_ToPlayTime' })
    ], TB_User.prototype, "latestUpdatePlayTime", void 0);
    __decorate([
        typeorm_1.Column('int', { name: 'Play123Time' })
    ], TB_User.prototype, "playTime", void 0);
    TB_User = __decorate([
        typeorm_1.Entity('TB_User', { schema: 'dbo' })
    ], TB_User);
    return TB_User;
}());
exports.TB_User = TB_User;
