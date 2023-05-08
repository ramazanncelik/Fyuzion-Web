"use client"
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const App = () => {

  const { userId, isDarkMode } = useAppContext();
  const router = useRouter();

  useEffect(() => {

    if (userId) {
      router.replace("/home");
    } else {
      router.replace("/auth/login");
    }

  }, []);


  return (
    <div className={`mt-14 pt-2 flex-1 ${isDarkMode ? "bg-slate-700 text-white" : "bg-white text-black"}`}>
      <div className={`m-auto max-w-screen-xl justify-center px-4`}>
        App Page
      </div>
    </div>
  );
}

export default App;