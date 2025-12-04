interface ObservationsFieldProps {
  title: string;
  description: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ObservationsField({
  title,
  description,
  name,
  value,
  onChange,
}: ObservationsFieldProps) {
  return (
    <div className="w-full mt-10">
      {/* TITULO */}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>

      {/* DESCRIPCIÓN */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-6xl">
        {description}
      </p>

      {/* INPUT AREA */}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Escribe aquí"
        className="
          w-full
          resize-none
          border-b
          border-gray-300
          focus:outline-none
          focus:border-black
          text-gray-800
        "
        rows={4}
      />
    </div>
  );
}
