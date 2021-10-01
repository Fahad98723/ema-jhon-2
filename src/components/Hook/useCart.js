import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const useCart = (products) => {
    const [cart,setCart] = useState([])
    useEffect(() => {
        if (products.length) {
            const saveCarts= getStoredCart()
            const storedCart = []
            for(const key in saveCarts){
                const newProduct = products.find(product => product.key === key)
                if (newProduct) {
                    const quantity = saveCarts[key]
                    newProduct.quantity = quantity
                    storedCart.push(newProduct)
                }
            }
            setCart(storedCart)
        }
    },[products])
    return[cart,setCart]
}
export default useCart