import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  genre: string;

  @Column()
  year: string;

  @Column({ name: 'ISBN' })
  ISBN: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;
}
