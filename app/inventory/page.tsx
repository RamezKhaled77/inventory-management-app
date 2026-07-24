import Pagination from "@/components/pagination";
import Sidebar from "@/components/sidebar";
import { deleteProduct } from "@/lib/actions/products";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const user = await getCurrentUser();
  const userId = user?.id;

  const params = await searchParams;
  const q = (params.q ?? "").trim();

  const pageSize = 7;
  const page = Math.max(1, Number(params.page ?? 1));

  const where = {
    userId,
    ...(q ? { name: { contains: q, mode: "insensitive" as const } } : {}),
  };

  const [totalCount, items] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/inventory" />
      <main className="ml-64 p-8">
        <header className="mb-8">
          <div className="flex items-center justify-baseline">
            <div>
              <h1 className="text-2xl mb-1 font-semibold text-gray-900">
                Inventory
              </h1>
              <p className="text-sm text-gray-500">
                Manage you products and track inventory levels.
              </p>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white rounded-lg border border-gray-300 p-4">
            <form className="flex gap-2" action={`/inventory`} method="GET">
              <input
                type="text"
                name="q"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 border outline-none border-gray-300 rounded-lg focus:border-purple-400"
              />
              <button className="px-6 py-2 rounded-lg font-semibold cursor-pointer bg-purple-600 text-white hover:bg-purple-800">
                Search
              </button>
            </form>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">
                    SKU
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">
                    Low Stock At
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((product, key) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-sm text-gray-500">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 font-semibold text-sm text-gray-500">
                      {product.sku || "-"}
                    </td>
                    <td className="px-6 py-4 font-semibold text-sm text-gray-500">
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 font-semibold text-sm text-gray-500">
                      {product.quantity}
                    </td>
                    <td className="px-6 py-4 font-semibold text-sm text-gray-500">
                      {product.lowStockAt || "-"}
                    </td>
                    <td className="px-6 py-4 font-medium text-sm text-gray-500">
                      <form
                        action={async (formData: FormData) => {
                          "use server";
                          await deleteProduct(formData);
                        }}
                      >
                        <input type="hidden" name="id" value={product.id} />
                        <button className="text-red-800 bg-red-200 px-3 py-0.5 rounded-lg text-xs font-semibold hover:bg-red-300 cursor-pointer">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                baseUrl="/inventory"
                searchParams={{
                  q,
                  pageSize: String(pageSize),
                }}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
