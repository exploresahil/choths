import Image from "next/image";

import Arches from "@/components/icons/Arches";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="arches-container">
          <Arches />
        </div>
      </section>
    </>
  );
}
