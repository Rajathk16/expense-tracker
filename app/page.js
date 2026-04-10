import Navbar from "./components/Navbar";
import TransactionForm from "./components/TransactionForm";
import Chart from "./components/Chart";
import TransactionCard from "./components/TransactionCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />
      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <header className="text-center md:text-left space-y-2 mb-10 mt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Dashboard
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Track, analyze, and manage your finances with ease.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <aside className="md:col-span-1 space-y-6">
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <Chart 
                  currentIncome={5000} 
                  currentExpense={2300} 
                  previousIncome={4200} 
                  previousExpense={2100} 
                />
              </div>
              <div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm">
                  <TransactionForm />
                </div>
              </div>
           </aside>
           
           <div className="md:col-span-2 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Recent Transactions</h2>
                <button className="text-sm px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition dark:text-zinc-300">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                 <TransactionCard transaction={{ _id: 1, text: "Groceries", amount: 120, type: "expense" }} />
                 <TransactionCard transaction={{ _id: 2, text: "Monthly Salary", amount: 5000, type: "income" }} />
                 <TransactionCard transaction={{ _id: 3, text: "Internet Bill", amount: 60, type: "expense" }} />
                 <TransactionCard transaction={{ _id: 4, text: "Coffee Shop", amount: 15, type: "expense" }} />
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
