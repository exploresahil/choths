import Arches from "@/components/icons/Arches";
import Process from "@/components/Home/Process";
import Newsletter from "@/components/Home/NewsLetter";

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
