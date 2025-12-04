import * as Icons from "@mui/icons-material";

interface Props {
  placeholder: string;
  icon: keyof typeof Icons;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

export default function InputField({
  placeholder,
  icon,
  name,
  value,
  onChange,
  disabled,
  error,
}: Props) {
  const Icon = Icons[icon];

  return (
    <div className="w-full mb-3">
      <div className="relative w-full">
        <Icon
          className="absolute left-0 text-gray-500"
          style={{ top: "38%", transform: "translateY(-50%)" }}
        />
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full
            pl-8
            py-1.5
            border-b
            border-gray-300
            focus:border-black
            focus:outline-none
            placeholder:text-gray-500
            placeholder:font-medium
            ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : ""}
            ${error ? "border-red-500" : ""}
          `}
        />
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
