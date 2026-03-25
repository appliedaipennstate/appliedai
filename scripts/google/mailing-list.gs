function doPost(e) {
  try {
    var firstName = ''
    var email = ''

    // Handle both form-encoded and JSON submissions
    if (e.parameter && e.parameter.firstName) {
      firstName = (e.parameter.firstName || '').trim()
      email = (e.parameter.email || '').trim().toLowerCase()
    } else if (e.postData && e.postData.contents) {
      var data = JSON.parse(e.postData.contents)
      firstName = (data.firstName || '').trim()
      email = (data.email || '').trim().toLowerCase()
    }

    if (!firstName || !email) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: 'Name and email are required.' })
      ).setMimeType(ContentService.MimeType.JSON)
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    var emails = sheet
      .getRange('C:C')
      .getValues()
      .flat()
      .map(function (v) {
        return String(v).toLowerCase()
      })

    if (emails.indexOf(email) !== -1) {
      return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
        ContentService.MimeType.JSON
      )
    }

    sheet.appendRow([new Date().toISOString(), firstName, email, 'website'])
    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
      ContentService.MimeType.JSON
    )
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: 'Server error: ' + err.message })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Mailing list endpoint is live. Use POST to submit.' })
  ).setMimeType(ContentService.MimeType.JSON)
}
