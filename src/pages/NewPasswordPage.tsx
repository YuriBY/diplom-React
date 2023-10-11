import { useState } from "react";
import { Button } from "../components/Button/Button";
import { useForm, SubmitHandler} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Inputs } from "./../components/SignIn/SignInOrSignUp";

interface NewPassInputs {
    password: string,
    confirmpassword: string,
}

export const NewPasswordPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewPassInputs>();

    const onSubmit: SubmitHandler<NewPassInputs> = (data) => {
      
      const userDataString = localStorage.getItem("users");
      console.log(userDataString);      
      const userEmail = localStorage.getItem("emailTOreset");
      console.log(userEmail);
      
      if (data.password !== data.confirmpassword) {
        setCheckPassword(true);
      } else {
        if (userDataString !== null) {
          const tempArr = JSON.parse(userDataString);
          const objIndex = tempArr.findIndex(
              (obj: Inputs) => obj.email == userEmail
            );
          console.log(objIndex);
          
          tempArr[objIndex].password = data.password;
          console.log(tempArr);
          
          localStorage.setItem("users", JSON.stringify(tempArr));
          localStorage.setItem("emailTOreset", ''); 
          navigate('/')
            } 
      } 

    }
    
    const navigate = useNavigate();
    const [checkPassword, setCheckPassword] = useState(false);
       

    // const saveNewPassToLocalStoridge = handleSubmit((data) => {
      
    //   const userDataString = localStorage.getItem("users");
    //   console.log(userDataString);      
    //   const userEmail = localStorage.getItem("emailTOreset");
    //   console.log(userEmail);
      
    //   if (data.password !== data.confirmpassword) {
    //     setCheckPassword(true);
    //   } else {
    //     if (userDataString !== null) {
    //       const tempArr = JSON.parse(userDataString);
    //       const objIndex = tempArr.findIndex(
    //           (obj: Inputs) => obj.email == userEmail
    //         );
    //       console.log(objIndex);
          
    //       tempArr[objIndex].password = data.password;
    //       console.log(tempArr);
          
    //       localStorage.setItem("users", JSON.stringify(tempArr));
    //       localStorage.setItem("emailTOreset", ''); 
    //       navigate('/')
    //         } 
    //   }      
    // });      
     

    return (
        <form 
        className="border-2 border-solid w-[544px] h-[432px] m-auto mt-[140px] mb-[340px] flex flex-col" 
        onSubmit={handleSubmit(onSubmit)}        
      >
        <div className="uppercase font-bebas font-bold mt-10 ml-8 text-2xl">new password</div>
        <label
          htmlFor=""
          className="ml-8 mt-10 font-helios font-bold text-[#313037] mb-2"
        >
          New Password
        </label>
        <input type="password"
          {...register("password", { required: true })}
          className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
          placeholder="Your password"
          onChange={() => setCheckPassword(false)}
        />
         <label
          htmlFor=""
          className="ml-8 mt-10 font-helios font-bold text-[#313037] mb-2"
        >
          Confirm Password
        </label>
        <input type="password"
          {...register("confirmpassword", { required: true })}
          className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
          placeholder="Confirm your password"
          onChange={() => setCheckPassword(false)}
        />
        {checkPassword && (
        <p className="ml-8 font-helios text-red-500">
          Пароль и подтверждение пароля не совпадают
        </p>
      )}
        <Button
          value="SET PASSWORD"
          classname="mt-10 w-[480px] h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"
        />
      </form>
    )
}