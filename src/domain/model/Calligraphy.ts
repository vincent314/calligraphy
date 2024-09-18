import { Img } from "./Img";

export interface Calligraphy {
  id: number;
  date: Date;
  japanese: string;
  roomaji: string;
  french: string;
  img: Img[];
}
