import Button from "../UI/Button";

export const offerData = [
  {
    title: <h3>Move the borders of reality!</h3>,
    description: <p>Go on a space adventure - it's possible with us!</p>,
    cta: (
      <Button
        type="secondary"
        size="small"
        onClick={() => console.log("CTA clicked")}
        ariaLabel="Learn more"
      >
        Learn more
      </Button>
    ),
  },
  {
    title: <h3>Space is not just stars and planets</h3>,
    description: <p>It is a majestic journey to</p>,
    cta: (
      <Button
        type="secondary"
        size="small"
        onClick={() => console.log("CTA clicked")}
        ariaLabel="Learn more"
      >
        Learn more
      </Button>
    ),
  },
  {
    title: <h3>For those who dream of stars</h3>,
    description: <p>Our offer: make your dream come true</p>,
    cta: (
      <Button
        type="secondary"
        size="small"
        onClick={() => console.log("CTA clicked")}
        ariaLabel="Learn more"
      >
        Learn more
      </Button>
    ),
  },
  {
    title: <h3>Fulfill your fantastic dreams</h3>,
    description: <p>Space has never been so close</p>,
    cta: (
      <Button
        type="secondary"
        size="small"
        onClick={() => console.log("CTA clicked")}
        ariaLabel="Learn more"
      >
        Learn more
      </Button>
    ),
  },
];
