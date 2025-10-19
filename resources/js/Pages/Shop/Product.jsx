import React from "react";
import {Link} from "@inertiajs/react";

const Product = ({product, isAdmin})=> {
    return (
        <div>
            {product.name}
            {product.description}
            {(product.stock>0) ? product.price + "$" : "Out of stock"}
            {isAdmin && <Link href={route("products.edit", product.id)}>edit</Link>}
        </div>
    )
}

export default Product;
