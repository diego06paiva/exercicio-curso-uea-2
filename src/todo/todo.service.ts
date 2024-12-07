import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/repository/prisma.service";

@Injectable()
export class TodoService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async createTodo(data: any) {
        return await this.prismaService.todo.createTodo({
            data
        })
    }

    async getTodos() {
        return await this.prismaService.todo.findMany({
            where: {
                isDeleted: false
            },
            orderBy: {
                createAt: "asc"
            }
        })
    }

    async deleteTodoById(id: string){
        return await this.prismaService.todo.update({
            where: {
                id
            },
            data: {
                isDelete: true
            }
        })
    }

    async completeTodoById(id: string){
        return await this.prismaService.todo.update({
            where: {
                id
            },
            data: {
                isCompleted: true
            }
        })
    }
}