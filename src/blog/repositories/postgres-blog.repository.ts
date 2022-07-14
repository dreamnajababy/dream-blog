import { NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateBlogDto } from '@/blog/dto/create-blog.dto'
import { UpdateBlogDto } from '@/blog/dto/update-blog.dto'
import { Blog } from '@/blog/entities/blog.entity'
import { BlogRepository } from '@/blog/interfaces/blog.repository'

export class PostGresBlogRepository implements BlogRepository {
  constructor(
    @InjectRepository(Blog) private readonly repository: Repository<Blog>,
  ) {}
  findAll(): Promise<Blog[]> {
    return this.repository.find()
  }
  findById(id: number): Promise<Blog> {
    const blog = this.repository.findOneBy({ id })
    if (!blog) {
      throw new NotFoundException(`Blog id#${id} not found`)
    }
    return blog
  }
  create(payload: CreateBlogDto): Promise<Blog> {
    const blog = this.repository.create(payload)
    return this.repository.save(blog)
  }
  async update(id: number, payload: UpdateBlogDto): Promise<Blog> {
    const blog = await this.repository.preload({
      id,
      ...payload,
    })
    if (!blog) {
      throw new NotFoundException(`Blog id#${id} not found`)
    }
    return this.repository.save(blog)
  }
  async remove(id: number): Promise<Blog> {
    const blog = await this.repository.findOne({ where: { id } })
    return this.repository.remove(blog)
  }
}
