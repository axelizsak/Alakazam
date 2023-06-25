const { execSync, exec } = require('child_process');
const fs = require('fs');
const prompt = require('prompt-sync')();

// Définir les chemins vers les répertoires backend et frontend
const backendPath = './starknet_back';
const frontendPath = './frontend';

// Exécute la commande 'yarn' dans le répertoire backend
console.log('Running yarn in backend...');
execSync('yarn', { stdio: 'inherit', cwd: backendPath });

// Exécute la commande 'docker-compose up -d' dans le répertoire backend
console.log('Running docker-compose up -d in backend...');
execSync('docker-compose up -d', { stdio: 'inherit', cwd: backendPath });

// Demande à l'utilisateur d'entrer le nom pour le config.json
let name = prompt('Please enter a global event to index: ');

// Demande à l'utilisateur d'entrer un entier pour le champ 'start' de config.json
let start = prompt('Please enter a block where you want to start indexing: ');

// Lire le fichier config.json dans le sous-répertoire 'src' du backend
let rawdata = fs.readFileSync(backendPath + '/src/config.json');
let config = JSON.parse(rawdata);

// Modifier la valeur de 'name' et 'start' dans la configuration
config.global_events[0].name = name;
config.start = parseInt(start, 10);

// Écrire la configuration modifiée de retour à config.json dans le sous-répertoire 'src' du backend
let data = JSON.stringify(config, null, 2);
fs.writeFileSync(backendPath + '/src/config.json', data);

console.log('Updated name and start in config.json...');

// Exécute la commande 'yarn dev' dans le répertoire backend
console.log('Running yarn dev in backend...');
exec('yarn dev', { stdio: 'inherit', cwd: backendPath }, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Exécute la commande 'npm start' dans le répertoire frontend après un délai de 4 secondes
setTimeout(() => {
  console.log('Running npm start in frontend...');
  exec('npm start', { stdio: 'inherit', cwd: frontendPath });
}, 4000);

