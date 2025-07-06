/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
 
require("dotenv").config();
 
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const port = 5000;
 
app.use(cors());
app.use(express.json());
// module require  //
 
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cartitem, customerEmail } = req.body;
 
    const line_items = cartitem.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          images: [item.img_url],
          
          metadata: {
          price: item.price,
          quantity: item.quantity,
          deliveryCharge: item.deliveryCharge,
      },

        },
        unit_amount: Math.round(item.discount_price * 100),
      },
      quantity: item.quantity,
    }));
//  10.3 - round - maths rules ceil - 10.30 - 
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:3000/thankyou",
      cancel_url: "http://localhost:3000/cancel",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "IN"],
      },
      customer_email: customerEmail,
      payment_intent_data: {
        description: "Purchase from MyShop (Export from India)",
      },
    });
    res.json({ sessionId: session.id });
    // res.json({ url: session.url }); // ✅ Return the URL, not sessionId
    console.log("Received body:", req.body);

  } catch (error) {
    console.error("Stripe session creation error:", error.message);
    res.status(500).json({ error: error.message });
  }
});
 
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

 
 