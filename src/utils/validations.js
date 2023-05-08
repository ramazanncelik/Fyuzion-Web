import { object, string, ref } from 'yup';
const language = navigator.language;

export const signUpValidations = object({
    email: string()
        .required(language === "tr" ?
            'E-mail Adresi Boş Geçilemez'
            :
            'E-mail Adress Cannot be blank')
        .email(language === "tr" ?
            'Geçerli bir e-mail adresi giriniz!'
            :
            'Please enter a valid e-mail address!'),
    nickName: string()
        .trim()
        .required(language === "tr" ?
            'Kullanıcı Adı Boş Geçilemez!'
            :
            'Nick Name Cannot be blank!')
        .matches(/^[^\s]*$/, language === "tr" ?
            "Kullanıcı adı boşluk içeremez" :
            "Username cannot contain spaces")
        .max(30, language === "tr" ?
            "Kullanıcı adı en fazla 30 karakter olabilir"
            :
            "Username can be up to 30 characters"),
    password: string()
        .required(language === "tr" ?
            'Şifre Boş Geçilemez!'
            :
            'Password Cannot be blank!')
        .min(6, ({ min }) => language === "tr" ?
            'Şifre en az ' + min + ' karakterden oluşmalıdır!'
            :
            'Password must be at least' + min + 'characters!'),
    passwordConfirm: string()
        .oneOf([ref("password")], language === "tr" ?
            "Şifreler aynı olmalıdır!"
            : "Passwords must match!")
        .required(language === "tr" ?
            'Boş Geçilemez!'
            :
            'Cannot be blank!'),
});

export const loginValidations = object({
    email: string()
        .required(language === "tr" ?
            'E-mail Adresi Boş Geçilemez'
            :
            'E-mail Adress Cannot be blank')
        .email(language === "tr" ?
            'Geçerli bir e-mail adresi giriniz!'
            :
            'Please enter a valid e-mail address!'),
    password: string()
        .required(language === "tr" ?
            'Şifre Boş Geçilemez!'
            :
            'Password Cannot be blank!')
        .min(1, ({ min }) => language === "tr" ?
            'Şifre en az ' + min + ' karakterden oluşmalıdır!'
            :
            'Password must be at least' + min + 'characters!'),
});

export const createResetPasswordMailValidations = object({
    email: string()
        .required(language === "tr" ?
            'E-mail Adresi Boş Geçilemez'
            :
            'E-mail Adress Cannot be blank')
        .email(language === "tr" ?
            'Geçerli bir e-mail adresi giriniz!'
            :
            'Please enter a valid e-mail address!'),
});

export const updatePasswordValidations = object({
    password: string()
        .required(language === "tr" ?
            'Şifre Boş Geçilemez!'
            :
            'Password Cannot be blank!')
        .min(6, ({ min }) => language === "tr" ?
            'Şifre en az ' + min + ' karakterden oluşmalıdır!'
            :
            'Password must be at least' + min + 'characters!'),
    passwordConfirm: string()
        .oneOf([ref("password")], language === "tr" ?
            "Şifreler aynı olmalıdır!"
            : "Passwords must match!")
        .required(language === "tr" ?
            'Boş Geçilemez!'
            :
            'Cannot be blank!'),
});

export const newPostValidations = object({
    Description: string()
        .required(language === "tr" ?
            'Açıklama Boş Geçilemez!'
            :
            'Description Cannot be blank!')
        .max(1000, language === "tr" ?
            "Açıklama en fazla 1000 karakter olabilir"
            :
            "Description can be up to 1000 characters")
});