const readline = require('readline');
const service = require('./service');

const monService = new service.Service();

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {

    console.log('** Administration Hotel **');
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Rechercher un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir\n");

    // récupération de la saisie utilisateur
    rl.question("Choisissez un numéro : ", saisie => {

        switch (saisie) {
            case "1":
                console.log("\n>> Liste des clients\n");

                monService.listerClient()
                    .then(listClients => console.log(
                        listClients
                            .map(client => `${client.nom} ${client.prenoms}`)
                            .join('\n')
                    ))
                    .catch(err => console.log(err))
                    .finally(() => {
                        console.log("\r");
                        start();
                    })

                break;

            case "2":
                console.log("\n>> Ajouter un client\n");
                rl.question("Entrez un Nom : ", saisieNom => {
                    rl.question("Entrez un Prenom : ", saisiePrenom => {
                        monService.posterClient(saisieNom, saisiePrenom)
                            .then(console.log(`${saisieNom} ${saisiePrenom} a été ajouté !`))
                            .catch(err => console.log(err))
                            .finally(() => {
                                console.log("\r");
                                start();
                            })
                    })
                })

                break;

            case "3":
                console.log("\n>> Rechercher un client par nom\n");

                rl.question("Entrez le Nom à chercher: ", saisieNom => {
                    monService.findByName(saisieNom)
                        .then(clients => console.log(clients))
                        .catch(err => console.log(err))
                        .finally(() => {
                            console.log("\r");
                            start();
                        })
                })
                break;

            case "4":
                console.log("\n>> Vérifier la disponibilité d'une chambre\n");
                console.log("\nComing soon!\n");

                break;

            case "99":
                console.log("\nAurevoir !");
                process.exit();

            default:
                console.log("\nTU SAIS PAS LIRE? 1, 2, 3, 4 ou 99 ! Retry =>")
                start();
                break;
        }
    });
}

exports.start = start; 