import {Entity, PrimaryGeneratedColumn, Column, Index, getRepository, 
    CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity({name: 'category'})
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column('varchar', { length: 50, unique: true, nullable: false })
    name: string;

    @OneToMany(type => Product, product => product.id) 
    product: Product[]
    
    @CreateDateColumn({ type: "timestamptz", default: "now()" })
    createdAt: Date = new Date();
  
    @UpdateDateColumn({ type: "timestamptz" })
    updatedAt: Date = new Date();
}
