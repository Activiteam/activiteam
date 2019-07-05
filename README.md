# Activiteam

## Pré-requis
- Docker / docker-compose [Lien](https://docs.docker.com/install/)
- node version 12.5.0 (Installer nvm est pratique pour switcher entre les versions de node)
- yarn [Lien](https://yarnpkg.com/en/docs/install#debian-stable) (on peut aussi utiliser npm éventuellement)
- VSCode 😆 [Lien](https://code.visualstudio.com/)

## Démarrage base de données / back
Pour démarrer sous docker la base de données, simplement faire un :
```docker-compose up -d mongo-database```

## Lancement du back
Pour démarrer le back sous Docker, simplement faire un :
```docker-compose up -d backend```
Pour démarrer le back en local, il faut se placer dans le dossier back et faire ```yarn install```, puis ```yarn start``` pour démarrer en local.

## Lancement du front
Pour lancer le front il suffit de se placer dans le dossier front et de lancer la command `yarn install`
Ensuite un simple `yarn start` lancera le serveur
En production nous utiliserons `yarn build` pour tout générer dans un dossier build (les sources seront à mettre dans un serveur http type apache/nginx...)

## ToDo Lucas POUILLE
- [x] Initialiser Docker back
- [x] Initialiser Docker mongo
- [ ] Initialiser Docker front (nginx)
- [ ] Script .sh pour faciliter les démarrages de conteneurs
- [ ] Configuration tslint / prettier sur back et front
- [ ] Ajout react-router sur la partie front
- [ ] Test communication front - back (e.g. simple appel au backend)
- [ ] Spécifier le modèle de données (pour la base de données)
- [ ] Définir des micro-services ? Ou pas apparemment
- [ ] Identity provider pour les utilisateurs ? Keycloak ? SSO via Google / FB / ... ? Voir Passport.js
- [ ] Focus full responsive