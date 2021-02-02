// import { GetServerSideProps } from "next";
// import { loadStripe } from "@stripe/stripe-js";
// import Stripe from "stripe";
// import { createCheckoutSession } from "next-stripe/client";

interface IProps {}

export default function Home({}: IProps) {
  const onClick = async (priceId: string) => {};

  return (
    <div>
      <h1>Programmer For Hire</h1>

      <ul>
        <li key={111}>
          <h2>PR Review</h2>
          <img
            src={
              "https://atlassianblog.wpengine.com/wp-content/uploads/bitbucket411-blog-1200x-branches2.png"
            }
          />
          <p>Cost: ${((10000 as number) / 100).toFixed(2)}</p>
          <button onClick={() => onClick("abcd")}>Buy</button>
        </li>
        <li key={222}>
          <h2>Next.js Training (One Hour)</h2>
          <img
            src={
              "https://www.colocationamerica.com/wp-content/uploads/2018/10/training-tech.jpg"
            }
          />
          <p>Cost: ${((15000 as number) / 100).toFixed(2)}</p>
          <button onClick={() => onClick("abcd")}>Buy</button>
        </li>
      </ul>
    </div>
  );
}
