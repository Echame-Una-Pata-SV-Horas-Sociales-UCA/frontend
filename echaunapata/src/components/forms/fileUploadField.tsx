import { CloudUploadOutlined } from "@mui/icons-material";
import { useRef } from "react";

interface FileUploadFieldProps {
  onFileSelect?: (file: File | null) => void;
}

export default function FileUploadField({ onFileSelect }: FileUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (onFileSelect) onFileSelect(file);
  };

  return (
    <div className="w-full">
      {/* TÍTULO + SUBTÍTULO */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <CloudUploadOutlined className="text-gray-600" />
        </div>

        <div>
          <p className="font-semibold text-gray-800 text-lg">Subir Archivos</p>
          <p className="text-gray-600 text-sm">
            Seleccione y suba archivos de la denuncia
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mb-4"></div>

      {/* CUADRO DE SUBIDA */}
      <div
        className="w-full border-2 border-dashed border-gray-300 rounded-xl py-10 flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => fileInputRef.current?.click()}
      >
        <CloudUploadOutlined className="text-gray-600 text-4xl mb-4" />

        <p className="text-gray-800 font-medium">
          Seleccione un archivo o arrástrelo aquí
        </p>

        <p className="text-gray-500 text-sm mt-1">JPEG, PNG, hasta 50MB</p>

        <button
          type="button"
          className="mt-6 bg-red-200 text-red-700 px-5 py-2 rounded-md font-semibold hover:bg-red-300 transition"
          onClick={() => fileInputRef.current?.click()}
        >
          Subir Archivo
        </button>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
