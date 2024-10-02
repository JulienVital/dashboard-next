// Récupérer le message de commit passé en argument
const commitMessage = process.argv[2];

const { exec } = require('child_process');
console.info(`....... Ninja !!!`);

exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
    if (error) {
        console.error(`Erreur lors de l'exécution de la commande : ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Erreur dans la sortie standard : ${stderr}`);
        return;
    }
    
    const branchName = stdout.trim(); // Supprimer les espaces vides
    console.log(`Nom de la branche active : ${branchName}`);
});
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 6000,
    path: '/',
    method: 'POST', // Change to POST
    headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
        'Content-Length': Buffer.byteLength(JSON.stringify({ message: commitMessage }))
    }
};

// Créer la requête HTTP
const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`Réponse : ${chunk.toString()}`);
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('Timesheet wizard completed !!!');
        } else {
            console.log(`Erreur : Code de statut ${res.statusCode}`);
        }
        // Terminer le processus après la réponse
        process.exit(0);
    });
});

// Gérer les erreurs
req.on('error', (e) => {
    console.error(`Problème avec la requête : ${e.message}`);
    // Terminer le processus en cas d'erreur
    process.exit(1);
});

// Préparer les données à envoyer
const postData = JSON.stringify({ message: commitMessage });
req.write(postData); // Écrire les données dans la requête
req.end(); // Terminer la requête
