# PayPal Security Guide for AlpinistHub Limited

## Environment Variable Setup

I've enhanced your PayPal integration security with environment variables. Here's how it works:

### 1. Local Development Setup

1. Create a `.env.local` file in your project root with:
   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=AfgqG03olz-5iAEo6BjDDxXxU4ujID1ZyKp2nU89cmvdu-KEhY8YlpV-EU_y0fHwQ_Ruz_rrwefP62hG
   ```

2. This file is automatically added to `.gitignore` to prevent accidentally committing your credentials.

3. Your application reads this environment variable instead of using a hardcoded value.

### 2. Netlify Environment Variables Setup

When deploying to Netlify:

1. Log in to your Netlify dashboard
2. Navigate to your site settings
3. Go to "Build & deploy" → "Environment variables"
4. Add new variable:
   - Key: `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
   - Value: `AfgqG03olz-5iAEo6BjDDxXxU4ujID1ZyKp2nU89cmvdu-KEhY8YlpV-EU_y0fHwQ_Ruz_rrwefP62hG`
5. Save and trigger a new deploy

## Additional Security Measures

### Server-Side Order Verification

For complete security, consider adding server-side verification for PayPal orders. Here's a simplified implementation:

1. Create an API route in `src/pages/api/verify-payment.js`:

```javascript
// src/pages/api/verify-payment.js
export default async function handler(req, res) {
  const { orderID } = req.body;
  
  // Only process POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Get access token from PayPal
    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString('base64');
    
    const tokenResponse = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    
    const { access_token } = await tokenResponse.json();
    
    // Verify the order
    const orderResponse = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });
    
    const orderDetails = await orderResponse.json();
    
    // Verify payment was completed and amount is correct
    if (
      orderDetails.status === 'COMPLETED' &&
      orderDetails.purchase_units[0].amount.value === req.body.expectedAmount
    ) {
      // Save order to database here
      return res.status(200).json({ verified: true });
    } else {
      return res.status(400).json({ verified: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return res.status(500).json({ error: 'Error verifying payment' });
  }
}
```

2. Update your shop.js to call this verification endpoint after payment approval.

### PayPal Developer Account Security

Secure your PayPal Developer account with these steps:

1. **Add App Restrictions**:
   - In your PayPal Developer Dashboard
   - For your app, set "App Restrictions" to only allow specific URLs (your Netlify domain)

2. **Enable Two-Factor Authentication** on your PayPal account.

3. **Use Sandbox for Testing**: Always test with sandbox accounts before processing real payments.

## Security Best Practices for E-commerce

1. **Keep Dependencies Updated**:
   ```bash
   npm audit
   npm update
   ```

2. **Implement CSP Headers** in your Netlify config:
   Create a `netlify.toml` file in your project root:
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       Content-Security-Policy = "default-src 'self'; script-src 'self' https://www.paypal.com https://www.paypalobjects.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.paypalobjects.com;"
   ```

3. **Regular Security Audits**:
   - Review your PayPal transaction history monthly
   - Monitor for unusual activity
   - Update credentials periodically

## Next Steps for Enhanced Security

1. **Implement Fraud Protection**:
   - Add address verification
   - Implement purchase amount limits
   - Review unusual purchase patterns

2. **Customer Data Protection**:
   - Create a privacy policy explaining data handling
   - Only collect necessary customer information
   - Implement secure storage for order data

3. **Consider Professional Security Review** when transaction volume increases

*Note: This guide provides enhanced security but is not exhaustive. As your business grows, consider a professional security audit.*
