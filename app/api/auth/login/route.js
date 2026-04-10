import { NextResponse } from "next/server";
import { signToken } from "@/app/lib/auth";
import { dbConnect } from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/app/lib/models/User";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    const cookieStore = await cookies();
    const token = signToken({ id: user._id, email: user.email });
    
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return NextResponse.json({ message: "Logged in successfully", user: { id: user._id, email: user.email }, token });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
