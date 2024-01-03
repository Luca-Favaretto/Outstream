import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor() {}
  evets = [
    {
      id: 1,
      personaggio: {
        nome: 'Andrea Tosatto',
        instagramAutore: 'https://www.instagram.com/andreatosatto_live/',
        facebook: 'https://www.instagram.com/andreatosatto_live/',
        youtube: 'https://www.instagram.com/andreatosatto_live/',
        telegram: 'https://www.instagram.com/andreatosatto_live/',
        seguaci: 70000,
      },
      regione: 'Veneto',
      location: 'Tetre Ristori',
      via: 'strada privata 23',
      data: '11/11/23',
      ora: '21.00',
      numeroInformazioni: 3454647897,
      mailInformazioni: 'tosatto@gmail.com',
      nomeEvento: 'Torna libero in 3 mosse',
      poster: '',
      prezzo: 19.99,
      descrizione: 'testo',
      organizzatore: 'Itali',
      linkAquisto: 'http:www.sito.com',
      genere: 'politica',
    },
  ];
}
