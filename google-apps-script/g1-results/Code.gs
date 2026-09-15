const SPREADSHEET_ID = '1h4xAlmVj4xpfNq8C1TJ7LPWShM54BA3ER0PF6kVhWIQ';
const RESULTS_SHEET_NAME = 'VÉGSŐ';
const FIRST_DATA_ROW = 2;
const FIRST_RESULT_COLUMN = 6; // F
const RESULT_COLUMN_COUNT = 19; // F:X
const MAX_GLOBAL_REQUESTS_PER_MINUTE = 120;
const MAX_REQUESTS_PER_CODE_PER_MINUTE = 8;

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('G1 eredmények')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function lookupResult(rawNeptun) {
  const neptun = normalizeNeptun_(rawNeptun);

  if (!/^[A-Z0-9]{6}$/.test(neptun)) {
    return {
      ok: false,
      message: 'A Neptun-kódnak 6 betűből vagy számból kell állnia.',
    };
  }

  if (!allowRequest_(neptun)) {
    return {
      ok: false,
      message: 'Túl sok lekérdezés történt. Kérjük, próbálja újra egy perc múlva.',
    };
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(
    RESULTS_SHEET_NAME,
  );

  if (!sheet) {
    throw new Error('Az eredményeket tartalmazó munkalap nem található.');
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < FIRST_DATA_ROW) {
    return notFound_();
  }

  const rows = sheet
    .getRange(
      FIRST_DATA_ROW,
      FIRST_RESULT_COLUMN,
      lastRow - FIRST_DATA_ROW + 1,
      RESULT_COLUMN_COUNT,
    )
    .getDisplayValues();

  const row = rows.find(values => normalizeNeptun_(values[0]) === neptun);
  if (!row) {
    return notFound_();
  }

  return {
    ok: true,
    result: {
      neptun,
      bonusPoints: cleanValue_(row[1]),
      firstTest: cleanValue_(row[2]),
      secondTest: cleanValue_(row[3]),
      examEligibility: cleanValue_(row[9]),
      firstExam: cleanValue_(row[10]),
      secondExam: cleanValue_(row[11]),
      thirdExam: cleanValue_(row[12]),
      fourthExam: cleanValue_(row[13]),
      countedExam: cleanValue_(row[14]),
      percentage: cleanValue_(row[15]),
      grade: cleanValue_(row[16]),
      oralExemption: cleanValue_(row[17]),
      finalOralGrade: cleanValue_(row[18]),
    },
  };
}

function normalizeNeptun_(value) {
  return String(value || '')
    .trim()
    .toUpperCase();
}

function cleanValue_(value) {
  const text = String(value || '').trim();
  return !text || text.charAt(0) === '#' ? null : text;
}

function notFound_() {
  return {
    ok: false,
    message: 'Ehhez a Neptun-kódhoz jelenleg nem található eredmény.',
  };
}

function allowRequest_(neptun) {
  const minute = Math.floor(Date.now() / 60000);
  const codeHash = Utilities.base64EncodeWebSafe(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, neptun),
  ).slice(0, 24);

  return incrementWithinLimit_(
    'global:' + minute,
    MAX_GLOBAL_REQUESTS_PER_MINUTE,
  ) && incrementWithinLimit_(
    'code:' + codeHash + ':' + minute,
    MAX_REQUESTS_PER_CODE_PER_MINUTE,
  );
}

function incrementWithinLimit_(key, limit) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(3000);
    const cache = CacheService.getScriptCache();
    const current = Number(cache.get(key) || 0);

    if (current >= limit) {
      return false;
    }

    cache.put(key, String(current + 1), 90);
    return true;
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}
