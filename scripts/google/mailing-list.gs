/**
 * Google Apps Script -- Mailing List Handler
 *
 * Deployed as: Web App ("Execute as me", "Anyone can access")
 * Sheet structure: Timestamp | First Name | Email | Source
 *
 * The site POSTs with Content-Type: text/plain to avoid CORS preflight.
 * Body is JSON: { firstName: string, email: string }
 *
 * To deploy:
 * 1. Open the Google Sheet
 * 2. Extensions > Apps Script
 * 3. Paste this code
 * 4. Deploy > New deployment > Web app
 * 5. Execute as: Me, Who has access: Anyone
 * 6. Copy the deployment URL to .env.local as NEXT_PUBLIC_MAILING_LIST_ENDPOINT
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var firstName = (data.firstName || '').trim()
    var email = (data.email || '').trim().toLowerCase()

    // Validate
    if (!firstName || !email) {
      return respond({ success: false, error: 'Name and email are required.' })
    }

    if (!isValidEmail(email)) {
      return respond({ success: false, error: 'Invalid email address.' })
    }

    // Check for duplicates
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    var emails = sheet
      .getRange('C:C')
      .getValues()
      .flat()
      .map(function (e) {
        return String(e).toLowerCase()
      })

    if (emails.indexOf(email) !== -1) {
      return respond({ success: true }) // Silent success for duplicates
    }

    // Append row
    sheet.appendRow([new Date().toISOString(), firstName, email, 'website'])

    return respond({ success: true })
  } catch (err) {
    return respond({ success: false, error: 'Server error.' })
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}
