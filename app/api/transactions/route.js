import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/dbConnect";
import Transaction from "@/app/lib/models/Transaction";
import { verifyToken } from "@/app/lib/auth";
import { cookies } from "next/headers";

async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

// GET /api/transactions — fetch all transactions
export async function GET() {
  try {
    await dbConnect();
    const user = await getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const transactions = await Transaction.find({ user: user.id }).sort({ createdAt: -1 });
    return NextResponse.json({ transactions });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/transactions — add a new transaction
export async function POST(request) {
  try {
    await dbConnect();
    const user = await getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { text, amount, type } = body;
    
    if (!text || !amount || !type) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transaction = await Transaction.create({
      user: user.id,
      text,
      amount,
      type
    });

    return NextResponse.json({ message: "Transaction added", data: transaction }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
