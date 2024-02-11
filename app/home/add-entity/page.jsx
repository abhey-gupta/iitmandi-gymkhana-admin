"use client";

import AddClub from "@/components/forms/AddClub";
import AddMember from "@/components/forms/AddMember";
import AddSociety from "@/components/forms/AddSociety";
import AddSocietyMember from "@/components/forms/AddSocietyMember";
import { useSearchParams } from "next/navigation";

const AddEntity = () => {
  const searchParams = useSearchParams();
  const entity = searchParams.get("entity");

  if (entity === "member") {
    return <AddMember />;
  } else if (entity === "club") {
    return <AddClub />;
  } else if (entity === "society") {
    return <AddSociety />;
  } else if (entity === "society-member") {
    return <AddSocietyMember />;
  }
};

export default AddEntity;
