import { CheckCircle, MessageSquareIcon, UserCircle2Icon } from "lucide-react";

import { Button } from "../componets/Button";

export const Logout = () => {
  return (
    <div className="bg-green-600  flex flex-col md:flex-row w-full min-h-screen relative  ">
      <div className="w-[25rem]  flex flex-col pl-10 pt-10">
        <MessageSquareIcon className="w-13 h-13 text-slate-200" />
        <h1 className="text-2xl font-extrabold text-slate-700 tracking-wider">
          Let's Chat
        </h1>
      </div>
      <img
        src="/assets/auth.png"
        alt="auth.design"
        className="hidden  md:block md:w-100 md:h-100 lg:w-110 lg:h-110 absolute bottom-10 left-25"
      />
      <div className="w-full  bg-white/90 my-5 mx-5 rounded-lg flex items-center justify-center">
        <div className="w-[20rem] md:w-[25rem] lg:w-[35rem] p-10  my-10 text-center">
          <UserCircle2Icon className="w-20 h-20 mx-auto mb-5" />

          <h1 className="text-2xl font-bold tracking-wide text-center flex justify-center gap-4 items-center ">
            You are Loged out
            <span>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </span>
          </h1>
          <p className="text-md text-slate-400 font-semibold mt-2">
            Thank you for using bloom
          </p>
          <div className="w-full ">
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
