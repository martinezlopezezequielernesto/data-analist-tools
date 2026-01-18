import { FaTable, FaDatabase, FaSearch, FaCog } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiGooglebigquery, SiGooglesheets } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";

export interface Route {
  name: string;
  href: string;
  title: string;
  icon: IconType;
  description: string;
}

export const routes: Route[] = [
  {
    name: "Inicio",
    href: "/",
    title: "Bienvenido",
    icon: IoHomeSharp,
    description: "Acceso rápido a todas las herramientas disponibles."
  },
  {
    name: "Sheets ID",
    href: "/sheets",
    title: "Buscador de Sheets",
    icon: FaTable,
    description: "Busca y analiza información a partir del ID de Google Sheets."
  },
  {
    name: "Big Query",
    href: "/big_query",
    title: "Consultas Big Query",
    icon: FaDatabase,
    description: "Prepara tus consultas SQL en BigQuery para usarlas."
  },
  {
    name: "Query",
    href: "/query",
    title: "Generador de consultas",
    icon: FaSearch,
    description: "Crea fórmulas QUERY para Google Sheets de manera mas sencilla."
  },
  {
    name: "Sheets",
    href: "/migracion-sts",
    title: "Migracion Sheets → Sheets",
    icon: SiGooglesheets,
    description: "Migra funciones entre documentos de Google Sheets de manera mas sencilla."
  },
  {
    name: "Big Query",
    href: "/migracion-bqts",
    title: "Migracion BigQuery → Sheets",
    icon: SiGooglebigquery,
    description: "Migra funciones de BigQuery a Google Sheets de manera mas sencilla."
  },
  {
    name: "Settings",
    href: "/settings",
    title: "Configuración",
    icon: FaCog,
    description: "Personaliza preferencias y opciones de la aplicación"
  },
];


