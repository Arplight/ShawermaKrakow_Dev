import { useTranslation } from "react-i18next";
import { clients } from "../../../../../Data/clients/Clients";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <MainSection withBackground={false} withStyle={"flex flex-col"}>
      <HeroHeadings
        topHeading={t("ourClients")}
        bottomHeading={t("happyClients")}
        isCentered={true}
        withStyle={"mb-3"}
      />
      <ul className="flex flex-col md:flex-row items-center justify-evenly gap-3 w-full">
        {clients.map((client, index) => (
          <li key={index}>
            <img src={client} alt={`${client}-${index}`} />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Clients;
