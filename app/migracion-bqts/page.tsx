"use client"
import Textarea from "@/components/forms/Textarea";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import CodeBlock from "@/components/page/CodeBlock";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import Stack from "@/components/page/Stack";
import { getFunctionName, getIdSpreadsheetDestino, getIdSpreadsheetOrigen, getNombreHojaDestino, getNombreHojaOrigen, getNombresColumnasACopiarDeOrigen, getProjectId, getQuery, getRangoALimpiarEnDestino, removeSingleLineComments } from "@/utils/funciones";
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

  function generarFuncionDesdeString(funcionTexto: string): string {
    if(funcionTexto.trim() === "") return "";

    const funcionComoTexto = removeSingleLineComments(funcionTexto);

    // Elementos si o si no opcionales
    const nombreFuncion: string = getFunctionName(funcionComoTexto);
    //if (!nombreFuncion) throw new Error("No se pudo obtener el nombre de la función");

    const idSpreadsheetDestino: string = getIdSpreadsheetDestino(funcionComoTexto);
    //if (!idSpreadsheetDestino) throw new Error("No se pudo obtener el id de destino");

    const nombreHojaDestino: string = getNombreHojaDestino(funcionComoTexto);
    //if (!nombreHojaDestino) throw new Error("No se pudo obtener el nombre de solapa de destino");

    const projectID: string = getProjectId(funcionComoTexto);
    //if (!rangoALimpiarEnDestino) throw new Error("No se pudo obtener el rango alimpiar en el destino");

    const query: string = getQuery(funcionComoTexto);
    //if (!rangoALimpiarEnDestino) throw new Error("No se pudo obtener el rango alimpiar en el destino");

    // 6️⃣ Generar la nueva función
    return `
  function ${nombreFuncion}() {
    BidcomData.bigqueryToSheets({
      projectId: "${projectID}",
      spreadsheetId: "${idSpreadsheetDestino}",
      sheetName: "${nombreHojaDestino}",
      batchSize: 3000,
      query: ${query}
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
          <Button title="Migrar Funcion Big Query" onClick={procesarFuncion}/>
        </Stack>
        <Stack>
          <CodeBlock code={resultado} language={"javascript"} height="h-125"/>
          <ButtonCopy text={resultado} type="secondary"/>
        </Stack>
      </GridTwoColumns>
    </PageContainer>
  );
}