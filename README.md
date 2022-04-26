
# ![Angular Example App](logo.png)

# Lancer le projet


Exécutez `yarn install` pour résoudre les dépendance et `ng serve` pour le serveur : `http://localhost:4200/`.


## Fonctionalité ajouter :

**barre de recherche d'article**

![](https://codimd.math.cnrs.fr/uploads/upload_8cd65eedcd5f11575a653a4f73f0d914.PNG)

___

##changement dans le code


**article-list.component.ts :** </br>

![](https://codimd.math.cnrs.fr/uploads/upload_0a946a01ec877931d60edd3b88db2b1d.PNG)
**article-list.component.html :** </br>

![](https://codimd.math.cnrs.fr/uploads/upload_869bca1d51923cdc4f95c180aab96aac.PNG)



La variable ``results`` est la liste des articles affichées sur la page.
J'ai donc ajouté une méthode ``filter()`` qui permet d'appliquer un filtre sur cette variable </br>

Pour appliquer ce filtre, j'ai ajouté une variable ``searchFilter`` qui prend comme valeur
la chaine de caractère tapée par l'utilisateur sur la barre de recherche

**détail de la méthode filter**

- on instancie la variable ``articles``, une liste d'articles initialement vide
- on instancie la variable ``article$`` qui est de type ``Observable<Article>`` à partir de la variable ``this.articles`` qui contient la liste de tous les articles
- on applique un filtre sur ``article$`` en fonction de notre variable ``searchFiler``, le résultat est contenu dans la variable ``searchArticle$``
- pour chaque article obtenu dans ``searchArticle$`` on l'ajoute à la variable ``articles``
- ``results`` prend la valeur d'``articles``










