"use client";

import { Label, TextInput } from "flowbite-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const AddSociety = () => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data } = await axios.post("/api/society/add", {
        name,
        logo,
      });

      console.log(data);

      if (data.success) {
        toast({
          title: "Society created successfully",
        });
      }
    } catch (err) {
      toast({
        title: "Oops, an error occurred while creating the society",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-2 w-full flex h-full ml-5 mt-5">
      {/* <div className="p-2 w-full flex h-full justify-center"> */}
      <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>
        <h1 className="text-2xl">Add a new society</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Society Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter the name of the society"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Member's email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Enter the institute email address"
            required
          />
        </div> */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image" value="Club Logo" />
          </div>
          <TextInput
            id="image"
            type="text"
            placeholder="Enter the URI of the logo of the society"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            required
          />
        </div>
        {submitting ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Adding, Please Wait
          </Button>
        ) : (
          <Button className="bg-[#303184]" type="submit">
            Add Society
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddSociety;
