export function getHeaderRange(range: string): string {
  // Separar inicio y fin
  const [start, end] = range.split(":");

  // Extraer columna y fila del inicio
  const startMatch = start.match(/^([A-Z]+)(\d+)?$/i);
  if (!startMatch) {
    throw new Error("Rango inválido");
  }

  const startCol = startMatch[1];
  const startRow = startMatch[2] ?? "1";

  // Extraer solo la columna del final
  const endMatch = end.match(/^([A-Z]+)(\d+)?$/i);
  if (!endMatch) {
    throw new Error("Rango inválido");
  }

  const endCol = endMatch[1];

  return `${startCol}${startRow}:${endCol}${startRow}`;
}


/// RECICLADOS
export function getFunctionName(code: string): string {
  const match = code.match(/function\s+([a-zA-Z_$][\w$]*)/);
  return match ? match[1].toString().trim() : "";
}

export function getNombreHojaDestino(text: string): string {
  const regex = /nombreHojaDestino\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getIdSpreadsheetDestino(text: string): string {
  const regex = /idSpreadsheetDestino\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}
/// FIN RECICLADOS

// GOOGLE SHEETS
export function getIdSpreadsheetOrigen(text: string): string {
  const regex = /idSpreadsheetOrigen\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getNombreHojaOrigen(text: string): string {
  const regex = /nombreHojaOrigen\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getNombresColumnasACopiarDeOrigen(text: string): string {
  const regex = /nombresColumnasACopiarDeOrigen\s*:\s*(\[[^\]]*\])/;
  const match = text.match(regex);
  return match ? match[1] : "";
}


export function getRangoALimpiarEnDestino(text: string): string {
  const regex = /rangoALimpiarEnDestino\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}
/// FIN GOOGLE SHEETS

/// BIG QUERY 

export function getProjectId(text: string): string {
  const regex = /projectId\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getQuery(text: string): string {
  const ejemplo1: string = getQueryEjemplo1(text);
  if(ejemplo1) return ejemplo1;

  const ejemplo2: string = getQueryEjemplo2(text);
  if(ejemplo2) return ejemplo2;

  const ejemplo3: string = getQueryEjemplo3(text);
  if(ejemplo3) {
    return ejemplo3.trim();
  }
  const ejemplo4: string = getQueryEjemplo4(text);
  if(ejemplo4) {
    return ejemplo4.trim();
  }
  return "";
}

export function getQueryEjemplo1(text: string): string {
  /*
  var query =
  "SELECT " +
  "campo1 " +
  "FROM tabla";
  */
  const regex = /var\s+query\s*=\s*((?:"[^"]*"\s*\+\s*)+"[^"]*")\s*;/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getQueryEjemplo2(text: string): string {
  /*
  var query = "\
  SELECT \
  FROM tabla \
  ";
  */
  const regex = /var\s+query\s*=\s*"([\s\S]*?)"\s*;/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getQueryEjemplo3(text: string): string {
  /*
  var query = '\
  SELECT \
  FROM tabla \
  ';
  */
  const regex = /var\s+query\s*=\s*'([\s\S]*?)'\s*;/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getQueryEjemplo4(text: string): string {
  /*
  var query = `
    SELECT
    FROM tabla
  `;
  */
  const regex = /var\s+query\s*=\s*`([\s\S]*?)`;/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

/// FIN BIG QUERY 

export function removeSingleLineComments(code: string): string {
  return code.replace(/(^|\s)\/\/.*$/gm, "");
}

/*
  idSpreadsheetOrigen: string;
  nombreHojaOrigen: string;
  idSpreadsheetDestino: string;
  nombreHojaDestino: string;
  nombresColumnasACopiarDeOrigen: string[];
  rangoALimpiarEnDestino: string;
*/
