interface ButtonFormsProps {
  text: string;
  onClick?: () => void;
}

export default function ButtonForms({ text, onClick }: ButtonFormsProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        h-12
        bg-blue-600
        text-white
        font-bold
        rounded-full
        hover:bg-blue-700
        transition-all
        flex
        items-center
        justify-center
      "
    >
      {text}
    </button>
  );
}
