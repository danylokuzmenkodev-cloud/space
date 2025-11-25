import Grid from "../UI/Grid";
import InfoBlock from "../UI/InfoBlock";
import { offerData } from "./offerData";

export default function Offer() {
  return (
    <section className="section section-offer">
      <div className="container">
        <h2 className="section__title">Offer</h2>
        <Grid
          items={offerData}
          renderItem={(item) => <InfoBlock {...item} />}
        />
      </div>
    </section>
  );
}
