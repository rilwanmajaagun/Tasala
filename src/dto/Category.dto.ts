export interface CreateCategoryDto {
  name: string
}

export interface GetCategoryDto {
  id?: string 
  name?: string
  category_id?: string
}

export interface EditCategory {
  id: number | string 
  name: string 
}