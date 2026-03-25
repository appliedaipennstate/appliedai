# ADR-0002: Google Apps Script Mailing List

**Date:** 2026-03-25
**Status:** Accepted
**Deciders:** Andy Salvo

## Context

The club website needs a mailing list signup form. The site is statically exported to GitHub Pages, so there is no server-side runtime. We need a backend to receive form submissions and store them somewhere officers can access.

Options considered:

1. **Google Apps Script + Google Sheets** -- zero cost, lives inside the Sheet, any officer with Sheet access can see submissions
2. **Serverless function (Vercel/Netlify/Cloudflare)** -- requires a separate hosting account, another service to manage, another credential to rotate
3. **Third-party form service (Formspree, Typeform)** -- paid tiers for features we need, another vendor dependency
4. **Email-based (mailto link)** -- no structured data collection, poor UX

## Decision

Use Google Apps Script as the backend with Google Sheets as the data store.

**Why:**

- **Zero cost.** Google Apps Script and Sheets are free within Google Workspace.
- **Officers can see it.** The Sheet is shared with the executive board. No developer access required to view signups.
- **No infrastructure to manage.** No servers, no databases, no hosting accounts beyond what we already have.
- **Proven pattern.** The smealstudentaihub repo validated this approach. It works reliably for static sites on GitHub Pages.

## CORS Workaround

Google Apps Script does not support OPTIONS preflight requests. When a browser sends `Content-Type: application/json`, the browser fires a preflight OPTIONS request first, which Apps Script cannot handle.

The workaround: POST with `Content-Type: text/plain`. This is a "simple request" per the CORS spec, so the browser skips the preflight entirely. The Apps Script parses the body as JSON server-side:

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents)
  // ...
}
```

The response uses `ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON)`.

## Implementation

**Environment variable:** The Apps Script deployment URL is stored in `NEXT_PUBLIC_MAILING_LIST_ENDPOINT`. Set in `.env.local` for local development and in GitHub repository secrets for CI/deploy.

**Sheet structure:**

| Column A  | Column B   | Column C | Column D |
| --------- | ---------- | -------- | -------- |
| Timestamp | First Name | Email    | Source   |

- Timestamp: ISO 8601, set server-side by Apps Script
- First Name: from the form
- Email: from the form, validated server-side
- Source: `"website"` for submissions from the form. Allows distinguishing from manual adds or future integrations.

**Duplicate checking:** Before appending a row, the script scans Column C for an existing match on the submitted email. If found, it returns success without adding a duplicate (silent dedup -- the user sees a success message either way).

**Version-controlled source:** `scripts/google/mailing-list.gs` is the canonical copy of the Apps Script code. Changes are made in the repo first, then manually copied to the Apps Script editor and redeployed.

**Deployment steps:**

1. Edit `scripts/google/mailing-list.gs` in this repo
2. Open the Apps Script project in the Google Apps Script editor
3. Replace the code with the updated version
4. Deploy > New deployment > Web app
5. Execute as: Me, Who has access: Anyone
6. Copy the new deployment URL into `NEXT_PUBLIC_MAILING_LIST_ENDPOINT`

## Consequences

- Mailing list works at zero cost with no external infrastructure
- Any officer with Google Sheet access can view and export signups
- The CORS workaround (`text/plain`) must be maintained -- switching to `application/json` will break the form
- Deployment is manual (copy code to Apps Script editor, redeploy). This is acceptable for a script that rarely changes.
- If the mailing list grows beyond what Sheets can handle (unlikely for a student org), we would revisit this decision
