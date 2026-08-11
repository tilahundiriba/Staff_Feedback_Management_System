import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "am",
      name: "አማርኛ",
    },
    {
      code: "om",
      name: "Afaan Oromoo",
    },
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="relative">

      <div className="flex items-center gap-2">

        <Globe
          size={20}
          className="text-white"
        />

        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="
            bg-transparent
            text-blue
            border-none
            outline-none
            cursor-pointer
            text-sm
          "
        >
          {languages.map((language) => (
            <option
              key={language.code}
              value={language.code}
              className="text-gray-800"
            >
              {language.name}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default LanguageSelector;