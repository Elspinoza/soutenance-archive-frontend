import { Jury } from "./jury.model";
import { Specialite } from "./specialite.model";
import { Users } from "./users.model";

export interface Etudiant extends Users {
  id : number;
  mail : string;
  nom : string;
  prenom : string;
  specialiteId: number;
  juryId:number;
  enseignantId:number;
}
