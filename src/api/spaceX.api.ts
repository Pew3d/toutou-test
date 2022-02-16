import axios, { AxiosResponse } from "axios";

export interface LauncheType {
  flight_id: string;
  start: Date;
  flight_number: number;
  rocket_name: string;
  land_success: boolean;
}

export interface MissionType {
  mission_id: string;
  mission_name: Date;
  website: number;
}

export const getLaunches = (): Promise<AxiosResponse> =>
  axios.get("https://api.spacexdata.com/v3/launches");

export const getMissions = (): Promise<AxiosResponse> =>
  axios.get("https://api.spacexdata.com/v3/missions");
