function start() {
    // récupération du module `readline`
    var readline = require('readline');

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // récupération de la saisie utilisateur
    rl.question("1. Lister les clients \n99. Sortir", function (saisie) {
        if ( `${saisie}` == "1") {

            rl.close();
            console.log(">> Liste des clients");
            start();

        } else if (`${saisie}` == "99") {
            
            console.log("Aurevoir !");
            process.exit(0);

        }
    });
}

exports.start = start; 