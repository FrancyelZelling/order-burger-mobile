import react from "react"
import { RootState } from "../../tools/redux/store";
import { useSelector } from "react-redux";
import Product from "../../types/ProductType";

const cart = useSelector((state: RootState) => state.app.cart);

export default function addToCart(item: Product) {
  cart.products.push(item)
  cart.total += item.price
  return cart
}
