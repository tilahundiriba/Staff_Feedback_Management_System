import { Search } from "lucide-react";

function SearchInput({
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="relative">

      <Search
        className="absolute left-3 top-3 text-gray-400"
        size={18}
      />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border rounded-lg py-3 pl-10 pr-4"
      />

    </div>
  );
}

export default SearchInput;