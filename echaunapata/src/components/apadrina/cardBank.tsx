import { Banknote } from "lucide-react";
import toast from "react-hot-toast";

const cardBase =
  "rounded-xl p-5 border shadow-md transition hover:shadow-xl hover:scale-[1.02] bg-white/90 border-[#e8d7cf]";
const titleColor = "text-[#6B2E2E]";
const accentColor = "#8B3A3A";

export default function CardBank({ title, account, extra, icon, link }: any) {
  const handleClick = () => {
    navigator.clipboard.writeText(account).then(() => {
      toast.success(`🐶 Cuenta copiada: ${title}`);
      setTimeout(() => {
        window.open(link, "_blank");
      }, 1000);
    });
  };

  return (
    <div
      className={cardBase}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon ?? <Banknote className="w-6 h-6" color={accentColor} />}
        <h4 className={`text-lg font-bold ${titleColor}`}>{title}</h4>
      </div>

      <p className="text-gray-700 font-medium">
        Cuenta: <span className="font-bold text-[#6B2E2E]">{account}</span>
      </p>

      {extra && <p className="text-sm text-gray-600 mt-2">{extra}</p>}
    </div>
  );
}
