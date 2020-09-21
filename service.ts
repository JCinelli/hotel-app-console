import { promises } from 'fs';
import request from 'request-promise-native';
import { Client } from './domains';

class Service{

    request: any;

    constructor(){
        this.request = request;
    }

    listerClient(): Promise<Client[]> {
        return this.request.get('https://hotel-web-api-spring.herokuapp.com/clients', { json: true });
    }


    findByName(nomAChercher: string): Promise<Client[]> {
        return this.request.get(`https://hotel-web-api-spring.herokuapp.com/clients/nom=${nomAChercher}`, { json: true });
    }

    posterClient(saisieNom: string, saisiePrenom: string): Promise<void> {
        return this.request.post({
            url: 'https://hotel-web-api-spring.herokuapp.com/clients',
            method: 'POST',
            json: {
                nom: saisieNom,
                prenoms: saisiePrenom
            }
        });
    }

}

export { Service };