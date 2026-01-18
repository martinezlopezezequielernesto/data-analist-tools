"use client"
import Textarea from "@/components/forms/Textarea";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import CodeBlock from "@/components/page/CodeBlock";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import Stack from "@/components/page/Stack";
import { getFunctionName, getIdSpreadsheetDestino, getIdSpreadsheetOrigen, getNombreHojaDestino, getNombreHojaOrigen, getNombresColumnasACopiarDeOrigen, getRangoALimpiarEnDestino, removeSingleLineComments } from "@/utils/funciones";
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
  const rows = 18;

  function generarFuncionDesdeString(funcionTexto: string): string {
    if(funcionTexto.trim() === "") return "";

    const funcionComoTexto = removeSingleLineComments(funcionTexto);

    // Elementos si o si no opcionales
    const nombreFuncion: string = getFunctionName(funcionComoTexto);
    //if (!nombreFuncion) throw new Error("No se pudo obtener el nombre de la función");

    const idSpreadsheetOrigen: string = getIdSpreadsheetOrigen(funcionComoTexto);
    //if (!idSpreadsheetOrigen) throw new Error("No se pudo obtener el id de origen");

    const nombreHojaOrigen: string = getNombreHojaOrigen(funcionComoTexto);
    //if (!nombreHojaOrigen) throw new Error("No se pudo obtener el nombre de solapa de origen");

    const idSpreadsheetDestino: string = getIdSpreadsheetDestino(funcionComoTexto);
    //if (!idSpreadsheetDestino) throw new Error("No se pudo obtener el id de destino");

    const nombreHojaDestino: string = getNombreHojaDestino(funcionComoTexto);
    //if (!nombreHojaDestino) throw new Error("No se pudo obtener el nombre de solapa de destino");

    const rangoALimpiarEnDestino: string = getRangoALimpiarEnDestino(funcionComoTexto);
    //if (!rangoALimpiarEnDestino) throw new Error("No se pudo obtener el rango alimpiar en el destino");

    const nombresColumnasACopiarDeOrigen: string = getNombresColumnasACopiarDeOrigen(funcionComoTexto);
    //if (!nombresColumnasACopiarDeOrigen) throw new Error("No se pudo obtener las columnas a copiar del origen");

    // 6️⃣ Generar la nueva función
    return `
  function ${nombreFuncion}() {
    BidcomData.sheetsToSheets({
      sourceSpreadsheetId: "${idSpreadsheetOrigen}",
      sourceSheetName: "${nombreHojaOrigen}",

      targetSpreadsheetId: "${idSpreadsheetDestino}",
      targetSheetName: "${nombreHojaDestino}",

      headerRow: 1,
      targetClearRange: "${rangoALimpiarEnDestino}",

      sourceColumnNames: ${nombresColumnasACopiarDeOrigen},

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
            <Textarea value={funcion} placeholder="Escriba la funcion aqui...." onChange={setFuncion} height="h-125"/>
            <button onClick={resetBase} className="absolute top-3 right-3 p-3 rounded-full bg-gray-300 hover:bg-green-600 transition-colors duration-300 cursor-pointer group">
              <FiTrash2 className="size-4 md:size-6 text-gray-800 group-hover:text-white"/>
            </button>
          </div>
          <Button title="Migrar Funcion Sheet" onClick={procesarFuncion}/>
        </Stack>
        <Stack>
          <CodeBlock code={resultado} language={"javascript"} height="h-125"/>
          <ButtonCopy text={resultado} type="secondary"/>
        </Stack>
      </GridTwoColumns>
    </PageContainer>
  );
}