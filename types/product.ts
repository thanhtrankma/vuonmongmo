export interface Product {
  id: string
  name: string
  title: string
  description: string
  price: number
  image: string
  images?: string[]
  category: string
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}

