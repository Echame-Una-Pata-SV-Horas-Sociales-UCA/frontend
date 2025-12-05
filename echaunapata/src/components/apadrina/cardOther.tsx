
const cardBase =
  "rounded-xl p-5 border shadow-md transition hover:shadow-xl hover:scale-[1.02] bg-white/90 border-[#e8d7cf]";
const titleColor = "text-[#6B2E2E]";

export default function CardOther({ title, name, email, icon, link }: any) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardBase}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h4 className={`text-lg font-bold ${titleColor}`}>{title}</h4>
      </div>

      {name && <p className="text-gray-700">{name}</p>}
      {email && (
        <p className="text-[#6B2E2E] break-all font-medium mt-2">{email}</p>
      )}
    </a>
  );
}