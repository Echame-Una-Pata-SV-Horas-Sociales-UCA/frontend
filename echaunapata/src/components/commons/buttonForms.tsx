interface ButtonFormsProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function ButtonForms({
  text,
  className = "",
  onClick,
  disabled = false,
}: ButtonFormsProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      type="button"
      disabled={disabled}
      className={`
        font-bold
        rounded-full
        transition-all
        flex items-center justify-center

        /* ---- RESPONSIVE ---- */
        w-full               /* en móvil ocupa todo */
        max-w-sm            /* en tablets no se hace enorme */
        sm:w-auto           /* en pantallas medianas vuelve a tamaño natural */
        
        text-sm             /* móvil */
        sm:text-base        /* tablet+ */

        h-11                /* móvil */
        sm:h-12             /* tablet+ */

        px-4 sm:px-6        /* padding adaptado */

        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
        }

        ${className}
      `}
    >
      {text}
    </button>
  );
}
