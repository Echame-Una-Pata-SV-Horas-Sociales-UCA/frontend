interface ButtonFormsProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function ButtonForms({
  text,
  className = "",
  onClick,
}: ButtonFormsProps) {
  return (
    <button
      onClick={onClick} // ← AGREGADO
      type="button" // ← IMPORTANTE para evitar submit automático
      className={`
        bg-blue-600
        text-white
        font-bold
        rounded-full
        hover:bg-blue-700
        transition-all
        flex items-center justify-center
        h-12 px-6
        cursor-pointer
        ${className}
      `}
    >
      {text}
    </button>
  );
}
