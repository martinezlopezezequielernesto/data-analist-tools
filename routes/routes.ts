import { FaHome, FaTable, FaDatabase, FaSearch, FaCalculator, FaCog } from "react-icons/fa";
import { IconType } from "react-icons";
import { RiFileTransferFill } from "react-icons/ri";

export interface Route {
  name: string;
  href: string;
  title: string;
  icon: IconType;
}


export const routes: Route[] = [
  {
    name: "Inicio",
    href: "/",
    title: "Bienvenido",
    icon: FaHome,
  },
  {
    name: "Sheets",
    href: "/sheets",
    title: "Buscador de Sheets",
    icon: FaTable,
  },
  {
    name: "Big Query",
    href: "/big_query",
    title: "Consultas Big Query",
    icon: FaDatabase,
  },
  {
    name: "Query",
    href: "/query",
    title: "Generador de consultas",
    icon: FaSearch,
  },
    {
    name: "Migracion",
    href: "/migracion",
    title: "Migracion de Funciones",
    icon: RiFileTransferFill,
  },
  /*
  {
    name: "Formulas",
    href: "/formulas",
    title: "Calculadora de fórmulas",
    icon: FaCalculator,
  },
  */
  {
    name: "Settings",
    href: "/settings",
    title: "Configuración",
    icon: FaCog,
  },
];

