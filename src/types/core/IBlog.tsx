import { Timestamp } from "firebase/firestore";

export default interface IBlog {
  id: string;
  title: string;
  content: string;
  dateCreate?: Timestamp;
  type: "generic" | "travel" | "music";
}