import { ClimbingBoxLoader } from "react-spinners";

export default function Iconloader() {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <ClimbingBoxLoader color="#ffffff" size={30} />
    </div>
  );
}
