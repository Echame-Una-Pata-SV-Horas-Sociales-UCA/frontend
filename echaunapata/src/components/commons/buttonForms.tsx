interface ButtonFormsProps {
  text: string;
  className?: string;
}

export default function ButtonForms({ text, className = "" }: ButtonFormsProps) {
  return (
    <div
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
    </div>
  );
}
