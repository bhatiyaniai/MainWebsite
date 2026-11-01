# Security Headers & CORS Resolution Guide for Bhatiyani Astute Intelligence

This guide explains why your security scan showed missing headers and gives you exact, step-by-step instructions to turn **all red items into green checkmarks**.

---

## Why Did the Security Scan Show These Results?

Your website is currently hosted on **GitHub Pages** (`server: GitHub.com`).
By default, GitHub Pages' static web server:
- **Does not emit custom HTTP response headers** (`Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security`, `X-Content-Type-Options`).
- **Emits a wildcard CORS header** (`Access-Control-Allow-Origin: *`) on static assets.
- External security scanners test the **raw HTTP response headers** directly over the network.

To resolve this on your custom domain `bhatiyaniai.com`, choose one of the three standard methods below. **Option 1 (Cloudflare Transform Rules)** is the fastest and recommended method.

---

## Option 1: Cloudflare Transform Rules (Recommended — Free & 2 Minutes)

If `bhatiyaniai.com` is using Cloudflare DNS:

### Step 1: Ensure DNS is Proxied
1. Go to your **Cloudflare Dashboard** > Select `bhatiyaniai.com` > **DNS**.
2. Make sure the `A` / `CNAME` records pointing to GitHub Pages have **Proxy status: Proxied (Orange Cloud)**.

### Step 2: Enable HSTS
1. In Cloudflare, go to **SSL/TLS** > **Edge Certificates**.
2. Scroll to **HTTP Strict Transport Security (HSTS)** and click **Enable HSTS**:
   - **Enable HSTS**: On
   - **Max Age Header**: `12 months (31536000 seconds)`
   - **Apply HSTS to subdomains**: On
   - **Preload**: On
   - **No-Sniff Header**: On (This automatically provides `X-Content-Type-Options: nosniff`)
   - Click **Save**.

### Step 3: Add Response Headers via Transform Rules
1. In Cloudflare, go to **Rules** > **Transform Rules** > **Modify Response Header**.
2. Click **Create rule**.
3. Name it: `Security Headers & CORS Fix`.
4. Under **When incoming requests match**: select **All incoming requests**.
5. Under **Modify response headers**, add these actions:

| Action | Header Name | Value |
|---|---|---|
| **Set dynamic / Set static** | `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline' https://api.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' data: blob:; connect-src 'self' https://api.emailjs.com; frame-src 'self' https://www.google.com https://maps.google.com; object-src 'none'; base-uri 'self'; form-action 'self';` |
| **Set static** | `X-Frame-Options` | `SAMEORIGIN` |
| **Set static** | `X-Content-Type-Options` | `nosniff` |
| **Set static** | `Referrer-Policy` | `strict-origin-when-cross-origin` |
| **Set static** | `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` |
| **Set static** | `Access-Control-Allow-Origin` | `https://bhatiyaniai.com` |
| **Set static** | `Cross-Origin-Opener-Policy` | `same-origin` |
| **Set static** | `Cross-Origin-Resource-Policy` | `same-origin` |

6. Click **Deploy**.

---

## Option 2: Deploy Cloudflare Worker (Plug-and-Play)

If you prefer code-based configuration, a ready-to-deploy worker script is provided in this repository at [`cloudflare-worker.js`](./cloudflare-worker.js).

1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Create Worker**.
2. Paste the contents of [`cloudflare-worker.js`](./cloudflare-worker.js).
3. Click **Deploy**.
4. In Worker **Settings** > **Triggers** > **Custom Domains**, add `bhatiyaniai.com`.

---

## Option 3: Deploy via Cloudflare Pages or Vercel

If you want automatic edge headers directly from your git repository:
- **Cloudflare Pages**: Connect your GitHub repository. It automatically reads [`public/_headers`](./public/_headers) already configured in this project.
- **Vercel**: Connect your GitHub repository. It automatically reads [`vercel.json`](./vercel.json) already configured in this project.

