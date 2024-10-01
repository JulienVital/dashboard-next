// Récupérer le message de commit passé en argument
const commitMessage = process.argv[2];

const http = require('http');

const options = {
    hostname: 'localhost',
    port: 6000,
    path: '/',
    method: 'GET'
  };

// Créer la requête HTTP
const req = http.request(options, (res) => {

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
