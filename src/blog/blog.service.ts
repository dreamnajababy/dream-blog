import { Inject, Injectable } from '@nestjs/common';
import { CreateBlogDto } from '@/blog/dto/create-blog.dto';
import { UpdateBlogDto } from '@/blog/dto/update-blog.dto';
import { Blog } from '@/blog/entities/blog.entity';
import { BlogRepository } from '@/blog/interfaces/blog.repository';

@Injectable()
export class BlogService {
  constructor(@Inject(BlogRepository) private readonly blogRepository: BlogRepository) {}
  findAll()  {
    return  this.blogRepository.findAll()
  }
  findById(id:number) {
    return this.blogRepository.findById(id)
  }

  create(payload: CreateBlogDto) {
    return this.blogRepository.create(payload)
  }

  update(id: number, payload: UpdateBlogDto): Promise<Blog> {
    return this.blogRepository.update(id, payload)
  }

  async remove(id: number): Promise<Blog> {
    return this.blogRepository.remove(id)
  }
}
