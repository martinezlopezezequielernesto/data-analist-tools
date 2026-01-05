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
