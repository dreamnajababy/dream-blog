import { Module } from '@nestjs/common';
import { BlogModule } from '@/blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BlogModule,
  ],
})
export class AppModule {}
