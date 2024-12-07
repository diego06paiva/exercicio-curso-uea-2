import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService  extends PrismaClient implements OnModuleInit{
    private _todo: any;
    public get todo(): any {
        return this._todo;
    }
    public set todo(value: any) {
        this._todo = value;
    }
    async onModuleInit() {}

    async onModuleDestroy() {
        await this.$disconnect()
    }
}