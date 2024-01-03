import { navLang } from "../../../../../Data/navbar/navbar";
const LangMenu = () => {
  return (
    <ul className="lang-menu p-[10px]">
      {navLang.map((lang, index) => (
        <li key={index} className="flex items-center gap-[5px]">
          <img src={lang.langIcon} alt={lang.langLabel} />
          <p className="font-primary text-[0.23rem]">{lang.langLabel}</p>
        </li>
      ))}
    </ul>
  );
};

export default LangMenu;
