"use client";
import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", amount: "", type: "expense", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;
    onAdd?.({ ...form, amount: parseFloat(form.amount), date: new Date().toLocaleDateString() });
    setForm({ title: "", amount: "", type: "expense", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <input
        type="text" placeholder="Title" value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="rounded-lg border px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
      />
      <input
        type="number" placeholder="Amount" value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="rounded-lg border px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
      />
      <select
        value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="rounded-lg border px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit" className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black py-2 text-sm font-medium hover:opacity-80 transition">
        Add Transaction
      </button>
    </form>
  );
}
