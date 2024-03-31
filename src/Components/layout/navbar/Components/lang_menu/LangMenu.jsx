import { useDispatch } from "react-redux";
import { navLang } from "../../../../../Data/navbar/navbar";
import { languageHandler } from "../../../../redux/slices/LanguageSlice";

const LangMenu = () => {
  const dispatchLanguage = useDispatch();

  return (
    <ul className="lang-menu p-[10px]">
      {navLang.map((lang, index) => (
        <li
          key={index}
          className="flex items-center gap-[5px]"
          onClick={() =>
            lang.langLabel === "English"
              ? dispatchLanguage(languageHandler("en"))
              : dispatchLanguage(languageHandler("pl"))
          }
        >
          <img src={lang.langIcon} alt={lang.langLabel} />
          <p className="font-primary text-[0.23rem]">{lang.langLabel}</p>
        </li>
      ))}
    </ul>
  );
};

export default LangMenu;
