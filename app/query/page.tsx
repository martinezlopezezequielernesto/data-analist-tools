"use client"

import FormField from "@/components/forms/FormField";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import PageContainer from "@/components/main/PageContainer";
import Paragraph from "@/components/page/Paragraph";
import Stack from "@/components/page/Stack";
import { useMemo, useState } from "react";
import Badge from "@/components/page/Badge";
import Textarea from "@/components/forms/Textarea";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import { getHeaderRange } from "@/utils/funciones";



export default function Page() {
  const [solapa, setSolapa] = useState<string>("");
  const [rango, setRango] = useState<string>("");
  const [columnas, setColumnas] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const diccionario_columnas = useMemo(() => {
    if (!columnas) return {};

    return columnas
      .split("\t") // separamos por TAB
      .filter(columna => columna.trim() !== "") // quitamos vacías
      .reduce<Record<string, string>>((acc, columnaOriginal) => {
        const columnaLimpia = columnaOriginal
          .trim() // espacios inicio/fin
          .toLowerCase() // minúsculas
          .normalize("NFD") // separa letras y acentos
          .replace(/[\u0300-\u036f]/g, "") // quita acentos
          .replace(/\s+/g, "_"); // espacios → _

        acc[columnaLimpia] = columnaOriginal.trim();
        return acc;
      }, {});
  }, [columnas]);


  const handleBadge = (columna: string) => setQuery(value => value + columna);


  const crearConsulta = () => {
    if(!solapa || !rango){
      alert("Te falta agregar los encabezados o la solapa!!!!");
      return;
    }

    const encabezados = getHeaderRange(rango);

    let query_final = query;
    Object.keys(diccionario_columnas).forEach((columna_i) => {
      query_final = query_final.replaceAll(columna_i, 'Col"&' + columna_i + '&"');
    });

    // Obtenemos las columnas usadas dentro de la query 
    let columnas_usadas: string[] = [];
    Object.keys(diccionario_columnas).forEach((columna_i) => {
      if(query.includes(columna_i)) columnas_usadas.push(columna_i);
    });
    let columnas_final: string[] = columnas_usadas.map((col) =>"\t" + col + "; COINCIDIR(\""+ diccionario_columnas[col] +"\"; encabezados; 0);");
    

    let base_final = [
      "=LET(",
      `\tdatos; '${solapa}'!${rango};`,
      `\tencabezados; '${solapa}'!${encabezados};`,
      ""]
      .concat(columnas_final)
      .concat([
        "\t",
        "\tQUERY(",
        "\t\tdatos;",
      ])
      .concat(("\"" + query_final + "\";").split('\n').map(fila => "\t\t" + fila))
      .concat([
        "\t\t1",
        "\t)"
      ])
      .concat([")"]);

    setResultado(base_final.join("\n"));
  }

  return (
    <PageContainer>
      {/*<Paragraph center text="Crea consultas Query de manera mas dinamica." />*/}
      <GridTwoColumns>
        <Stack>
          <FormField>
            <Label>Solapa de Trabajo:</Label>
            <Input value={solapa} onChange={setSolapa} placeholder="Ingrese nombre de la solapa...."/>
          </FormField>
        </Stack>
        <Stack>
          <FormField>
            <Label>Rango de Trabajo:</Label>
            <Input value={rango} onChange={setRango} placeholder="Ingrese rango de trabajo...."/>
          </FormField>
        </Stack>
      </GridTwoColumns>

      <FormField>
        <Label>Columnas:</Label>
        <Input value={columnas} onChange={setColumnas} placeholder="Ingrese las columnas...."/>
      </FormField>

      <div className="w-full flex flex-wrap gap-3">
        {Object.keys(diccionario_columnas).map((columna, index) => (
          <Badge key={index} value={columna} onClick={() => handleBadge(columna)} />
        ))}
      </div>

      <GridTwoColumns>
        <Stack>
          <Textarea value={query} placeholder="Escriba su query aqui...." onChange={setQuery} rows={10}/>
          <Button title="Crear Query" onClick={crearConsulta}/>
        </Stack>
        <Stack>
          <Textarea value={resultado} placeholder="Aqui se escribira la query...." onChange={setResultado} rows={10}/>
          <ButtonCopy text={resultado} type="secondary"/>
        </Stack>
      </GridTwoColumns>
      
    </PageContainer>
  );
}