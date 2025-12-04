interface ButtonFormsProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;   // ← NUEVO
}

export default function ButtonForms({
  text,
  className = "",
  onClick,
  disabled = false,    // ← DEFAULT
}: ButtonFormsProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick} // ← evita clic si está disabled
      type="button"
      disabled={disabled} // ← importante para accesibilidad
      className={` 
        font-bold
        rounded-full
        flex items-center justify-center
        h-12 px-6
        transition-all

        ${disabled 
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"  // ← ESTILO DISABLED
          : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
        }

        ${className}
      `}
    >
      {text}
    </button>
  );
}
