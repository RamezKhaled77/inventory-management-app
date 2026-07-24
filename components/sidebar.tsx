import { UserButton } from "@hexclave/next";
import { BarChart3, Settings, Plus, Package } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">
      <div className="mb-6 border-b-2 border-gray-500 pb-4">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-7 h-7" />
          <h1 className="text-lg font-semibold">Inventory App</h1>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-400 mb-4 uppercase">
        Inventory
      </div>
      <nav className="space-y-1">
        {navigation.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.href;
          return (
            <Link href={item.href} key={key}>
              <div
                className={`flex items-center space-x-4 py-2 px-3 mb-2 rounded-lg ${isActive ? "bg-purple-200 text-gray-800" : "text-gray-300 hover:bg-gray-700"}`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-md">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t-2 border-gray-500">
        <div className="flex items-center justify-between">
          <UserButton showUserInfo />
        </div>
      </div>
    </div>
  );
}
