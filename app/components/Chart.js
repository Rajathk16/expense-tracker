"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ 
  currentIncome = 0, 
  currentExpense = 0, 
  previousIncome = 0, 
  previousExpense = 0 
}) {
  const data = {
    labels: ['Previous Month', 'Current Month'],
    datasets: [
      {
        label: 'Income',
        data: [previousIncome, currentIncome],
        backgroundColor: 'rgba(74, 222, 128, 0.9)', // green-400
        borderRadius: 4,
      },
      {
        label: 'Expense',
        data: [previousExpense, currentExpense],
        backgroundColor: 'rgba(248, 113, 113, 0.9)', // red-400
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#9ca3af', // zinc-400
          font: { family: 'inherit', size: 12 }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(24, 24, 27, 0.95)',
        titleColor: '#fff',
        bodyColor: '#e4e4e7',
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(161, 161, 170, 0.1)' },
        ticks: { color: '#9ca3af', font: { family: 'inherit' } }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#9ca3af', font: { family: 'inherit' } }
      }
    },
    interaction: { mode: 'index', intersect: false },
  };

  return (
    <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md">
      <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-4 tracking-wide uppercase">Comparison Histogram</h2>
      <div className="w-full h-64">
        <Bar options={options} data={data} />
      </div>
      <div className="flex gap-2 text-sm mt-4 border-t border-zinc-100 dark:border-zinc-800 pt-4">
        <span className="flex-1 text-center text-green-500 font-medium">This Month Income: ${currentIncome}</span>
        <span className="flex-1 text-center text-red-500 font-medium">This Month Expense: ${currentExpense}</span>
      </div>
    </div>
  );
}
