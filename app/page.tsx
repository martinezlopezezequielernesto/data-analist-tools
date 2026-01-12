"use client"
import Textarea from "@/components/forms/Textarea";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";
import ButtonCopy from "@/components/page/ButtonCopy";
import CodeBlock from "@/components/page/CodeBlock";
import GridTwoColumns from "@/components/page/GridTwoColumns";
import Stack from "@/components/page/Stack";

export default function Page() {
  const exampleCode: string = `// Utils para manejo de usuarios
    type User = {
      id: number;
      name: string;
      email: string;
      isActive: boolean;
    };

    // Simula una llamada async
    async function fetchUsers(): Promise<User[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "Juan Pérez",
              email: "juan@test.com",
              isActive: true
            },
            {
              id: 2,
              name: "Ana Gómez",
              email: "ana@test.com",
              isActive: false
            }
          ]);
        }, 1000);
      });
    }

    export async function getActiveUsers() {
      const users = await fetchUsers();

      return users
        .filter((user) => user.isActive)
        .map((user) => ({
          id: user.id,
          label: \`\${user.name} <\${user.email}>\`
        }));
    }
    `;
  
  const language: string = "typescript";

  const rows = 15;
  return (
    <PageContainer>
      <GridTwoColumns>
        <Stack>
          <CodeBlock code={exampleCode} language={language} height="h-125"/>
          <Button title="Migrar Funcion Sheet" onClick={()=>{}}/>
        </Stack>
        <Stack>
          <Textarea value={"resultado"} placeholder="Aqui se escribira la nueva funcion...." onChange={()=>{}} height="h-125"/>
          <ButtonCopy text={"resultado"} type="secondary"/>
        </Stack>
      </GridTwoColumns>
    </PageContainer>
  );
}
