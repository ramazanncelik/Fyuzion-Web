"use client"
import Link from 'next/link'
import { useAppContext } from '@/contexts/AppContext'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { FaHome, FaSearch, FaUser, FaSignInAlt, FaUserPlus, FaSun, FaMoon } from 'react-icons/fa'
import { MdLockReset } from 'react-icons/md'

const Navbar = () => {

    const { language, isDarkMode, changeThemeMode, userId } = useAppContext();
    const [menuİsVisible, setMenuİsVisible] = useState(false);

    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuİsVisible(!menuİsVisible);
    };

    return (
        <nav className={`w-full fixed z-10 border-b select-none ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-300"}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <div className="flex items-center">
                    <span className={`text-xl font-semibold ml-2 ${isDarkMode ? "text-white" : "text-black"}`}>Fyuzion</span>
                </div>
                <button onClick={() => toggleMenu()} className={`inline-flex items-center p-2 rounded-lg md:hidden focus:outline-none focus:ring-2 ${isDarkMode ? "text-gray-300 hover:bg-slate-600 focus:ring-slate-600" : "text-black hover:bg-gray-100 focus:ring-gray-200"}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-auto md:block">
                    <ul className="items-center font-medium flex flex-row space-x-2">
                        {userId ?
                            <>
                                <li>
                                    <Link onClick={() => setMenuİsVisible(false)} href={"/home"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/home" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                        <FaHome size={16} />
                                        <span>{language === "tr" ? "Ev" : "Home"}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMenuİsVisible(false)} href={"/explore"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/explore" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                        <FaSearch size={16} />
                                        <span>{language === "tr" ? "Keşfet" : "Explore"}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMenuİsVisible(false)} href={"/profile"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/profile" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                        <FaUser size={16} />
                                        <span>{language === "tr" ? "Profil" : "Profile"}</span>
                                    </Link>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link onClick={() => setMenuİsVisible(false)} href={"/auth/login"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/auth/login" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                        <FaSignInAlt size={20} />
                                        <span>{language === "tr" ? "Giriş Yap" : "Login"}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMenuİsVisible(false)} href={"/auth/signup"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/auth/signup" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                        <FaUserPlus size={20} />
                                        <span>{language === "tr" ? "Kayıt Ol" : "Sign Up"}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMenuİsVisible(false)} href={"/auth/resetpassword"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/auth/resetpassword" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                        <MdLockReset size={20} />
                                        <span>{language === "tr" ? "Şifre Sıfırla" : "Reset Password"}</span>
                                    </Link>
                                </li>
                            </>}
                        <li onClick={() => changeThemeMode()}>
                            <button className={`w-full p-2 rounded-lg flex flex-row items-center space-x-2 ${isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100"}`}>
                                {isDarkMode ?
                                    <FaMoon size={16} />
                                    :
                                    <FaSun size={16} />}
                                <span>{language === "tr" ? "Tema Modu" : "Theme Mod"}</span>
                            </button>
                        </li>
                    </ul>
                </div>
                {menuİsVisible ?
                    <div className="block w-full md:hidden">
                        <ul className="w-full flex flex-col space-y-1 mt-4 p-4 border border-gray-300 rounded-lg">
                            {userId ?
                                <>
                                    <li>
                                        <Link onClick={() => setMenuİsVisible(false)} href={"/home"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/home" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                            <FaHome size={16} />
                                            <span>{language === "tr" ? "Ev" : "Home"}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setMenuİsVisible(false)} href={"/explore"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/explore" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                            <FaSearch size={16} />
                                            <span>{language === "tr" ? "Keşfet" : "Explore"}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setMenuİsVisible(false)} href={"/profile"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/profile" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                            <FaUser size={16} />
                                            <span>{language === "tr" ? "Profil" : "Profile"}</span>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link onClick={() => setMenuİsVisible(false)} href={"/auth/login"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/auth/login" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                            <FaSignInAlt size={20} />
                                            <span>{language === "tr" ? "Giriş Yap" : "Login"}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setMenuİsVisible(false)} href={"/auth/signup"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/auth/signup" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                            <FaUserPlus size={20} />
                                            <span>{language === "tr" ? "Kayıt Ol" : "Sign Up"}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setMenuİsVisible(false)} href={"/auth/resetpassword"} className={`p-2 rounded-lg flex flex-row items-center space-x-2 ${pathname === "/auth/resetpassword" && "text-orange-500 hover:bg-orange-500 hover:text-white" || (isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100")}`}>
                                            <MdLockReset size={20} />
                                            <span>{language === "tr" ? "Şifre Sıfırla" : "Reset Password"}</span>
                                        </Link>
                                    </li>
                                </>}
                            <li onClick={() => { changeThemeMode(); toggleMenu() }}>
                                <button className={`w-full p-2 rounded-lg flex flex-row items-center space-x-2 ${isDarkMode ? "text-white hover:bg-slate-600" : "text-black hover:bg-gray-100"}`}>
                                    {isDarkMode ?
                                        <FaMoon size={16} />
                                        :
                                        <FaSun size={16} />}
                                    <span>{language === "tr" ? "Tema Modu" : "Theme Mod"}</span>
                                </button>
                            </li>
                        </ul>
                    </div> :
                    <></>}
            </div>
        </nav>
    );
}

export default Navbar;