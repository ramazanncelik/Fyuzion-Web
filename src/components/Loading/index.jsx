"use client"

import { useAppContext } from "../../contexts/AppContext";

const Loading = () => {

  const { isDarkMode } = useAppContext();

  return (
    <div className={`w-8 h-8 border-b-2 rounded-full animate-spin ${isDarkMode ? "border-white" : "border-black"}`}></div>
  );
};

export default Loading;
