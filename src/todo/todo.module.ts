import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { RepositoryModule } from "src/repository/repositoy.module";

@Module({
    imports: [RepositoryModule],
    controllers: [TodoController],
    providers: [TodoService]
})

export class TodoModule {}