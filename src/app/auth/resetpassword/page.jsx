import CreateMailForm from "@/components/ResetPassword/CreateMailForm";
import UpdatePasswordForm from "@/components/ResetPassword/UpdatePasswordForm";

const ResetPassword = ({ searchParams }) => {
    return (
        <>
            {(searchParams?.Email && searchParams?.ConfirmationCode) ? (
                <UpdatePasswordForm searchParamsData={searchParams} />
            ) : (
                <CreateMailForm />
            )}
        </>
    );
};

export default ResetPassword;
