import InfoBlock from "../UI/InfoBlock";
import { heroBlockData } from "./heroData";

import earth1xPng from "../../assets/images/hero/earth.png";
import earth2xPng from "../../assets/images/hero/earth@2x.png";
import earth3xPng from "../../assets/images/hero/earth@3x.png";

import earth1xWebp from "../../assets/images/hero/earth.webp";
import earth2xWebp from "../../assets/images/hero/earth@2x.webp";
import earth3xWebp from "../../assets/images/hero/earth@3x.webp";

export default function Hero() {
  return (
    <section
      className="section section-hero"
      aria-label="Hero section with planet Earth and introduction"
    >
      <div className="section-hero__container container">
        <div className="section-hero__image">
          <picture className="section-hero__image-img">
            <source
              type="image/webp"
              srcSet={`${earth1xWebp} 1x, ${earth2xWebp} 2x, ${earth3xWebp} 3x`}
            />
            <img
              src={earth1xPng}
              srcSet={`${earth1xPng} 1x, ${earth2xPng} 2x, ${earth3xPng} 3x`}
              alt="Planet earth"
            />
          </picture>
        </div>

        <div className="section-hero__info">
          <InfoBlock
            title={heroBlockData.title}
            description={heroBlockData.description}
            cta={heroBlockData.cta}
          />
        </div>
      </div>
    </section>
  );
}
