import {NavigateFunction, Location} from "react-router-dom";

interface IHistory {
  navigate: NavigateFunction;
  location: Location;
}

export const history: IHistory = {
  navigate : () => {},
  location : {} as Location
}