import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { priceId } = request.body;

  if(request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  if(!priceId) {
    return response.status(400).json({ error: 'Price not found.' });
  }
 
  const sucessUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  
  const checkoutSessions = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
  });

  return response.status(201).json({
    checkoutUrl: checkoutSessions.url,
  })
}