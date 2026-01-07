"use client";

import Textarea from "@/components/forms/Textarea";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import Paragraph from "@/components/page/Paragraph";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import Stack from "@/components/page/Stack";
import PageContainer from "@/components/main/PageContainer";

export default function Page() {
  const [base, setBase] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const handleClick = () => {
    if(base.trim() === ""){
      setResultado("");
      return;
    }
    // Separar por líneas
    const lines = base.split("\n");

    // Agregar "/" al final de cada línea y unirlas con salto de línea
    const formattedQuery = lines.map(line => line + " \\").join("\n");

    // Crear la variable query
    const query = formattedQuery;

    // Guardarlo en el estado resultado (opcional)
    setResultado(query);
  };

  const resetBase = () => setBase("");
  const rows: number = 20;

  return (
    <PageContainer>
      {/*<Paragraph center text="Crea consultas de BigQuery rápidamente y optimiza tus tareas diarias de análisis de datos." />*/}
      <GridTwoColumns>
        <Stack>
          <div className="relative">
            <Textarea value={base} onChange={setBase} placeholder="Escribe aquí tu query..." rows={rows} />
            <button onClick={resetBase} className="absolute top-3 right-3 p-3 rounded-full bg-gray-300 hover:bg-green-600 transition-colors duration-300 cursor-pointer group">
              <FiTrash2 className="size-4 md:size-6 text-gray-800 group-hover:text-white"/>
            </button>
          </div>
          <Button title="Generar Variable" type="primary" onClick={handleClick} />
        </Stack>
        <Stack>
          <Textarea value={resultado} onChange={setResultado} placeholder="Aquí se genera la query..." rows={rows} />
          <ButtonCopy text={resultado} type="secondary"/>
        </Stack>
      </GridTwoColumns>
    </PageContainer>
  );
}
