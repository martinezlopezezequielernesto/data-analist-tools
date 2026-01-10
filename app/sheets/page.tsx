"use client"
import Input from "@/components/forms/Input";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";

export default function Page() {
  return (
    <PageContainer>
      <Input value="" placeholder="Ingrese el id de la Sheet" onChange={()=>{}}/>
      <Button title="Buscar Sheet"/>
    </PageContainer>
  );
}