import DataVisualization from "@/components/DataVisualization";
import Matrics from "@/components/Matrics";
import RecentStreams from "@/components/RecentStreams";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Matrics />
      <DataVisualization />
      <RecentStreams />
    </div>
  );
}
