"use client"
import Textarea from "@/components/forms/Textarea";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import Stack from "@/components/page/Stack";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

interface VariablesConfig {
  idSpreadsheetOrigen: string;
  nombreHojaOrigen: string;
  idSpreadsheetDestino: string;
  nombreHojaDestino: string;
  nombresColumnasACopiarDeOrigen: string[];
  rangoALimpiarEnDestino: string;
}


export default function Page(){
  const [funcion, setFuncion] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const resetBase = () => setFuncion("");
  const rows = 20;

  function generarFuncionDesdeString(funcionComoTexto: string): string {
    if(funcionComoTexto.trim() === "") return "";
    // 1️⃣ Obtener nombre de la función
    const matchNombre = funcionComoTexto.match(/function\s+([a-zA-Z0-9_]+)/);
    const nombreFuncion: string = matchNombre ? matchNombre[1] : "";

    if (!nombreFuncion) {
      throw new Error("No se pudo obtener el nombre de la función");
    }

    // 2️⃣ Extraer el contenido de "variables = ..."
    const matchVariables = funcionComoTexto.match(/var\s+variables\s*=\s*([\s\S]*?);/);
    if (!matchVariables) {
      throw new Error("No se encontró la variable 'variables'");
    }

    let variablesRaw: string = matchVariables[1].trim();

    // 3️⃣ Normalizar CASO 2 (array → objeto)
    if (variablesRaw.startsWith("[")) {
      variablesRaw = variablesRaw
        .replace(/^\[\s*/, "")
        .replace(/\s*\]$/, "");
    }

    // 4️⃣ Convertir a objeto JS
    // ⚠️ eval devuelve any
    const variables: VariablesConfig = eval("(" + variablesRaw + ")");

    // 5️⃣ Validar campos requeridos
    const requiredKeys: (keyof VariablesConfig)[] = [
      "idSpreadsheetOrigen",
      "nombreHojaOrigen",
      "idSpreadsheetDestino",
      "nombreHojaDestino",
      "nombresColumnasACopiarDeOrigen",
      "rangoALimpiarEnDestino"
    ];

    requiredKeys.forEach(key => {
      if (!variables[key]) {
        throw new Error(`Falta la propiedad requerida: ${key}`);
      }
    });

    // 6️⃣ Generar la nueva función
    return `
  function ${nombreFuncion}() {
    BidcomData.sheetsToSheets({
      sourceSpreadsheetId: "${variables.idSpreadsheetOrigen}",
      sourceSheetName: "${variables.nombreHojaOrigen}",

      targetSpreadsheetId: "${variables.idSpreadsheetDestino}",
      targetSheetName: "${variables.nombreHojaDestino}",

      headerRow: 1,
      targetClearRange: "${variables.rangoALimpiarEnDestino}",

      sourceColumnNames: ${JSON.stringify(variables.nombresColumnasACopiarDeOrigen)},

      applyFilter: false,
      filterColumnName: "columna_a_filtrar",
      filterColumnValue: "valor_a_filtrar"
    });
  }
  `.trim();
  }

  const procesarFuncion = () => {
    try {
      const resultadoGenerado = generarFuncionDesdeString(funcion);
      setResultado(resultadoGenerado);
    } catch (error) {
      const mensaje = error instanceof Error ? error.message : "Error desconocido";
      alert(mensaje);
      setResultado("");
    }
  };

  return (
    <PageContainer>
      <GridTwoColumns>
        <Stack>
          <div className="relative">
            <Textarea value={funcion} placeholder="Escriba la funcion aqui...." onChange={setFuncion} rows={rows}/>
            <button onClick={resetBase} className="absolute top-3 right-3 p-3 rounded-full bg-gray-300 hover:bg-green-600 transition-colors duration-300 cursor-pointer group">
              <FiTrash2 className="size-4 md:size-6 text-gray-800 group-hover:text-white"/>
            </button>
          </div>
          <Button title="Migrar Funcion" onClick={procesarFuncion}/>
        </Stack>
        <Stack>
          <Textarea value={resultado} placeholder="Aqui se escribira la nueva funcion...." onChange={setResultado} rows={rows}/>
          <ButtonCopy text={resultado} type="secondary"/>
        </Stack>
      </GridTwoColumns>
    </PageContainer>
  );
}