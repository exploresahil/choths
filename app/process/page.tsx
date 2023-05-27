import CircularText from "@/components/icons/CircularText";
import StitchingImpact from "@/components/icons/StitchingImpact";
import MissionArrow from "@/components/icons/MissionArrow";
import "./process.scss";

export default function Process() {
  return (
    <>
      <section className="main-process-section">
        <div className="main-process-heading">
          <h1>
            <span>LOVE</span> WHAT YOU SEE?
          </h1>
          <h2>
            YOU&apos;LL LOVE <span>THE PROCESS</span> TOO
          </h2>
        </div>

        <div className="circular-text-container">
          <CircularText />
        </div>

        <div className="mission-section">
          <div className="mission-text">
            <p>
              We&apos;re the <span>Kapda Project</span>, a clothing and fashion
              accessories venture that believes in breaking stereotypes about
              comfortable clothing and slow fashion.
            </p>
            <p>
              Our goal is to make affordable, vernacular clothes and fashion
              accessories using upcycled fabric, and create a positive social
              impact by{" "}
              <span>
                providing employment and economic opportunities in rural areas
                and a platform to autistic people to showcase their talent.
              </span>
            </p>
            <button type="button">
              <h3>OUR MISSION</h3>
              <MissionArrow />
            </button>
          </div>
          <div className="mission-container">
            <StitchingImpact />
          </div>
        </div>

        <div className="process-section">
          <div className="sourcing-container">
            <h1>
              <span>01</span>SOURCING
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="production-container">
            <h1>
              <span>02</span>PRODUCTION
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="packaging-container">
            <h1>
              <span>03</span>PACKAGING
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
