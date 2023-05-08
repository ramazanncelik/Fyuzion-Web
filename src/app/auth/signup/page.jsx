"use client"

import { useAppContext } from "@/contexts/AppContext";
import { signUpValidations } from "@/utils/validations";
import { useMutation } from "@apollo/client";
import { addUser } from '@/apollo/User/userMutations'
import { useState } from "react";
import Loading from "@/components/Loading";
import { useFormik } from "formik";
import { defaultImage } from '@/utils/utils'
import { toast } from "react-hot-toast";
import { useSelector } from 'react-redux';
import store from "@/store";
import { openModal } from "@/store/modal";
import Modal from "@/components/Modal";

const SignUp = () => {

    const { isDarkMode, language } = useAppContext();
    const { open, data } = useSelector(state => state.modal)

    const [createUser, { loading }] = useMutation(addUser);
    const [usageAgreement, setUsageAgreement] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);

    const { handleChange, handleSubmit, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            email: "",
            nickName: "",
            password: "",
            passwordConfirm: "",
        },
        onSubmit: async (values) => {
            if (usageAgreement) {
                const result = await createUser({
                    variables: {
                        data: {
                            Email: values.email,
                            NickName: values.nickName,
                            Password: values.password,
                            ImageUrl: defaultImage,
                            Name: "",
                            Biography: "",
                            Website: "",
                            PhoneNumber: "",
                            Follower: 0,
                            MyFollowed: 0,
                            ConfirmationCode: (Math.floor(Math.random() * 90000) + 10000).toString(),
                            EmailVerify: false,
                            OnlineStatus: false,
                            UsageAgreement: usageAgreement,
                            IsPrivate: false
                        }
                    }
                });

                if (result) {
                    if (result.data) {
                        if (result.data.createUser) {
                            toast.success(language.includes("tr") ?
                                "Üyelik Oluşturuldu. Lütfen mail adresinizi kontrol ediniz." :
                                "Membership Created. Please check your e-mail address.");
                            handleReset();
                        } else {
                            toast.error(language.includes("tr") ?
                                "Girdiğiniz E-posta adresi veya Kullanıcı Adı kullanımda." :
                                "The Email address or Username you entered is in use.");
                        }
                    }
                }
            } else {
                toast.error(language.includes("tr") ?
                    "Lütfen Kullanım Koşullarını Onaylayınız!" :
                    "Please Confirm the Terms of Use!");
            }
        },
        validationSchema: signUpValidations
    });

    function usageAgreementModalOpen() {

        store.dispatch(openModal({
            name: 'usage-agreement-modal',
        }))

    }

    return (
        <div className={`mt-14 flex-1 ${isDarkMode ? "bg-slate-700 text-white" : "bg-white text-black"}`}>

            {open && <Modal name={open} data={data} />}

            <form onSubmit={handleSubmit} className={`flex flex-col space-y-2 items-center justify-center m-auto max-w-screen-xl h-full justify-center px-4`}>

                <p className={`w-96 text-center font-bold text-2xl ${isDarkMode ? "text-white" : "text-black"}`}>
                    {language.includes("tr") ? "Kayıt Ol" : "Sign In"}
                </p>

                <div className="w-96 flex flex-col space-y-2">
                    <input
                        className={`w-full mb-1 border p-2.5 rounded-lg text-sm ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-200"}`}
                        name="email"
                        placeholder={language.includes("tr") ? "E-mail adresi" : "E-mail adress"}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                    />
                    {errors.email && touched.email &&
                        <p className="w-full bg-red-500 p-2 rounded text-white">
                            {errors.email}
                        </p>}
                </div>

                <div className="w-96 flex flex-col space-y-2">
                    <input
                        className={`w-full mb-1 border p-2.5 rounded-lg text-sm ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-200"}`}
                        name="nickName"
                        placeholder={language.includes("tr") ? "Kullanıcı Adı" : "Nick Name"}
                        onChange={handleChange("nickName")}
                        onBlur={handleBlur("nickName")}
                        value={values.nickName}
                    />
                    {errors.nickName && touched.nickName &&
                        <p className="w-full bg-red-500 p-2 rounded text-white">
                            {errors.nickName}
                        </p>}
                </div>

                <div className="w-96 flex flex-col space-y-2">
                    <input
                        type="password"
                        className={`w-full mb-1 border p-2.5 rounded-lg text-sm ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-200"}`}
                        name="password"
                        placeholder={language.includes("tr") ? "Şifre" : "Password"}
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                        keyboardType="email-address"
                        value={values.password}
                    />
                    {errors.password && touched.password &&
                        <p className="w-full bg-red-500 p-2 rounded text-white">
                            {errors.password}
                        </p>}
                </div>

                <div className="w-96 flex flex-col space-y-2">
                    <input
                        type="password"
                        className={`w-full mb-1 border p-2.5 rounded-lg text-sm ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-200"}`}
                        name="passwordConfirm"
                        placeholder={language.includes("tr") ? "Şifre Onayla" : "Password Confirm"}
                        onChange={handleChange("passwordConfirm")}
                        onBlur={handleBlur("passwordConfirm")}
                        keyboardType="email-address"
                        value={values.passwordConfirm}
                    />
                    {errors.passwordConfirm && touched.passwordConfirm &&
                        <p className="w-full bg-red-500 p-2 rounded text-white">
                            {errors.passwordConfirm}
                        </p>}
                </div>

                <div className="w-96 flex flex-row items-center space-x-2">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            value={usageAgreement}
                            onChange={(e) => setUsageAgreement(!usageAgreement)}
                            className="w-4 h-4" />
                    </div>
                    {language.includes("tr") ?
                        <div className="flex flex-row space-x-2 items-center justify-center">
                            <button type="button" onClick={() => usageAgreementModalOpen()}>
                                <p className="text-blue-500 font-bold underline">
                                    Kullanım Şartlarını
                                </p>
                            </button>
                            <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
                                onaylıyorum.
                            </p>
                        </div> :
                        <div className="flex flex-row space-x-2 items-center justify-center">
                            <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
                                I accept the
                            </p>
                            <button type="button" onClick={() => usageAgreementModalOpen()}>
                                <p className="text-blue-500 font-bold underline">
                                    Terms of Use
                                </p>
                            </button>
                        </div>}
                </div>



                {loading ?
                    <div className={`w-96 p-2 rounded-lg items-center justify-center flex flex-row border ${isDarkMode ? "border-slate-500" : "border-gray-200"}`}>
                        <Loading />
                    </div> :
                    <button type="submit"
                        onClick={handleSubmit}
                        className="w-96 p-2 rounded-lg items-center justify-center bg-orange-500 text-white hover:bg-orange-600 font-bold">
                        {language.includes("tr") ? "Kayıt Ol" : "Sign Up"}
                    </button>}

            </form>
        </div>
    );
}

export default SignUp;