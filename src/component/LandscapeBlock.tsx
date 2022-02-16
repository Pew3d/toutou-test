import { React, FunctionComponent } from "react";
import BadgeComponent from "./BadgeComponent";

type LandscapeBlockProps = {
  title: string;
  id: string;
  link: string;
};

const LandscapeBlock: FunctionComponent<LandscapeBlockProps> = (props) => {
  const { link, title, id } = props;
  return (
    <div className="block w-100 p-3 border-radius shadow">
      <h2 className="font-bold">{title}</h2>
      <a href={link}>Voir la mission</a>
      <div className="block">
        <BadgeComponent title={id} />
      </div>
    </div>
  );
};

export default LandscapeBlock;
