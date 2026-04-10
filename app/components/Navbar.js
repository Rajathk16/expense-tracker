export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 shadow-sm">
      <h1 className="text-xl font-bold text-zinc-900 dark:text-white">💸 Expense Tracker</h1>
      <div className="flex gap-4">
        <a href="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Login</a>
        <a href="/register" className="text-sm font-medium px-4 py-1.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-80 transition">Sign Up</a>
      </div>
    </nav>
  );
}
