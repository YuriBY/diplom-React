import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import lefticon from "../assets/left.png";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import { useForm, SubmitHandler} from "react-hook-form";
import { Inputs } from "./../components/SignIn/SignInOrSignUp";

interface AccountInput {
  password: string,
  confirmpassword: string
}

export const AccountPage = () => {

  const {
    register,
    handleSubmit,
    } = useForm<AccountInput>();
  const [checkPassword, setCheckPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const accountEmail = location.state?.email;
  const userDataString = localStorage.getItem("users");
  if (userDataString !== null) {
    const tempArr = JSON.parse(userDataString);
    const user = tempArr.filter(
      (obj: Inputs) => obj.email === accountEmail
    );
  
  const onSubmit: SubmitHandler<AccountInput> = (data) => {
    
    if (data.password !== data.confirmpassword) {
      setCheckPassword(true);
    } else {
      if (userDataString !== null) {
        const tempArr = JSON.parse(userDataString);
        const objIndex = tempArr.findIndex(
            (obj: Inputs) => obj.email == accountEmail
          );   
        
        tempArr[objIndex].password = data.password;
        localStorage.setItem("users", JSON.stringify(tempArr));
        navigate('/')
          } 
    } 

  }
    return (
      <>
        <div className="w-11/12 lg:w-3/5 h-[1020px] sm:h-[950px] mx-auto">
          <Link to={"/signin"}>
            <img src={lefticon} alt="" />
          </Link>
          <div className="text-[56px]">
              <Title text="Account"/>
          </div>
          
          <div className="uppercase font-bebas font-bold text-2xl mt-8">Profile</div>
            <div className="flex flex-col lg:flex-row flex-nowrap w-full lg:h-[150px] mt-4">
              <div className="w-full lg:w-2/4">
                <div className="font-helios font-bold">Name</div> 
                <div className="w-11/12 h-14 pl-4 border-2 border-solid pt-3 text-[#313037] font-helios">{user[0].name}</div>
                <div className="invisible lg:visible uppercase font-bebas font-bold text-2xl mt-8">Password</div>
                <div className="invisible lg:visible font-helios font-bold mt-4">Password</div> 
                <div className="invisible lg:visible w-11/12 h-14 pl-4 border-2 border-solid pt-3 text-[#313037] font-helios">•••••••••••••</div>
            </div>
            <div className="w-full lg:w-2/4">
                <div className="font-helios font-bold">Email</div> 
                <div className="w-11/12 h-14 pl-4 border-2 border-solid pt-3 text-[#313037] font-helios">{accountEmail}</div>
            </div>
          </div>
          <form className="">
            <div className="w-full h-[350px] lg:h-[150px] flex flex-col">
              <div className="lg:invisible uppercase font-bebas font-bold text-2xl mt-8">Password</div>
              <div className="lg:invisible font-helios font-bold mt-4">Password</div> 
              <div className="lg:invisible w-11/12 lg:w-2/4 h-14 pl-4 border-2 border-solid pt-3 text-[#313037] font-helios">•••••••••••••</div>

              <div className="lg:flex lg:flex-row">
                <div className="w-full lg:w-2/4 h-[92px]">
                  <label htmlFor="" className="font-helios font-bold text-[#313037] w-full lg:w-2/4 h-[92px]"
                      >
                        New password
                  </label>
                  <div>
                    <input type="password"
                      {...register("password", { required: true })}
                      className="w-11/12 h-14 border-2 border-solid border-[#E7E7E7] text-[#A8A8A8] pl-4 font-helios"
                      placeholder="Your password"
                      onChange={() => setCheckPassword(false)}
                    />
                  </div>
                </div>            
                <div className="w-full lg:w-2/4 h-[92px]">
                  <label htmlFor="" className="font-helios font-bold text-[#313037] w-2/4 h-[92px]"
                      >
                        Confirm new Password
                  </label>
                  <div>
                    <input type="password"
                      {...register("confirmpassword", { required: true })}
                      className="w-11/12 h-14 border-2 border-solid border-[#E7E7E7] text-[#A8A8A8] pl-4 font-helios"
                      placeholder="Confirm new Password"
                      onChange={() => setCheckPassword(false)}
                    />
                    {checkPassword && (
                    <p className="ml-8 font-helios text-red-500">
                      Пароль и подтверждение пароля не совпадают
                    </p>
                  )}
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-[#E7E7E7] mt-6 lg:mt-0"></div>

              <div className="flex flex-col md:flex-row">
                <div className="w-0 lg:w-1/2"></div>
                <div className="flex flex-col md:flex-row md:w-11/12 ">
                  <Button
                    value="SAVE CHANGES"
                    classname="mt-10 w-full md:w-5/12 h-14 bg-[#313037] text-white font-bebas font-bold text-2xl mx-auto"
                    onClick={handleSubmit(onSubmit)}
                  />
                  <Button
                    value="CANCEL"
                    classname="mt-10 w-full md:w-5/12 h-14 bg-white text-black border-2 border-solid font-bebas font-bold text-2xl mx-auto"
                    onClick={() => navigate('/')}
                  />
                </div>
              
              </div>             
              
              
            </div>
            
            
            

          </form>
          
            
         
             
          
        </div>
      </>    
    );
  
}
}
