import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableSection({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">

      {/* HEADER – GRIS CLARO */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-[#F7F8F9] hover:bg-gray-100 transition"
      >
        <span className="font-semibold text-black text-lg">
          {title}
        </span>

        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </button>

      {/* CONTENT – BLANCO */}
      {open && (
        <div className="bg-white px-6 py-6">
          {children}
        </div>
      )}
    </div>
  );
}
