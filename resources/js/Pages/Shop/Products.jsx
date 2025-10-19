import React from 'react';
import {Head, Link} from '@inertiajs/react'
import AppLayout from "@/Layouts/AppLayout";
import Product from "./Product";

const Products = ({auth, products}) => {
    const isAdmin = auth?.user?.is_admin;

    return (
        <AppLayout>
            <Head title="Products" />

            {isAdmin && <Link href={route("products.create")}>create new</Link>}
            <div className="mb-4">
                {products.map((product) => (
                    <Product key={product.id} product={product} isAdmin={isAdmin} />
                ))}
            </div>
        </AppLayout>
    )
}

export default Products
