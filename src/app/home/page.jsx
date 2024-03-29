"use client";
import { useAppContext } from '@/contexts/AppContext'

const Home = () => {

    const { userId, isDarkMode } = useAppContext();

    return (
        <div className={`mt-14 flex-1 ${isDarkMode ? "bg-slate-700 text-white" : "bg-white text-black"}`}>
            <div className={`flex flex-col space-y-2 items-center justify-center m-auto max-w-screen-xl h-full px-4`}>

                Home Page

            </div>
        </div>
    );
}

export default Home;