import { IProduct } from "@/src/contexts/CartContext";
import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { products } = request.body as { products: IProduct[] };

  if(request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  if(!products) {
    return response.status(400).json({ error: 'Products not found.' });
  }
 
  const sucessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  
  const checkoutSessions = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    }))
  });

  return response.status(201).json({
    checkoutUrl: checkoutSessions.url,
  })
}