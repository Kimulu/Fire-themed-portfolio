import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  // Progress bar simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) =>
        oldProgress >= 100 ? 100 : oldProgress + 10
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="text-6xl animate-pulse text-orange-500 mb-4">🔥</div>
      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-gray-800 rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="h-2 bg-orange-500 transition-all duration-200"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
