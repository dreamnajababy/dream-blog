import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogController } from '@/blog/blog.controller'
import { BlogService } from '@/blog/blog.service'
import { Blog } from '@/blog/entities/blog.entity'
import { BlogRepository } from '@/blog/interfaces/blog.repository'
import { PostGresBlogRepository } from '@/blog/repositories/postgres-blog.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogController],
  providers: [
    BlogService,
    { provide: BlogRepository, useClass: PostGresBlogRepository },
  ],
})
export class BlogModule {}
