/**
 * PayPal utility functions for API interactions
 */

/**
 * Gets PayPal API base URL based on environment
 * @returns {string} PayPal API base URL
 */
export const getPayPalBaseUrl = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';
};

/**
 * Gets PayPal access token for API calls
 * @returns {Promise<string>} PayPal access token
 */
export const getPayPalAccessToken = async () => {
  const base = getPayPalBaseUrl();
  const auth = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString('base64');
  
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${auth}`
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  
  if (!data.access_token) {
    throw new Error('Failed to get PayPal access token');
  }
  
  return data.access_token;
};

/**
 * Creates a PayPal order
 * @param {Object} orderData Order data including items and shipping
 * @returns {Promise<Object>} PayPal order details
 */
export const createPayPalOrder = async (orderData) => {
  const { items, shipping } = orderData;
  
  // Calculate totals
  const itemsTotal = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const orderTotal = (parseFloat(itemsTotal) + parseFloat(shipping)).toFixed(2);
  
  const base = getPayPalBaseUrl();
  const accessToken = await getPayPalAccessToken();
  
  const response = await fetch(`${base}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: 'AlpinistHub Merchandise',
          amount: {
            currency_code: 'USD',
            value: orderTotal,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: itemsTotal
              },
              shipping: {
                currency_code: 'USD',
                value: shipping
              }
            }
          },
          items: items.map(item => ({
            name: item.name,
            unit_amount: {
              currency_code: 'USD',
              value: item.price.toFixed(2)
            },
            quantity: '1'
          }))
        }
      ]
    })
  });
  
  return response.json();
};

/**
 * Captures a PayPal order after approval
 * @param {string} orderId PayPal order ID to capture
 * @returns {Promise<Object>} Capture result
 */
export const capturePayPalOrder = async (orderId) => {
  const base = getPayPalBaseUrl();
  const accessToken = await getPayPalAccessToken();
  
  const response = await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  return response.json();
};
