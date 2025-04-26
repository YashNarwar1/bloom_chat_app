import { MessageSquareIcon } from "lucide-react";
import { Input } from "../componets/Input";
import { Button } from "../componets/Button";
import useStore from "../store/auth.store";
import LoginUser from "../api/login.api";
import { Link } from "react-router-dom";

type InputType = "email" | "password";

const Login = () => {
  const { email, password, setField } = useStore();
  const mutation = LoginUser();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });

    setField("username", "");
    setField("email", "");
    setField("password", "");
  };

  const handleOnChange = (InputName: InputType, value: string) => {
    setField(InputName, value);
  };

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
      <div className="w-full  bg-white/90 my-5 mx-5 rounded-lg flex  justify-center">
        <div className="w-[30rem] md:w-[25rem] lg:w-[35rem] p-10  my-10 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-center ">
            Welcome back!
          </h1>
          <p className="text-sm text-slate-400 font-semibold mt-2">
            Sign in to contune with bloom
          </p>
          <div className="w-full p-4 mt-4 flex flex-col gap-5">
            <form onSubmit={handleSubmit}>
              <Input
                title="Email"
                name="email"
                type="email"
                placeholder="@gmail.com"
                value={email}
                onChange={(e) => handleOnChange("email", e.target.value)}
              />
              <Input
                title="Password"
                name="password"
                type="password"
                placeholder="Enter Your Pas****d"
                value={password}
                onChange={(e) => handleOnChange("password", e.target.value)}
              />

              <Button>Login</Button>
            </form>
            <div className="w-full">
              <p className="flex flex-1 justify-center items-center gap-3">
                <span className="w-[30%] border-1 border-slate-400"></span>{" "}
                login using{" "}
                <span className="w-[30%] border-1 border-slate-400 "></span>
              </p>
              <div className="flex w-full justify-around my-4">
                <span className="flex justify-center items-center w-14 h-14 hover:border-1 border-slate-400   rounded-lg">
                  <img src="/assets/google.png" className="w-8 h-8" />
                </span>
                <span className="flex justify-center items-center w-14 h-14 hover:border-1 border-slate-400 rounded-lg">
                  <img src="/assets/github-sign.png" className="w-8 h-8" />
                </span>
                <span className="flex justify-center items-center w-14 h-14 hover:border-1 border-slate-400 rounded-lg">
                  <img src="/assets/gmail.png" className="w-8 h-8" />
                </span>
              </div>
            </div>
            <div className="w-full ">
              <p className="text-lg text-slate-600 ">
                Create new account?{"  "}
                <Link
                  to="/register"
                  className="underline text-blue-600 font-semibold cursor-pointer ml-2">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
