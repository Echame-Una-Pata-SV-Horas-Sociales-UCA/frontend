import { toast } from "react-hot-toast";

export const notifySuccess = (message: string) => {
  toast.success(message, {
    icon: "✔",
    style: {
      borderRadius: "10px",
      background: "#ffffff",
      color: "#222",
      border: "1px solid #e5e7eb",
    },
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    icon: "⚠",
    style: {
      borderRadius: "10px",
      background: "#ffffff",
      color: "#222",
      border: "1px solid #e5e7eb",
    },
  });
};

export const notifyLoading = (message: string) => {
  toast.loading(message, {
    style: {
      borderRadius: "10px",
      background: "#ffffff",
      color: "#222",
      border: "1px solid #e5e7eb",
    },
  });
};
