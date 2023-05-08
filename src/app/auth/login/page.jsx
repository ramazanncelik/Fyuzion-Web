"use client"
import { loginValidations } from "@/utils/validations";
import { useFormik } from "formik";
import { useLazyQuery } from "@apollo/client";
import { login } from "@/apollo/User/userQueries";
import { toast } from "react-hot-toast";
import { useAppContext } from "@/contexts/AppContext";
import Loading from "@/components/Loading";

const Login = () => {

    const { isDarkMode, language, changeUserId } = useAppContext();
    const [loginUser, { loading }] = useLazyQuery(login);

    const { handleChange, handleSubmit, handleBlur, handleReset, values, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            const result = await loginUser({
                variables: {
                    data: { Email: values.email, Password: values.password }
                }
            });
            if (result) {
                if (result.data) {
                    if (result.data.login) {
                        toast.success(language.includes("tr") ?
                            "Uygulamaya başarıyla giriş yaptınız." :
                            "You have successfully logged into the application.");
                        changeUserId(result.data.login._id);
                        handleReset();
                    } else {
                        toast.error(language.includes("tr") ?
                            "Kullanıcı Bulunamadı veya Şifreniz Hatalı" :
                            "User Not Found or Incorrect Password");
                    }
                } else {
                    toast.error(language.includes("tr") ?
                        "Kullanıcı Bulunamadı veya Şifreniz Hatalı" :
                        "User Not Found or Incorrect Password");
                }
            }
        },
        validationSchema: loginValidations(language)
    });

    return (
        <div className={`mt-14 flex-1 ${isDarkMode ? "bg-slate-700 text-white" : "bg-white text-black"}`}>
            <form onSubmit={handleSubmit} className={`flex flex-col space-y-2 items-center justify-center m-auto max-w-screen-xl h-full justify-center px-4`}>

                <p className={`w-72 md:w-96 text-center font-bold text-2xl ${isDarkMode ? "text-white" : "text-black"}`}>
                    {language.includes("tr") ? "Giriş Yap" : "Login"}
                </p>

                <div className="w-72 md:w-96 flex flex-col space-y-2">
                    <input
                        type="email"
                        className={`w-full mb-1 border p-2.5 rounded-lg text-sm ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-200"}`}
                        name="email"
                        placeholder={language.includes("tr") ? "E-mail adresi" : "E-mail adress"}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                    />
                    {errors.email && touched.email &&
                        <p className="w-full bg-red-500 p-2 rounded text-white mb-3">
                            {errors.email}
                        </p>}
                </div>

                <div className="w-72 md:w-96 flex flex-col space-y-2">
                    <input
                        type="password"
                        className={`w-full mb-1 border p-2.5 rounded-lg text-sm ${isDarkMode ? "bg-slate-700 border-slate-500" : "bg-white border-gray-200"}`}
                        name="password"
                        placeholder={language.includes("tr") ? "Şifre" : "Password"}
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                    />
                    {errors.password && touched.password &&
                        <p className="w-full bg-red-500 p-2 rounded text-white">
                            {errors.password}
                        </p>}
                </div>

                {loading ?
                    <div className={`w-72 md:w-96 p-2 rounded-lg items-center justify-center flex flex-row border ${isDarkMode ? "border-slate-500" : "border-gray-200"}`}>
                        <Loading />
                    </div> :
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-72 md:w-96 p-2 rounded-lg items-center justify-center bg-orange-500 text-white hover:bg-orange-600 font-bold">
                        {language.includes("tr") ? "Giriş Yap" : "Login"}
                    </button>}

            </form>
        </div>
    );
}

export default Login;