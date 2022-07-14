import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogController } from '@/blog/blog.controller'
import { BlogService } from '@/blog/blog.service'
import { Blog } from '@/blog/entities/blog.entity'
import { BlogRepository } from '@/blog/interfaces/blog.repository'
import { FakeBlogRepository } from '@/blog/repositories/fake-blog.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogController],
  providers: [
    BlogService,
    { provide: BlogRepository, useClass: FakeBlogRepository },
  ],
})
export class BlogModule {}
