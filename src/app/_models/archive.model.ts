import { Theme } from "./theme.model";

export class Archive {
  id!: number;
  parcours!: string;
  filiere!: string;
  fileLink!: string;
  administrateurId!: number;
  file!: FormData
  themeId!: Theme;
}
