import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import ClubMember from "@/models/ClubMember";

export async function POST(req) {
  const { name, email, club, position, password } = await req.json();

  try {
    await connectDB();

    let club_member = await ClubMember.findOne({ email });

    if (club_member) {
      return NextResponse.json({
        success: false,
        message: "Club Member exists already",
      });
    }
    await ClubMember.create({ name, email, club, position, password });

    return NextResponse.json({
      success: true,
      message: "Club Member created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "An error occurred while creating the club member : " + error,
    });
  }
}
