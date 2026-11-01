/**
 * Cloudflare Worker to proxy GitHub Pages and add all missing HTTP Security Headers.
 * This resolves all 6 security issues identified in your audit report:
 * 1. Content Security Policy (CSP)
 * 2. Removes / Restricts wildcard CORS (Access-Control-Allow-Origin: *)
 * 3. X-Frame-Options (Clickjacking defense)
 * 4. Strict-Transport-Security (HSTS)
 * 5. X-Content-Type-Options (MIME sniffing defense)
 * 6. Referrer-Policy & Permissions-Policy
 */

export default {
  async fetch(request, _env, _ctx) {
    const response = await fetch(request);

    // Clone response headers to enable mutation
    const newHeaders = new Headers(response.headers);

    // 1. Content Security Policy
    newHeaders.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://api.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' data: blob:; connect-src 'self' https://api.emailjs.com; frame-src 'self' https://www.google.com https://maps.google.com; object-src 'none'; base-uri 'self'; form-action 'self';"
    );

    // 2. Anti-Clickjacking
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');

    // 3. HSTS (HTTP Strict Transport Security) - 1 year with subdomains and preload
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // 4. Anti-MIME sniffing
    newHeaders.set('X-Content-Type-Options', 'nosniff');

    // 5. Referrer Policy
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // 6. Permissions Policy
    newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()');

    // 7. Fix CORS Wildcard: replace wildcard '*' with same-origin
    if (newHeaders.has('Access-Control-Allow-Origin')) {
      newHeaders.set('Access-Control-Allow-Origin', 'https://bhatiyaniai.com');
    }

    // 8. Cross-Origin Isolation
    newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
    newHeaders.set('Cross-Origin-Resource-Policy', 'same-origin');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};
