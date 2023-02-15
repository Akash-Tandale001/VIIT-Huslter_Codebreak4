import Header from "../Components/Header";
import ResetPassword from "../Components/ResetPassword";

export default function ResetPasswordPage(){
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
            <Header
              heading="Reset Password"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/Login"
            />
            <ResetPassword/>
            </div>
            </div>
        </>
    )
}