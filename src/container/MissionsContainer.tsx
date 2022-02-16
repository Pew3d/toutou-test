import { React, FunctionComponent, useEffect, useState } from "react";
// Components
import LandscapeBlock from "../component/LandscapeBlock";
import { MissionType, getMissions } from "../api/spaceX.api";

const MissionContainer: FunctionComponent = () => {
  const [missions, setMissions]: [Array<MissionType>, Function] = useState([]);

  useEffect(() => {
    getMissions().then((missions) => {
      setMissions(missions.data);
    });
  }, []);

  return (
    <div className="grid grid-rows-1 gap-3">
      {missions.map((mission) => (
        <LandscapeBlock
          title={mission.mission_name}
          link={mission.website}
          id={mission.mission_id}
        />
      ))}
    </div>
  );
};

export default MissionContainer;
