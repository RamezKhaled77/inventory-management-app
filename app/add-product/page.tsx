import Sidebar from "@/components/sidebar";
import { createProduct } from "@/lib/actions/products";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";

export default async function AddProductPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/add-product" />
      <main className="ml-64 p-8">
        <header className="mb-8">
          <div className="flex items-center justify-baseline">
            <div>
              <h1 className="text-2xl mb-1 font-semibold text-gray-900">
                Add Product
              </h1>
              <p className="text-sm text-gray-500">
                Add a new product to your inventory.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form className="space-y-6" action={createProduct}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700 mb-2"
                >
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Product Name"
                  className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-md font-medium text-gray-700 mb-2"
                  >
                    Price *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    min="0"
                    required
                    placeholder="0.0"
                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-md font-medium text-gray-700 mb-2"
                  >
                    Quantity *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    required
                    placeholder="0"
                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sku"
                  className="block text-md font-medium text-gray-700 mb-2"
                >
                  SKU (optional)
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  placeholder="Enter SKU"
                  className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lowStockAt"
                  className="block text-md font-medium text-gray-700 mb-2"
                >
                  Low Stock At (optional)
                </label>
                <input
                  type="number"
                  id="lowStockAt"
                  name="lowStockAt"
                  min="0"
                  placeholder="Enter low stock threshold"
                  className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg focus:border-purple-500"
                />
              </div>
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 cursor-pointer text-white rounded-lg hover:bg-purple-700"
                >
                  Add Product
                </button>
                <Link
                  href={`/inventory`}
                  className="px-6 py-3 bg-gray-200 cursor-pointer text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
