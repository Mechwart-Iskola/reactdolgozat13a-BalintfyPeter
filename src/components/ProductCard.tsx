import { useEffect, useState } from "react"
import img from '../../public/products.json'

export type Product = {
    id: number,
    name: string,
    price: number,
    category: string,
    image: string
}

const [images, setImages] = useState();

useEffect(() => {
    let path = "../../public/products.json"
    fetch(path)
        .then(res => res.json())
        .then(images =>setImages(images))
}, [])

const ProductCard = () => {
  return (
    <>
        <div>{images.id.map((Image) =>{
            <div key={images.id} {...images}></div>
        }}</div>
    </>
  )
}

export default ProductCard