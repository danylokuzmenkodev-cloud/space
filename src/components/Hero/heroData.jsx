import Button from "../UI/Button";

export const heroBlockData = {
  title: (
    <h1>
      Discover the vast expanses of <span className="text--purple">space</span>
    </h1>
  ),
  description: (
    <p>
      Where the possibilities are <span className="text--yellow">endless</span>
    </p>
  ),
  cta: (
    <Button
      type="primary"
      size="large"
      onClick={() => console.log("CTA clicked")}
      ariaLabel="Learn more"
    >
      Learn more
    </Button>
  ),
};
