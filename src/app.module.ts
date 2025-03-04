import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repositoy.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [RepositoryModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
