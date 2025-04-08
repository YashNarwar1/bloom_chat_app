import { cn } from "../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <div className="w-full mx-2 h-[1.5rem] my-5">
      <button
        type={type}
        className={cn(
          "w-full h-full flex justify-center items-center py-5 text-lg   text-white bg-green-500 rounded-md hover:opacity-80",
          className
        )}>
        {children}
      </button>
    </div>
  );
};
