"use client";

import html2canvas from "html2canvas";
import { DownloadIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
interface Props {
  id: string;
}

const SaveGraphAsPng = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDownload = async (id: string) => {
    setIsLoading(true);
    const chartElement = document.getElementById(id);
    if (chartElement) {
      try {
        const canvas = await html2canvas(chartElement, {
          backgroundColor: "#111111",
          width: chartElement.offsetWidth + 20,
          height: chartElement.offsetHeight + 20,
        });
        const link = document.createElement("a");
        link.download = `${id}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (error) {
        console.error("Error capturing chart:", error);
        alert("Error capturing chart:");
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <button
      title="save as png"
      disabled={isLoading}
      onClick={() => handleDownload(id)}
      className="bg-secondary px-4 py-2 border border-secondary disabled:opacity-50 cursor-pointer rounded active:scale-95 transition-transform"
    >
      {isLoading ? (
        <Loader2Icon className="w-3 h-3 animate-spin" />
      ) : (
        <DownloadIcon className="w-3 h-3" />
      )}
    </button>
  );
};

export default SaveGraphAsPng;
