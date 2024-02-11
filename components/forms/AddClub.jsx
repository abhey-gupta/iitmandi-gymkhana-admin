"use client";

import { Label, TextInput } from "flowbite-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    society: "",
  });
  const [societies, setSocieties] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data } = await axios.post("/api/club/add", {
        name: formData.name,
        logo: formData.logo,
        society: formData.society,
      });

      console.log(data);

      if (data.success) {
        toast({
          title: "Club created successfully",
        });
        setFormData({
          name: "",
          logo: "",
          society: "",
        });
      }
    } catch (err) {
      toast({
        title: "Oops, an error occurred while creating the club",
      });
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post("/api/society/fetch-all");
        if (data.success) {
          setSocieties(data.societies);
        }
      } catch (err) {
        toast({
          title: "Network error",
        });
      }
    })();
  }, []);

  return (
    <div className="p-2 w-full flex h-full ml-5 mt-5">
      {/* <div className="p-2 w-full flex h-full justify-center"> */}
      <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>
        <h1 className="text-2xl">Add a new club</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Club Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter the name of the club"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image" value="Club Logo" />
          </div>
          <TextInput
            id="image"
            type="text"
            placeholder="Enter the URI of the logo of the club"
            value={formData.logo}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, logo: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="society" value="Society" />
          </div>
          <Select
            value={formData.society}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, society: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              {societies.map((society, index) => (
                <SelectItem key={index} value={society.name}>
                  {society.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {submitting ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Adding, Please Wait
          </Button>
        ) : (
          <Button className="bg-[#303184]" type="submit">
            Add Club
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddClub;
