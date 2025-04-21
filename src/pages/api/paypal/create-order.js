// PayPal Create Order API endpoint
// This securely creates a PayPal order on the server-side
import { createPayPalOrder } from '../../../utils/paypal';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items, shipping } = req.body;
    
    // Validate the request
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Invalid items in request' });
    }

    // Use the utility function to create the order
    const order = await createPayPalOrder({ items, shipping });
    
    if (order.error) {
      throw new Error(order.error.message || 'Error creating PayPal order');
    }
    
    return res.status(200).json({ id: order.id });
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    return res.status(500).json({ error: 'Error creating PayPal order' });
  }
}
