import { useEffect, useState } from "react";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import useImages from "../../../../hooks/useImages";
import TeamCard from "../team_card/TeamCard";
import { useTranslation } from "react-i18next";

const Team = () => {
  const [teamData, setTeamData] = useState(null);
  const Images = useImages();
  const { t } = useTranslation();

  useEffect(() => {
    if (Images) {
      const teamImages = Images.filter((n) => n.label === "team");
      const team_data = [
        { name: "Emma", position: "manager", ...teamImages[0] },
        { name: "Hassan", position: "CEO", ...teamImages[1] },
        { name: "Liam", position: "qualityControl", ...teamImages[2] },
      ];
      setTeamData(team_data);
    }
  }, [Images]);
  return (
    <MainSection withBackground={false} withStyle={"flex flex-col"}>
      <HeroHeadings
        topHeading={t("ourTeam")}
        bottomHeading={t("meetOurExperts")}
        isCentered={true}
        withStyle={"mb-3"}
      />
      <ul className="flex flex-col lg:flex-row justify-evenly flex-wrap items-center lg:items-start gap-4">
        {teamData &&
          teamData.map((team) => (
            <li key={team.id}>
              <TeamCard
                cardDescription={t(team.position)}
                cardTitle={team.name}
                cardImage={team.url}
              />
            </li>
          ))}
      </ul>
    </MainSection>
  );
};

export default Team;
