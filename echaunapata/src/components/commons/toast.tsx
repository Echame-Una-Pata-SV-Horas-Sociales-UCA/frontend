interface ToastProps {
  type: "success" | "error";
  message: string;
}

export default function Toast({ type, message }: ToastProps) {
  return (
    <div
      className={`
        fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-medium
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
        animate-slide
      `}
    >
      {message}
    </div>
  );
}
