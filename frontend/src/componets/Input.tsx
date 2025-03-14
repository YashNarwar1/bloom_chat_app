import { cn } from "../lib/utils.ts";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  title?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  placeholder,
  title,
  className,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 text-start mb-4">
      <label
        className="text-lg text-slate tracking-wider font-medium"
        htmlFor={name}>
        {title}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          " px-2 py-2 rounded-md text-slate-800 border-1 border-slate-400 text-md",
          className
        )}
      />
    </div>
  );
};
