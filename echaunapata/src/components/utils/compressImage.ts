
export async function CompressImage(file: File, maxSizeMB = 1): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (!reader.result) return reject("Error al leer el archivo");
      img.src = reader.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Error al crear canvas");

      const MAX_WIDTH = 1024; // ancho máximo
      const scaleSize = MAX_WIDTH / img.width;
      canvas.width = MAX_WIDTH;
      canvas.height = img.height * scaleSize;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Comprimir a JPEG con calidad ajustable
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject("Error al comprimir");
          if (blob.size / 1024 / 1024 > maxSizeMB) {
            canvas.toBlob(
              (smallerBlob) => {
                if (!smallerBlob) return reject("Error al comprimir");
                resolve(new File([smallerBlob], file.name, { type: "image/jpeg" }));
              },
              "image/jpeg",
              0.7
            );
          } else {
            resolve(new File([blob], file.name, { type: "image/jpeg" }));
          }
        },
        "image/jpeg",
        0.9
      );
    };

    img.onerror = (err) => reject(err);
  });
}
