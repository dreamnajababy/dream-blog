import { CreateBlogDto } from "@/blog/dto/create-blog.dto";
import { UpdateBlogDto } from "@/blog/dto/update-blog.dto";
import { Blog } from "@/blog/entities/blog.entity";

export interface BlogRepository {
  findAll(): Promise<Blog[]>
  findById(id:number): Promise<Blog>
  create(payload: CreateBlogDto): Promise<Blog>
  update(id:number, payload: UpdateBlogDto): Promise<Blog>
  remove(id:number): Promise<Blog>
}

export const BlogRepository = Symbol("BlogRepository") // export const BlogRepository = 'BlogRepository'
