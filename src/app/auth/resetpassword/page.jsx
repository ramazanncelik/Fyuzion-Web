"use client"
import { useAppContext } from "@/contexts/AppContext";
import { useEffect, useState } from "react";
import CreateMailForm from '@/components/ResetPassword/CreateMailForm'
import UpdatePasswordForm from '@/components/ResetPassword/UpdatePasswordForm'

const ResetPassword = ({ searchParams }) => {

    const { isDarkMode } = useAppContext();
    const [searchParamsData, setSearchParamsData] = useState(null)

    useEffect(() => {

        if (searchParams.Email && searchParams.ConfirmationCode) {
            console.log(searchParams)
            setSearchParamsData({
                Email: searchParams.Email,
                ConfirmationCode: searchParams.ConfirmationCode
            })
        } else {
            setSearchParamsData(null);
        }

    }, [searchParams]);


    return (
        <div className={`mt-14 flex-1 ${isDarkMode ? "bg-slate-700 text-white" : "bg-white text-black"}`}>

            {searchParamsData ?
                <UpdatePasswordForm searchParamsData={searchParamsData} />
                :
                <CreateMailForm />}

        </div>
    );
}

export default ResetPassword;