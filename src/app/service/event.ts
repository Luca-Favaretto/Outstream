export interface Event {
  id: number;
  personaggio: {
    nome: string;
    instagramAutore: string;
    facebook: string;
    youtube: string;
    telegram: string;
    seguaci: number;
  };
  regione: string;
  location: string;
  via: string;
  data: string;
  ora: string;
  numeroInformazioni: number;
  mailInformazioni: string;
  nomeEvento: string;
  poster: string;
  prezzo: number;
  descrizione: string;
  organizzatore: string;
  linkAquisto: string;
  genere: string;
}
