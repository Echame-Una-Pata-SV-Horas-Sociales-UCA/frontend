import * as Icons from "@mui/icons-material";

interface CommitmentFieldProps {
  icon: keyof typeof Icons;
  question: string;
  name: string; // para agrupar los radios
  value: boolean | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CommitmentField({
  icon,
  question,
  name,
  value,
  onChange,
}: CommitmentFieldProps) {
  const Icon = Icons[icon];

  return (
    <div className="w-full flex items-start justify-between py-4">
      {/* ICONO + PREGUNTA */}
      <div className="flex gap-4 w-full max-w-[70%]">
        <Icon className="text-gray-500 mt-1" />
        <p className="text-gray-800 leading-snug">{question}</p>
      </div>

      {/* RADIO BUTTONS */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value="true"
            checked={value === true}
            onChange={onChange}
            className="w-4 h-4"
          />
          <span className="text-gray-700">Sí</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value="false"
            checked={value === false}
            onChange={onChange}
            className="w-4 h-4"
          />
          <span className="text-gray-700">No</span>
        </label>
      </div>
    </div>
  );
}
