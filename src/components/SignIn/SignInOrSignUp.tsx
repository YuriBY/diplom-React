import { useState } from "react";
import { Button } from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";


interface Inputs {
    name?: string,
    email: string,
    password: string,
    text?: string
  }

export const SignInOrSignUp = () => {
    const [signUpForm, setSignUpForm] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      
    
    const handleSignInOrSignUp = () => {
        setSignUpForm((prev) => !prev)
    }
    return (
        signUpForm ?
            <form className="border-2 border-solid w-[544px] h-[656px] m-auto mt-[140px] mb-[200px] flex flex-col">
                <div className="flex flex-row justify-evenly uppercase font-bebas font-bold text-2xl text-[#313037] mt-[26px] cursor-pointer">
                    <div onClick={handleSignInOrSignUp}>sign in</div>
                    <div>sign up</div>
                </div>
                <div className="w-[239px] h-px bg-[#313037] ml-[247px] mb-8"></div>
                <label htmlFor="" className="ml-8 font-helios font-bold text-[#313037] mb-2">Name</label>
                <input {...register("name", {required: true})} className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios" placeholder="Your name"/>
                <label htmlFor="" className="ml-8 font-helios font-bold text-[#313037] mb-2">Email</label>
                <input {...register("email", {required: true})} className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios" placeholder="Your email"/>
                <label htmlFor="" className="ml-8 font-helios font-bold text-[#313037] mb-2 mt-6">Password</label>
                <input {...register("password", {required: true})} className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios" placeholder="Your password"/>
                <label htmlFor="" className="ml-8 font-helios font-bold text-[#313037] mb-2 mt-6">Confirm password</label>
                <input {...register("text", {required: true})} className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios" placeholder="Confirm your password"/>
                <Button value='SIGN UP' classname="mt-10 w-[480px] h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"/>
            </form> 
            :

            <form onSubmit={handleSubmit((data) => {console.log(data);
            })} className="border-2 border-solid w-[544px] h-[480px] m-auto mt-[140px] mb-[200px] flex flex-col">
                <div className="flex flex-row justify-evenly uppercase font-bebas font-bold text-2xl text-[#313037] mt-[26px] cursor-pointer">
                    <div>sign in</div>
                    <div onClick={handleSignInOrSignUp}>sign up</div>
                </div>
                <div className="w-[239px] h-px bg-[#313037] ml-8 mb-8"></div>
                <label htmlFor="" className="ml-8 font-helios font-bold text-[#313037] mb-2">Email</label>
                <input {...register("email", {required: true})} className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios" placeholder="Your email"/>
                <label htmlFor="" className="ml-8 font-helios font-bold text-[#313037] mb-2 mt-6">Password</label>
                <input {...register("password", {required: true})} className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios" placeholder="Your password"/>
                <div className="font-helios text-sm mt-6 ml-8 mb-10">Forgot password ?</div>
                <Button value='SIGN IN' classname="w-[480px] h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"/>
            </form>
        )
}