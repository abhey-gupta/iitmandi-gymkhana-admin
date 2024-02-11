import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Club from "@/models/Club";

export async function POST(req) {
  const { name, logo, society } = await req.json();

  console.log(name, logo, society);
  try {
    await connectDB();

    let club = await Club.findOne({ name });

    if (club) {
      return NextResponse.json({
        success: false,
        message: "Club exists already",
      });
    }
    await Club.create({ name, logo, society });

    return NextResponse.json({
      success: true,
      message: "Club created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while creating the club : " + error,
    });
  }
}
