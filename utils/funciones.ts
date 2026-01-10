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


export function getFunctionName(code: string): string {
  const match = code.match(/function\s+([a-zA-Z_$][\w$]*)/);
  return match ? match[1].toString().trim() : "";
}

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

export function getIdSpreadsheetDestino(text: string): string {
  const regex = /idSpreadsheetDestino\s*:\s*"([^"]*)"/;
  const match = text.match(regex);
  return match ? match[1] : "";
}

export function getNombreHojaDestino(text: string): string {
  const regex = /nombreHojaDestino\s*:\s*"([^"]*)"/;
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
/*
  idSpreadsheetOrigen: string;
  nombreHojaOrigen: string;
  idSpreadsheetDestino: string;
  nombreHojaDestino: string;
  nombresColumnasACopiarDeOrigen: string[];
  rangoALimpiarEnDestino: string;
*/
