import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react'
import AppLayout from "@/Layouts/AppLayout";

const New = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        sku: "",
        description: "",
        price: "",
        stock: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('products.store'))
    }

    return (
        <AppLayout>
            <Head title={`Create product`} />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-xl">
                        <h1 className="text-3xl font-bold mb-6">Create product</h1>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product name</label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            />
                            {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sku" className="block text-gray-700 text-sm font-bold mb-2">Product sku</label>
                            <input
                                id="sku"
                                type="text"
                                value={data.sku}
                                onChange={(e) => setData('sku', e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            />
                            {errors.sku && <div className="text-red-500 text-xs mt-1">{errors.sku}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Product description</label>
                            <input
                                id="description"
                                type="text"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            />
                            {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Product price</label>
                            <input
                                id="price"
                                type="text"
                                value={data.price}
                                onChange={(e) => setData('price', e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            />
                            {errors.price && <div className="text-red-500 text-xs mt-1">{errors.price}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Product stock</label>
                            <input
                                id="stock"
                                type="text"
                                value={data.stock}
                                onChange={(e) => setData('stock', e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            />
                            {errors.stock && <div className="text-red-500 text-xs mt-1">{errors.stock}</div>}
                        </div>

                        <div className="flex justify-end items-center mt-6 space-x-3">
                            <Link href={route('products.index')} className="text-gray-500 hover:text-gray-700 mr-auto">Cancel</Link>
                            <button type="submit" disabled={processing} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                                {processing ? 'Creating...' : 'Create'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}

export default New
