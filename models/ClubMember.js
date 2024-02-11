const mongoose = require("mongoose");
require("../lib/mongoose");
const ClubMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    club: { type: String, required: true },
    position: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("ClubMember", ClubMemberSchema);
