import { INote } from "./notesTypes";

export interface IUser {
  auth: boolean;
  email: string | null;
  uid: string;
  notes: INote[];
  error: string;
}
