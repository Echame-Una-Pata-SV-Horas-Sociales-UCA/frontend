import toast from "react-hot-toast";

const cardBase =
  "rounded-xl p-5 border shadow-md transition hover:shadow-xl hover:scale-[1.02] bg-white/90 border-[#e8d7cf]";
const titleColor = "text-[#6B2E2E]";

export default function CardOther({ title, name, email, icon, link }: any) {
  const handleClick = () => {
    const textToCopy = email || name || "";
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        toast.success(`🐶 ${textToCopy} copiado al portapapeles`);
        setTimeout(() => {
          window.open(link, "_blank");
        }, 1000); 
      });
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={cardBase}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h4 className={`text-lg font-bold ${titleColor}`}>{title}</h4>
      </div>

      {name && <p className="text-gray-700">{name}</p>}
      {email && (
        <p className="text-[#6B2E2E] break-all font-medium mt-2">{email}</p>
      )}
    </div>
  );
}
