import { Module } from '@nestjs/common'
import { BlogController } from '@/blog/blog.controller'
import { BlogService } from '@/blog/blog.service'
import { BlogRepository } from '@/blog/interfaces/blog.repository'
import { FakeBlogRepository } from '@/blog/repositories/fake-blog.repository'

@Module({
  controllers: [BlogController],
  providers: [
    BlogService,
    { provide: BlogRepository, useClass: FakeBlogRepository },
  ],
})
export class BlogModule {}
