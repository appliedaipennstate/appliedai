function doPost(e) {
  try {
    var source = ''
    var data = {}

    // Parse incoming data (form-encoded or JSON)
    if (e.parameter && e.parameter.email) {
      data = e.parameter
      source = (e.parameter.source || 'website').trim()
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents)
      source = (data.source || 'website').trim()
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

    // Route to the correct tab based on source
    if (source === 'speaker-interest') {
      return handleSpeakerInterest(spreadsheet, data)
    } else {
      return handleMailingList(spreadsheet, data)
    }
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: 'Server error: ' + err.message })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function handleMailingList(spreadsheet, data) {
  var firstName = (data.firstName || '').trim()
  var email = (data.email || '').trim().toLowerCase()

  if (!firstName || !email) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: 'Name and email are required.' })
    ).setMimeType(ContentService.MimeType.JSON)
  }

  var sheet = spreadsheet.getSheetByName('Mailing List') || spreadsheet.getActiveSheet()
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
}

function handleSpeakerInterest(spreadsheet, data) {
  var fullName = (data.fullName || '').trim()
  var email = (data.email || '').trim().toLowerCase()

  if (!fullName || !email) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: 'Name and email are required.' })
    ).setMimeType(ContentService.MimeType.JSON)
  }

  // Get or create the Speaker Interest tab
  var sheet = spreadsheet.getSheetByName('Speaker Interest')
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Speaker Interest')
    sheet.appendRow([
      'Timestamp',
      'Full Name',
      'Email',
      'Organization',
      'Role',
      'Topic',
      'Format',
      'Notes',
    ])
  }

  // Check for duplicate email
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

  sheet.appendRow([
    new Date().toISOString(),
    fullName,
    email,
    (data.organization || '').trim(),
    (data.role || '').trim(),
    (data.topic || '').trim(),
    (data.format || 'either').trim(),
    (data.notes || '').trim(),
  ])

  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
    ContentService.MimeType.JSON
  )
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Mailing list endpoint is live. Use POST to submit.' })
  ).setMimeType(ContentService.MimeType.JSON)
}
