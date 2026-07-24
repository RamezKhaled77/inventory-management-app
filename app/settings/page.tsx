import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { AccountSettings } from "@hexclave/next";

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/settings" />
      <main className="ml-64 p-8">
        <header className="mb-8">
          <div className="flex items-center justify-baseline">
            <div>
              <h1 className="text-2xl mb-1 font-semibold text-gray-900">
                Settings
              </h1>
              <p className="text-sm text-gray-500">
                Manage your account settings and preferences.
              </p>
            </div>
          </div>
        </header>
        <div className="max-w-6xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <AccountSettings fullPage />
          </div>
        </div>
      </main>
    </div>
  );
}
