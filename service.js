class Service{

    constructor(){
        this.request = require('request-promise-native');
    }

    listerClient() {
        return new Promise((resolve, reject) => {
            this.request.get('https://hotel-web-api-spring.herokuapp.com/clients', { json: true }, function (err, res, body) {

                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        })
    }

    findByName(nomAChercher) {
        return new Promise((resolve, reject) => {
            this.request.get(`https://hotel-web-api-spring.herokuapp.com/clients/nom=${nomAChercher}`, { json: true }, function (err, res, body) {

                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        })

    }

    posterClient(saisieNom, saisiePrenom) {
        return new Promise((resolve, reject) => {
            this.request.post({
                url: 'https://hotel-web-api-spring.herokuapp.com/clients',
                method: 'POST',
                json: {
                    nom: saisieNom,
                    prenoms: saisiePrenom
                }

            }, function (err, res, body) {
                if (err) {
                    reject(err);
                } else {
                    return resolve(body);
                }
            });
        })

    }
}
exports.Service = Service;