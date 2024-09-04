
import { navItems } from "@/data";
import Image from "next/image";
import Hero from '../components/hero';
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-3 sm:p-6 ">
      <div className="max-w-7xl w-full ">
        <Navbar/>
        <Hero/>
      </div>
    </main>
  );
}
