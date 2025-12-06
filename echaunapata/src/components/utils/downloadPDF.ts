export const DownloadPDF = async () => {
  try {
    const response = await fetch("/Adopcion-echameunapata.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ficha_Adopcion_EchameUnaPata.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Error al descargar PDF:", err);
  }
};
