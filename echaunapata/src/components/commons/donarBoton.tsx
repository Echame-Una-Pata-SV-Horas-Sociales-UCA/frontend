import { Link } from "react-router-dom";

interface DonarBotonProps {
  text?: string;
  color?: string;      // Fondo del botón
  to?: string;         // Ruta a redirigir
  full?: boolean;      // Si debe ocupar todo el ancho
  size?: "sm" | "md" | "lg"; // Tamaño del botón
}

export default function DonarBoton({
  text = "¡Donar!",
  color = "#F23413",
  to = "/adopta",
  full = false,
  size = "md",
}: DonarBotonProps) {
  const sizeClasses =
    size === "sm"
      ? "text-sm px-4 py-2"
      : size === "lg"
      ? "text-lg px-8 py-4"
      : "text-base px-6 py-3";

  return (
    <Link
      to={to}
      className={`
        ${full ? "w-full block text-center" : "inline-block"}
        font-semibold
        text-white
        rounded-full
        shadow-md
        hover:brightness-110
        transition-all
        ${sizeClasses}
      `}
      style={{ backgroundColor: color }}
    >
      {text}
    </Link>
  );
}
