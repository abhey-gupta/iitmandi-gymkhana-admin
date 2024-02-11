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

const AddSocietyMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    society: "",
    password: "",
  });
  const [societies, setSocieties] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data } = await axios.post("/api/society-member/add", {
        name: formData.name,
        email: formData.email,
        society: formData.society,
        position: formData.position,
        password: formData.password,
      });

      console.log(data);

      if (data.success) {
        toast({
          title: "Society member created successfully",
        });
        setFormData({
          name: "",
          email: "",
          society: "",
          position: "",
          password: "",
        });
      }
    } catch (err) {
      toast({
        title: "Oops, an error occurred while creating the society member",
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
        <h1 className="text-2xl">Add a new society member</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter the name of the member"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Enter the institute email of the society member"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="position" value="Position" />
          </div>
          <Select
            value={formData.position}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, position: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Core Member">Society FA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Assign a password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder=""
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
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
            Add Member
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddSocietyMember;
