// PayPal Capture Order API endpoint
// This securely captures a PayPal order after approval
import { capturePayPalOrder } from '../../../utils/paypal';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { orderId } = req.body;
    
    // Validate the request
    if (!orderId) {
      return res.status(400).json({ error: 'Order ID is required' });
    }

    // Use the utility function to capture the order
    const captureResult = await capturePayPalOrder(orderId);
    
    if (captureResult.error) {
      throw new Error(captureResult.error.message || 'Error capturing PayPal order');
    }
    
    // Here you would typically save order details to your database
    // For example: await saveOrderToDatabase(captureResult);
    
    return res.status(200).json(captureResult);
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    return res.status(500).json({ error: 'Error capturing PayPal order' });
  }
}
