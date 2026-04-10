export default function TransactionCard({ transaction }) {
  const { text, amount, type, category, createdAt } = transaction || {};
  const isIncome = type === "income";

  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md">
      <div>
        <p className="font-medium text-zinc-900 dark:text-white capitalize">{text}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{category || "General"} · {createdAt ? new Date(createdAt).toLocaleDateString() : "Just now"}</p>
      </div>
      <span className={`font-semibold text-lg ${isIncome ? "text-green-500" : "text-red-500"}`}>
        {isIncome ? "+" : "-"}${Math.abs(amount)}
      </span>
    </div>
  );
}
