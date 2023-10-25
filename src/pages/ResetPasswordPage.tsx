import { Button } from "../components/Button/Button";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Inputs } from "./../components/SignIn/SignInOrSignUp";
import { useState } from "react";

interface ResetInputs {
    email: string;
}

export const ResetPasswordPage = () => {
    const {
        register,
        handleSubmit,
        } = useForm<ResetInputs>();
      const navigate = useNavigate();
      const [iSEmailExist, setISEmailExist ] = useState(true);

    const saveEmailToLocalStoridge = handleSubmit((data) => {
        const userDataString = localStorage.getItem("users");
        if (userDataString !== null) {
            const tempArr = JSON.parse(userDataString);
            const userEmail = tempArr.filter(
                (obj: Inputs) => obj.email === data.email
              );
              if (userEmail.length > 0) {
                localStorage.setItem("emailTOreset", `${data.email}`);
                navigate('newpassword')
              } else {
                setISEmailExist(false);
              }
            }        
    });      
     

    return (
        <form onSubmit={saveEmailToLocalStoridge}
        className="md:border-2 md:border-solid w-11/12 md:w-[544px] h-[324px] m-auto mt-[140px] mb-[340px] flex flex-col"
        
      >
        <div className="uppercase font-bebas font-bold mt-10 ml-8 text-2xl">reset password</div>
        <label
          htmlFor=""
          className="ml-8 mt-10 font-helios font-bold text-[#313037] mb-2"
        >
          Email
        </label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-11/12 md:w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
          placeholder="Your email"
          onChange={() => setISEmailExist(true)}
        />
        {!iSEmailExist && (
        <p className="ml-8 font-helios text-red-500">
          Email не зарегистрирован
        </p>
      )}
        <Button
          value="RESET"
          classname="mt-10 w-11/12 md:w-[480px] h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"
        />
      </form>
    )
}