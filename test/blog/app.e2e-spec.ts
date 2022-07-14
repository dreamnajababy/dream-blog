import request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '@/app.module'
import blogList from './data/blog.list.json'

describe('Blog (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
    // clear data before testing by delete database or something
  })

  it('As a viewer, I wanna get list of dream blog', () => {
    const expectedResult = blogList
    return request(app.getHttpServer())
      .get('/blogs')
      .expect(200)
      .expect(expectedResult)
  })
})
