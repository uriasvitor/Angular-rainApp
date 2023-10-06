import { IForecast } from "./IForecast";

export interface Icondition{
 city:string;
 currently:string;
 moon_phase:string;
 forecast: IForecast[]
}
