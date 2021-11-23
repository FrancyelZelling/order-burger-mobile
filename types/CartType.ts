import Product from "./ProductType"

type CartType = {
  products: Product[]
  total: number
  items: number
}

export default CartType;
