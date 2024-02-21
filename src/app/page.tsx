import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-red">
      <div className="container mx-auto">
        <Header />
        <Navbar />
        <div className="grid grid-cols-2 bg-red-900">
          <div>holis</div>
          <div>

          <Image
              src="/dani.png"
              alt="Next.js Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '50px' }}
            />
          </div>
          
        </div>
      </div>
    </main>
  );
}
