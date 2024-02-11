import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Society from "@/models/Society";

export async function POST(req) {
  const { name, logo } = await req.json();
  try {
    await connectDB();

    let society = await Society.findOne({ name });

    if (society) {
      return NextResponse.json({
        success: false,
        message: "Society exists already",
      });
    }
    await Society.create({ name, logo });

    return NextResponse.json({
      success: true,
      message: "Society created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while creating the society : " + error,
    });
  }
}
