import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 min-h-screen bg-red-900 items-center">
        <div className="bg-orange-500 ">holis</div>
        <div className="bg-blue-600">
          <Image
            src="/dani.png"
            alt="Next.js Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}
