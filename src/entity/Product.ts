import {Entity, 
    PrimaryGeneratedColumn, 
    Column, Index,
     getRepository, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Category } from './Category';

@Entity({name: 'product'})
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column('varchar', { length: 50, nullable: false, unique: true})
    name: string;

    @Column('varchar', { nullable: true})
    description: string

    @Column('int', { nullable: false})
    retail_price: number

    @Column('int', { nullable: true, default: 0})
    discount: number;

    @Column('int', { nullable: false})
    selling_price: number 

    @Column('varchar', { length: 50, nullable: false, unique: true})
    sku: string

    @ManyToOne(type => Category, category => category.id) 
    @JoinColumn({name: 'category_id', referencedColumnName: "id"})
    category: Category;
    
    @CreateDateColumn({ type: "timestamptz", default: "now()" })
    createdAt: Date = new Date();
  
    @UpdateDateColumn({ type: "timestamptz" })
    updatedAt: Date = new Date();
}
