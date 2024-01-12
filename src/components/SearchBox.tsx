import { cn } from "@/utils/cn";
import { ChangeEventHandler, FormEventHandler } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox({
  value,
  onChange,
  onSubmit,
  className,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        className
      )}
    >
      <input
        onChange={onChange}
        value={value}
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
        type="text"
        placeholder="Search location..."
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md whitespace-nowrap h-full">
        <IoSearch />
      </button>
    </form>
  );
}
