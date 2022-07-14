import { NotFoundException } from '@nestjs/common'
import { CreateBlogDto } from '@/blog/dto/create-blog.dto'
import { UpdateBlogDto } from '@/blog/dto/update-blog.dto'
import { Blog } from '@/blog/entities/blog.entity'
import { BlogRepository } from '@/blog/interfaces/blog.repository'

export class FakeBlogRepository implements BlogRepository {
  blogList:Blog[] = [
    {
      id: 1,
      title: 'First Title',
      content: 'First Content',
      createdAt: new Date(),
      tags: ['General', 'Database'],
    },
    {
      id: 2,
      title: 'Second Title',
      content: 'Second Content',
      createdAt: new Date(),
      tags: ['ORM', 'OOP'],
    },
    {
      id: 3,
      title: 'Third Title',
      content: 'Third Content',
      createdAt: new Date(),
      tags: ['Coffee'],
    },
  ]
  async findAll(): Promise<Blog[]> {
    return this.blogList
  }
  async findById(id: number): Promise<Blog> {
    const blog = this.blogList.find((blog) => blog.id === id)
    if(!blog){
      throw new NotFoundException(`Blog #${id} not found`)
    }
    return blog
  }
  async create(payload: CreateBlogDto): Promise<Blog> {
    const lastIdx = this.blogList.length
    this.blogList.push({...payload, createdAt: new Date(), id:lastIdx + 1 })
    return this.blogList[lastIdx]
  }

  async update(id: number, payload: UpdateBlogDto): Promise<Blog> {
    const index = this.blogList.findIndex((blog) => blog.id === id)
    if(index === -1){
      throw new NotFoundException(`Blog #${id} not found`)
    }
    this.blogList[index] = { ...this.blogList[index], ...payload }
    return this.blogList[index]
  }

  async remove(id: number): Promise<Blog> {
    const index = this.blogList.findIndex((blog) => blog.id === id)
    if(index === -1){
      throw new NotFoundException(`Blog #${id} not found`)
    }
    return this.blogList.splice(index, 1)[0]
  }
}
