import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import SocietyMember from "@/models/SocietyMember";

export async function POST(req) {
  const { name, email, society, password, position } = await req.json();

  try {
    await connectDB();

    await SocietyMember.create({ name, email, society, password, position });

    return NextResponse.json({
      success: true,
      message: "Society Member created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while creating the society member : " + error,
    });
  }
}
