# El Gharably Store — launch handoff

This is a high-fidelity, RTL-first static storefront proposal. It is intentionally designed as a WhatsApp-first catalogue rather than a fake ecommerce checkout.

## Verified public reference

- Public Facebook page: `Elgharably Store | Alexandria`
- Page URL: <https://www.facebook.com/people/Elgharably-Store/61578204867259/>
- Confirmed from supplied social assets: smartphones and accessories, including headphones, chargers, cables, power banks, cases, and smart watches.
- Confirmed visual direction: black and gold shield/"G" emblem.

Facebook did not expose a public price list, address, or telephone number without login. Those details have not been invented.

## Before publishing

1. Replace `STORE_WHATSAPP` in `app.js` with the confirmed WhatsApp number in international digits, without `+` or spaces.
2. Replace the abstract catalogue art with licensed product photography, and update product titles/categories/prices from the real catalogue.
3. Replace the temporary business copy in the FAQ/location area with confirmed delivery, address, and operating-hours data.
4. Update the domain in `sitemap.xml` and add the final canonical URL in `index.html`.

## Run locally

```powershell
python -m http.server 4173 --directory .
```

Then open <http://localhost:4173>.
