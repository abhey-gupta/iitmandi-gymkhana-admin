import { Quicksand } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const quicksand = Quicksand({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "IIT Mandi Gymkhana",
  description: "IIT Mandi Gymkhana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
