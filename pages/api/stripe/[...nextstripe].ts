import NextStripe from "next-stripe";

export default NextStripe({
  secret_key: process.env.STRIPE_SECRET_KEY,
});
