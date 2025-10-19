<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Show all
     */
    public function index()
    {
        return Inertia::render('Shop/Products', [
            'products' => Product::all(),
        ]);
    }

    /**
     * Show 1
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show creation form
     */
    public function create()
    {
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        return Inertia::render('Shop/New', []);
    }

    /**
     * Create
     */
    public function store(Request $request)
    {
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'required|string|max:50|unique:products,sku,',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        Product::create($validated);

        return redirect()->route('products.index')->with('success', 'Product created successfully.');
    }

    /**
     * Show edit form
     */
    public function edit(Product $product)
    {
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        return Inertia::render('Shop/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update
     */
    public function update(Request $request, Product $product)
    {
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'required|string|max:50|unique:products,sku,',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        $product->update($validated);

        return redirect()->route('products.index')->with('success', 'Product updated successfully.');

    }

    /**
     * Delete
     */
    public function destroy(Product $product)
    {
        if (!Auth::user()->is_admin) {
            abort(403);
        }

        $product->delete();

        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }
}
