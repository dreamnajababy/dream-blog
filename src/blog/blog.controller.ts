import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogService } from '@/blog/blog.service';
import { CreateBlogDto } from "@/blog/dto/create-blog.dto";
import { UpdateBlogDto } from "@/blog/dto/update-blog.dto";

@Controller('blogs')
export class BlogController { 
  constructor(private readonly blogService: BlogService) {}

  @Get('/')
  findAll() {
    return this.blogService.findAll()
  };

  @Get('/:id')
  findById(@Param('id') id: number){
    return this.blogService.findById(id)
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto){
    return this.blogService.create(createBlogDto)
  }
  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateBlogDto: UpdateBlogDto){
    return this.blogService.update(id, updateBlogDto)
  }

  @Delete('/:id')
  remove(@Param('id') id: number){
    return this.blogService.remove(id)
  }
}
