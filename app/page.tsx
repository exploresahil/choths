import Image from "next/image";

import Arches from "@/components/icons/Arches";
import Process from "@/app/process/page";
import Newsletter from "@/app/newsletter/page";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="arches-container">
          <Arches />
        </div>
      </section>
      <Process />
      <Newsletter />
    </>
  );
}
