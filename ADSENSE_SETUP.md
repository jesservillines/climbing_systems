# Google AdSense Setup for AlpinistHub

This guide will help you complete the Google AdSense implementation for your AlpinistHub website.

## Google AdSense Implementation Status

✅ AdSense components have been created:
- Base AdUnit component
- BannerAd component
- RectangleAd component
- InArticleAd component

✅ AdSense script has been added to `_document.js`

✅ Example ad placements have been added to the homepage

## Next Steps to Complete Setup

### 1. Sign Up for Google AdSense

1. Visit [Google AdSense](https://www.google.com/adsense/start/)
2. Sign in with your Google account
3. Fill out the application form:
   - Website URL: `https://alpinisthub.com`
   - Email: Your contact email
   - Country: Your location
4. Accept the Terms and Conditions
5. Submit your application

### 2. Add Your Publisher ID

After your AdSense application is approved:

1. Replace the placeholder AdSense client ID in `src/pages/_document.js`:
```javascript
const ADSENSE_CLIENT_ID = 'ca-pub-xxxxxxxxxxxxxxxx'; // Replace with your actual ID
```

2. Replace the placeholder client and slot IDs in each ad component:
```javascript
// In each component (BannerAd.js, RectangleAd.js, InArticleAd.js)
const client = 'ca-pub-xxxxxxxxxxxxxxxx'; // Replace with your publisher ID
const slot = 'xxxxxxxxxx'; // Replace with the ad unit slot ID from AdSense
```

### 3. Create Ad Units in AdSense Dashboard

1. Log in to your AdSense account
2. Go to "Ads" > "By ad unit"
3. Click "Create new ad unit"
4. Create three different ad units:
   - Banner Ad (horizontal)
   - Rectangle Ad (display)
   - In-Article Ad (in-article)
5. Note the ad unit IDs (slots) and update each component file

### 4. Testing Your Ads

1. Deploy your site with the updated AdSense code
2. Visit your live site to ensure ads are loading properly
3. Check the AdSense dashboard to monitor impressions and earnings

## Best Practices

- **Ad Density**: Don't overload your pages with too many ads
- **Mobile Optimization**: Ensure ads display properly on mobile devices
- **Content Quality**: Continue focusing on high-quality content
- **Policy Compliance**: Ensure your site complies with AdSense policies

## Troubleshooting

If ads aren't displaying:
1. Check browser console for errors
2. Verify your account is approved and active
3. Confirm ad units are correctly configured
4. Allow 24-48 hours for ads to start appearing

## Resources

- [Google AdSense Help Center](https://support.google.com/adsense/)
- [AdSense Program Policies](https://support.google.com/adsense/answer/48182)
- [Ad Implementation Best Practices](https://support.google.com/adsense/answer/17957)
