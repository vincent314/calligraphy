import { Img } from "./Img";

export interface Calligraphy {
  id: number;
  date: string;
  japanese: string;
  roomaji: string;
  french: string;
  img: Img[];
}
