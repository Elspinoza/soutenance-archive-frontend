import { Time } from "@angular/common";
import { Administrateur } from "./administrateur.model";
import { Vague } from "./vague.model";
import { Jury } from "./jury.model";
import { Etudiant } from "./etudiant.model";

export interface Plateforme {
  id: number;
  debutDate: Date;
  finDate: Date;
  heureDebut: Time;
  heureFin: Time;
  duree: Time;
  decalage: Time;
  salle: string;
  administrateurId: number;
  vagueId: number;
  juryId: number;
  etudiantId: number
}
