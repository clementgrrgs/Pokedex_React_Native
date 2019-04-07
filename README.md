REACT POKEDEX

Ce projet est un pokedex fait avec react native.
Il fonctionne avec les API POKEAPI et une API de login présente à l'adresse suivante : https://github.com/clementgrrgs/API_UserPokedex


Utilisation du POKÉDEX :

Le pokédex permet de s'inscrire ou de ce connecter à l'application avec un pseudo unique.
Il permet d'afficher la liste des 151 premiers pokémons ainsi que des informations sur leurs types et leurs apparences.
Lors de la création d'un nouveau profil les informations des 151 pokemons sont cachées. Pour avoir accès aux information d'un pokémon il faut entrer son nom dans le champs texte sur le vue "Reception".


Lancement de l'application :

Pour lancer l'application il faut tout d'abord cloner les repository du Pokedex et de l'API de login.

Pokédex : https://github.com/clementgrrgs/Pokedex_React_Native

API Login : https://github.com/clementgrrgs/API_UserPokedex



Configuration du localhost dans l'application :

Avant le lancement de l'API et du Pokédex il faut configurer l'adresse du localhost pour que l'application puisse acceder à l'API.
Pour cela aller dans le projet pokedex que vous venez de cloner dans le fichier UserApi.

Pokedex > API > UserApi.js

Dans ce fichier changer la valeur de la variable localhost pour qu'elle corresponde à votre adresse, 

const localhost = 'votre_addresse_IP';


Lancement de l'API :

Pour lancer l'api de login, ouvrez un terminal et placez vous à la racine du projet que vous venez de cloner "API_UserPokedex"
executer ensuite la commande "npm start"


Lancement de l'application :

Pour lancer l'application pokedex, ouvrez un terminal et placez vous à la racine du projet que vous venez de cloner "Pokedex_React_Native" executer ensuite la commande "expo start".
Un QR Code apparait, flasher le à l'aide de l'application expo de votre smartphone.