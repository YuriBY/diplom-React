import { useState } from "react";
import { Button } from "../Button/Button";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

if (!localStorage.getItem("users")) {
  const initialData: Inputs[] = [];
  localStorage.setItem("users", JSON.stringify(initialData));
}

export interface Inputs {
  name?: string;
  email: string;
  password: string;
  confirmpassword?: string;
}

export const SignInOrSignUp = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [signIncheckEmail, setSignIncheckEmail] = useState(false);
  const [signInCheckPass, setSignInCheckPass] = useState(false);
  const [isRegistratedEmail, setIsRegistratedEmail] = useState(false);
  const [isRegistratedName, setIsRegistratedName] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const checkAndSend = handleSubmit((data) => {
    if (data.password !== data.confirmpassword) {
      setCheckPassword(true);
    } else {
      const userDataString = localStorage.getItem("users");
      if (userDataString !== null) {
        const tempArr = JSON.parse(userDataString);
        const registeredEmail = tempArr.findIndex((obj: Inputs) => obj.email == data.email);
        const registeredName = tempArr.findIndex((obj: Inputs) => obj.name == data.name);
        
        if (registeredEmail === -1) {
           if (registeredName === -1) {
               tempArr.push(data);
               localStorage.setItem("users", JSON.stringify(tempArr));
               setSignUpForm(false);
            } else {
               setIsRegistratedName(true);
             }
         } else {
          setIsRegistratedEmail(true);
        }
        
      }
    }
  });

  const checkUser = handleSubmit((data) => {
    const userDataString = localStorage.getItem("users");
    if (userDataString !== null) {
      const tempArr = JSON.parse(userDataString);
      const userEmail = tempArr.filter(
        (obj: Inputs) => obj.email === data.email
      );
      const userPass = tempArr.filter(
        (obj: Inputs) => obj.password === data.password
      );
      if (userEmail.length === 0) {
        setSignIncheckEmail(true);
      } else {
        if (userPass.length === 0) {
          setSignInCheckPass(true);
        } else {
          navigate("/");
        }
      }
    }

    const watchEmail = watch("email");
    console.log(watchEmail);

    if (data.name !== data.confirmpassword) {
      setCheckPassword(true);
    }
  });

  const handleSignInOrSignUp = () => {
    setSignUpForm((prev) => !prev);
  };
  return signUpForm ? (
    <form
      className="border-2 border-solid w-[544px] h-[656px] m-auto mt-[140px] mb-[200px] flex flex-col"
      onSubmit={checkAndSend}
    >
      <div className="flex flex-row justify-evenly uppercase font-bebas font-bold text-2xl text-[#313037] mt-[26px] cursor-pointer">
        <div onClick={handleSignInOrSignUp}>sign in</div>
        <div>sign up</div>
      </div>
      <div className="w-[239px] h-px bg-[#313037] ml-[247px] mb-8"></div>
      <label
        htmlFor=""
        className="ml-8 font-helios font-bold text-[#313037] mb-2"       
      >
        Name
      </label>
      
      <input
        {...register("name", { required: true })}
        className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
        placeholder="Your name"  onChange={() => setIsRegistratedName(false)}
      />
      {isRegistratedName && (
        <p className="ml-8 font-helios text-red-500">
          Даннное имя уже используется
        </p>
      )}
      <label
        htmlFor=""
        className="ml-8 font-helios font-bold text-[#313037] mb-2"       
      >
        Email
      </label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
        placeholder="Your email"
        onChange={() => setIsRegistratedEmail(false)}
      />
      {errors.email && (
        <p className="ml-8 font-helios text-red-500">
          Введите правильный адрес
        </p>
      )}
      {isRegistratedEmail && (
        <p className="ml-8 font-helios text-red-500">
          Данный email уже используется
        </p>
      )}
      <label
        htmlFor=""
        className="ml-8 font-helios font-bold text-[#313037] mb-2 mt-6"
      >
        Password
      </label>
      <input
        {...register("password", { required: true })}
        className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
        placeholder="Your password"
      />
      <label
        htmlFor=""
        className="ml-8 font-helios font-bold text-[#313037] mb-2 mt-6"
      >
        Confirm password
      </label>
      <input
        {...register("confirmpassword", { required: true })}
        className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
        placeholder="Confirm your password"
      />
      {checkPassword && (
        <p className="ml-8 font-helios text-red-500">
          Пароль и подтверждение пароля не совпадают
        </p>
      )}
      <Button
        value="SIGN UP"
        classname="mt-10 w-[480px] h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"
      />
    </form>
  ) : (
    <form
      onSubmit={checkUser}
      className="border-2 border-solid w-[544px] h-[480px] m-auto mt-[140px] mb-[200px] flex flex-col"
    >
      <div className="flex flex-row justify-evenly uppercase font-bebas font-bold text-2xl text-[#313037] mt-[26px] cursor-pointer">
        <div>sign in</div>
        <div onClick={handleSignInOrSignUp}>sign up</div>
      </div>
      <div className="w-[239px] h-px bg-[#313037] ml-8 mb-8"></div>
      <label
        htmlFor=""
        className="ml-8 font-helios font-bold text-[#313037] mb-2"
      >
        Email
      </label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
        placeholder="Your email"
        onChange={() => setSignIncheckEmail(false)}
      />
      {errors.email && (
        <p className="ml-8 font-helios text-red-500">
          Введите правильный адрес
        </p>
      )}
      {signIncheckEmail && (
        <p className="ml-8 font-helios text-red-500">
          Такого пользователя не существует
        </p>
      )}
      <label
        htmlFor=""
        className="ml-8 font-helios font-bold text-[#313037] mb-2 mt-6"
      >
        Password
      </label>
      <input
        {...register("password", { required: true })}
        className="w-[480px] h-14 border-2 border-solid border-[#E7E7E7] mx-auto text-[#A8A8A8] pl-[20px] font-helios"
        placeholder="Your password"
        onChange={() => setSignInCheckPass(false)}
      />
      {signInCheckPass && (
        <p className="ml-8 font-helios text-red-500">
          Вы ввели неправильный пароль
        </p>
      )}
      <Link to={'/resetPassword'}>
        <div className="font-helios text-sm mt-6 ml-8 mb-10">
            Forgot password ?
        </div>
      </Link>
      
      <Button
        value="SIGN IN"
        classname="w-[480px] h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"
      />
    </form>
  );
};
