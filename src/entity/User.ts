import {Entity, PrimaryGeneratedColumn, Column, Index, getRepository} from "typeorm";



export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Index({unique: true})
  @Column('varchar', { length: 500, nullable: false })
  email: string

  @Column('varchar', {length: 1000, nullable: false})
  password: string

  @Column({ nullable: true})
  salt: string

  @Column('varchar', { length: 50 })
  firstName: string

  @Column('varchar', { length: 50 })
  lastName: string

  @Column('varchar', { length: 100, nullable: true })
  phone: string

  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz" })
  updatedAt: Date = new Date();

  @Column({
    type: 'enum',
    default: UserRole.USER,
    enum: UserRole,
  })
  roleCode: UserRole

  @Column({default : false})
  is_verified: boolean
}
