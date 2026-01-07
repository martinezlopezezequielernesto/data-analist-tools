"use client"
import Textarea from "@/components/forms/Textarea";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import Stack from "@/components/page/Stack";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

export default function Page(){
  const [funcion, setFuncion] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const resetBase = () => setFuncion("");
  const rows = 18;

  const procesarFuncion = () => {

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