"use client";
import { useAppContext } from '@/contexts/AppContext'

const Profile = () => {

    const { userId, isDarkMode } = useAppContext();

    return (
        <div className={`mt-14 flex-1 ${isDarkMode ? "bg-slate-700 text-white" : "bg-white text-black"}`}>
            <div className={`flex flex-col space-y-2 items-center justify-center m-auto max-w-screen-xl h-full justify-center px-4`}>

                Profile Page

            </div>
        </div>
    );
}

export default Profile;