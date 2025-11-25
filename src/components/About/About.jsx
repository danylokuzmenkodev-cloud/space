export default function About() {
  return (
    <section className="section section-about" aria-label="About space journey">
      <div className="container">
        <h2 className="section__title">Embark on a space journey</h2>

        <p className="section-about__text">
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>

        <details className="section-about__details">
          <p id="full-about-text" className="section-about__text">
            We guarantee that every moment in space will be filled with
            incredible impressions, excitement, and new discoveries. Our team of
            professionals takes care of your safety and comfort so that you can
            fully enjoy your adventure in space. We offer various options for
            space excursions.
          </p>
          <summary
            className="section-about__summary section-about__summary--button"
            aria-controls="full-about-text"
          >
            <span className="section-about__summary-button section-about__summary-button--more">
              Read more
            </span>
            <span className="section-about__summary-button section-about__summary-button--less">
              Read less
            </span>
          </summary>
        </details>
      </div>
    </section>
  );
}
