# 💸 Expense Tracker

> A modern, full-stack **Expense Tracker** web application built with **Next.js 16**, **Tailwind CSS**, and **MongoDB** — helping you manage income & expenses with real-time insights and secure authentication.

---

## 🚀 Overview

Track your daily spending, categorize transactions, and get instant visual analytics — all from a clean, responsive UI.

---

## ✨ Features

- 🔐 **User Authentication** — JWT-based secure login & registration
- ➕ **Transactions** — Add, edit, and delete income/expense entries
- 📊 **Dashboard Analytics** — Visual charts for income vs. expenses
- 📅 **Filter & Search** — By date, category, or type
- 💾 **Persistent Storage** — MongoDB via Mongoose
- ⚡ **Responsive UI** — Works on mobile, tablet, and desktop
- 🌙 **Dark Mode** — System-aware dark/light theme

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | Next.js 16, React 19, Tailwind CSS 4 |
| Backend    | Next.js API Routes (App Router)   |
| Database   | MongoDB + Mongoose                |
| Auth       | JWT + HTTP-only Cookies           |
| Tooling    | ESLint, dotenv                    |

---

## 📂 Folder Structure

```
et/
├── app/
│   ├── layout.js              # Root layout (fonts, metadata)
│   ├── page.js                # Home / Dashboard page
│   ├── globals.css            # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── TransactionCard.js
│   │   ├── TransactionForm.js
│   │   └── Chart.js
│   ├── lib/                   # Utilities & DB connection
│   │   ├── dbConnect.js
│   │   └── auth.js
│   ├── api/                   # API route handlers
│   │   ├── auth/
│   │   │   ├── login/route.js
│   │   │   └── register/route.js
│   │   └── transactions/
│   │       └── route.js
│   └── frontend/              # Additional frontend pages
├── public/                    # Static assets
├── .env.local                 # Environment variables (not committed)
├── .env.example               # Example env template
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker/et
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📜 Available Scripts

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production           |
| `npm run start` | Start production server        |
| `npm run lint`  | Run ESLint                     |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT © 2026