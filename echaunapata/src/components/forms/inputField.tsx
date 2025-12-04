import * as Icons from "@mui/icons-material";

interface Props {
  placeholder: string;
  icon: keyof typeof Icons;
  name:string;
  value:string;
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ placeholder, icon, name, value, onChange }: Props) {
  const Icon = Icons[icon];

  return (
    <div className="w-full mb-3">
      <div className="relative w-full">

        {/* Icono ajustado para quedar más centrado */}
        <Icon
          className="absolute left-0 text-gray-500"
          style={{
            top: "38%",          // SUBE el icono
            transform: "translateY(-50%)",
          }}
        />

        {/* Input */}
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="
            w-full
            pl-8                 /* espacio para el icono */
            py-1.5               /* AUMENTA padding vertical */
            border-b
            border-gray-300
            focus:border-black
            focus:outline-none
            placeholder:text-gray-500
            placeholder:font-medium
          "
        />
      </div>
    </div>
  );
}
