# [HOT SAUCE BUSINESS NAME] website

This is a complete static first version built with semantic HTML, modern CSS, and vanilla JavaScript. It has no framework, build step, checkout, or secret credentials.

## Open the site locally

Double-click `index.html` for a quick preview. For the most accurate preview, use a small local web server (for example, VS Code Live Server). The site can also be uploaded directly to most static hosts.

## What each file controls

- `index.html`: page sections, editable business copy, SEO, forms, and policy links.
- `css/styles.css`: colors, typography, layouts, responsive behavior, and visual details.
- `js/products.js`: all sauce products plus the single Shopify configuration object.
- `js/main.js`: product rendering, recipes, FAQ, menu, modal, form validation, and footer year.
- `assets/images/brand/hero-desktop.jpg` and `hero-mobile.jpg`: the current responsive hero photographs.
- `assets/images/products/`: live sauce-card photographs and additional product-in-the-garden shots.
- `assets/images/process/`: pepper harvest and garden photographs used in the sauce story.
- `assets/brand-source/`: original print-label PDFs retained as source artwork; these are not loaded by the public page.
- `assets/images/`: folders for future brand, product, creator, process, and recipe photos.

## Replace placeholders

Search the whole project for `[` to find editable fields such as `[HOT SAUCE BUSINESS NAME]`, `[BUSINESS EMAIL]`, and `[CITY, STATE]`. Replace every occurrence. Also search for `CONFIRM` and `SAMPLE` before launch. Do not remove brackets selectively; update the same placeholder everywhere.

## Add or remove sauces

Open `js/products.js`. Each object inside `products` creates one card. Copy an object to add a sauce, change its unique `id`, and update its fields. Delete an object to remove a sauce. `heatLevel` is 1–5. Keep `available: false` until the store connection is ready.

## Replace photographs

Place optimized JPG or WebP files at these paths. The product cards automatically show an informative fallback when an image is absent.

| Use | Folder / filename | Size | Ratio | Photo direction |
|---|---|---:|---:|---|
| Desktop hero | `assets/images/brand/hero-desktop.jpg` | 1920×1080 | 16:9 | Bottles at sunset or in a rustic kitchen; key subjects centered |
| Mobile hero | `assets/images/brand/hero-mobile.jpg` | 1080×1350 | 4:5 | Vertical bottle arrangement with headline space |
| Products | `assets/images/products/sauce-01.jpg`, etc. | 1200×1500 | 4:5 | One centered bottle on a warm clean background |
| Sauce process | `assets/images/products/sauce-process.jpg` | 1600×1067 | 3:2 | Ingredients, bottling, or making process |
| Creators | `assets/images/creators/creators.jpg` | 1600×1200 | 4:3 | Creators in their real working setting |
| Recipes | `assets/images/recipes/recipe-01.jpg`, etc. | 1200×900 | 4:3 | Finished dish in warm natural light |

The hero uses responsive `<picture>` markup. Its desktop source currently falls back to the existing lineup image. When `hero-desktop.jpg` is ready, update the `<img src>` in `index.html`. Write alt text that describes meaningful visible content; do not start with “image of.” Keep real image width and height attributes accurate.

## Update contact details, recipes, and FAQ

Contact and social placeholders are in `index.html`. Recipes and FAQ entries are near the top of `js/main.js`. Replace sample recipe ingredients and steps with tested copy. Storage, allergy, refrigeration, shelf-life, refund, and shipping statements must be confirmed before publishing.

## Connect the contact form

The current form validates entries but deliberately sends nothing. Connect it to Formspree, Netlify Forms, Shopify Forms, or your own secure server endpoint. Follow that provider’s instructions for the form `action` and method, then replace the demo submit handler in `js/main.js`. Never put email passwords or private API keys in these files.

## Connect email signup

Replace `[EMAIL SIGNUP ENDPOINT]` only after choosing Shopify Email, Mailchimp, ConvertKit, or another provider. Update the newsletter submit handler to send the email to the provider’s approved public form endpoint or your secure server. Add the final consent wording and privacy link.

## Shopify option A — recommended first integration

1. Add and finish products in Shopify.
2. Enable Shopify’s Buy Button sales channel.
3. Generate a Buy Button embed for each product.
4. Paste each generated button into its matching `shopify-{product-id}` container, or initialize it there from one integration file.
5. Set matching `shopifyProductId` and `shopifyHandle` values in `js/products.js`.
6. Let Shopify own pricing, availability, cart, payment, and checkout. Remove or synchronize duplicate display details.

Do not publish a Storefront access token unless Shopify explicitly designates it for browser use and its permissions are minimal. Never add Admin API credentials.

## Shopify option B — future advanced integration

A fully custom store could later use Shopify’s Storefront API to fetch products and variants, create/update carts, and redirect buyers to Shopify’s `checkoutUrl`. Build this only when the custom experience clearly justifies the extra maintenance. At that point Shopify should become the source of truth and local sample product data should be replaced by fetched data. The advanced API is intentionally not implemented now.

## Publish

Upload the project folder to a static host such as Netlify, Cloudflare Pages, GitHub Pages, or your existing web host. Set the production domain, replace `[CANONICAL URL]`, finish Open Graph values, add a real `assets/icons/favicon.png`, and test the deployed forms and Shopify buttons. HTTPS should be enabled by the host.

## Still needed from the business

Business name, tagline and statement; creator names and true origin story; mission and brand values; final sauce names, descriptions, heat ratings, bottle sizes, prices, ingredients, and availability; verified production and sourcing copy; storage/refrigeration/allergy/shelf-life guidance; email, phone, city/state, social URLs, and store URL; recipe copy and photos; shipping, damage, wholesale, privacy, return, and terms policies; newsletter consent and provider; final photography, logo, favicon, canonical domain, and social-sharing image.
