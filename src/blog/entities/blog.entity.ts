import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class  Blog  {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  title: string
  @Column()
  content: string
  @CreateDateColumn()
  createdAt: Date | string
  @Column({ type: 'json', nullable: true })
  tags: string[]
}
