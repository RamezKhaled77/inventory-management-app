# 📦 Inventory Management System

A full-stack, production-ready **Inventory Management Application** built with the latest web technologies including **Next.js 15, React 19, Stack Auth, Prisma, and PostgreSQL**.

This application provides complete control over your inventory, featuring real-time tracking, dashboard analytics, low stock alerts, and secure multi-user authentication.

---

## ⚡ Features

- 🔐 **Modern Authentication** – Secure user registration and login powered by Stack Auth.

- 📊 **Dashboard Analytics** – Real-time metrics, interactive charts, and business insights.

- 📦 **Product Management** – Complete CRUD (Create, Read, Update, Delete) operations for products.

- 🔍 **Search & Filtering** – Fast client/server-side search to locate items quickly.

- 📄 **Pagination** – Efficient data handling and loading for large inventories.

- ⚠️ **Low Stock Alerts** – Automated visual notifications for critical inventory levels.

- 💰 **Financial Value Tracking** – Monitor total stock value and inventory metrics.

- 📈 **Interactive Charts** – Visualize inventory trends and distribution with Recharts.

- 📱 **Responsive Design** – Optimized experience across Desktop, Tablet, and Mobile devices.

- 🎨 **Modern UI/UX** – Clean and intuitive design styled with Tailwind CSS & Lucide Icons.

- 🚀 **Server Actions & Real-Time Updates** – Instant UI updates using modern Next.js features.

---

## ⚙️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Server Components)

- **Frontend:** [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)

- **Authentication:** [Stack Auth](https://stack-auth.com/)

- **Database & ORM:** [PostgreSQL](https://www.postgresql.org/), [Prisma](https://www.prisma.io/)

- **Data Visualization:** [Recharts](https://recharts.org/)

- **Icons:** [Lucide Icons](https://lucide.dev/)

- **Language:** [TypeScript](https://www.typescriptlang.org/)

- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v18.x or later)

- PostgreSQL database instance

- Git

### 2. Clone the Repository

```bash
git  clone [https://github.com/RamezKhaled77/inventory-management-app.git](https://github.com/RamezKhaled77/inventory-management-app.git)
cd  inventory-management-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db?schema=public"

# Stack Auth Keys

NEXT_PUBLIC_STACK_PROJECT_ID="your-stack-project-id"

NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your-stack-publishable-key"

STACK_SECRET_SERVER_KEY="your-stack-secret-key"

```

### 5. Database Setup

Run Prisma migrations to generate database schemas:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 6. Run the Application

Start the local development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the app live!
