import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Society from "@/models/Society";

export async function POST() {
  try {
    await connectDB();

    let societies = await Society.find();

    return NextResponse.json({
      success: true,
      message: "Societies fetched successfully",
      societies,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching the societies : " + error,
    });
  }
}
