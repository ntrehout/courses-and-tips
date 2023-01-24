# Avoid SubscribeHell with RxJS

**Status**: Ready

## SubscribeHell a real performance sink for any Angular application

**Warning**: ⚠️ Angular & RxJS Developers

Stop doing this right now.

This is a very common mistake that you need to stop

In my experience, one of the most serious and widespread mistakes in Angular code that I review is the understanding and use of subscribers. More broadly of RxJS in general.

Today I'm talking about the "subscriber hell" 👇🏻

Subscript hell or more commonly known as "SubscribeHell" is a design error in the use of observables and their subscripts leading to major exponential memory leaks.

😥 The super sad thing:

I've seen this before....

A visit to a page that adds 20MB to your RAM, for the duration of your session on the site, and as a bonus accumulates and stacks up with each re-visit to the page.
This can quickly reach 1GB of RAM if the user has a long and complete session on the application.

Sometimes we need to aggregate the values of several observables or process nested observables to perform an action.

To do this we can use one of the combination or flattening operators such as `SwitchMap`, `MergeMap`, `CombineLatest`, etc.

👉🏻 We'll work with examples, as this is more meaningful for everyone.

Let's take the Story below 👇


🗣️ As a user of the site, I would like to be able to access the detailed file of a product, in order to obtain all the information.

Here we will need to use `ActivatedRoute` as well as `ProductService` :

- The former to get the product ID contained in the route URL.
- The second is to get the details of a product from its ID.

We can clearly guess the link between the two actors, we will have to combine the recovery of the identifier in the URL and the recovery of the product details.

What to stop immediately:

🚫 Nesting the subscribers and thus creating a "subscription hell".

What should be implemented now:

✅ Use a combining RxJS operator such as `SwitchMap`.

💡 BONUS: As we use `AsyncPipe` the unsubscription handling is delegated and done at the destruction of the component.

👉 Link to GitHub code in 1st comment 😉

## Les SubscribeHell un vrai gouffre à performance pour toute application Angular

**Attention** : ⚠️ Developpeurs Angular & RxJS

Arrêtez tout de suite de faire ça.

C’est une erreur très courante que vous devez stopper

De mon expérience, l’une des erreurs les plus graves et répandue dans les codes Angular et que je reviews, ce sont la compréhension et l’utilisation des subscribes. Plus largement de RxJS en général.

Aujourd’hui je vous parle de “l’enfer des souscriptions” 👇🏻

L’enfer des souscriptions ou plus communément appelé “SubscribeHell” est une erreur de design dans l’utilisation des observables et de leurs souscriptions menant à des fuites de mémoires exponentielles majeures.

😥 Le truc super triste :

J’ai déjà vu ça….

Une visite sur une page qui ajoute 20Mo dans votre RAM, pour toute la durée de votre session sur le site, et qui en prime s’accumule et s’empile à chaque re-visite de la page.
On peut arriver très vite à 1Go de RAM si l’utilisateur effectue une session longue et complète sur l’applicatif.

Parfois, nous devons agréger les valeurs de plusieurs observables ou traiter des observables imbriquées pour effectuer une action.

Pour cela, nous pouvons utiliser l'un des opérateurs de combinaison ou d'aplatissement tel que `SwitchMap`, `MergeMap`, `CombineLatest`, etc…

👉🏻 On va fonctionner en exemple, c’est plus parlant pour tout le monde.

Prenons la Story ci-dessous 👇



🗣️ En tant qu’un utilisateur du site, je souhaite pouvoir accéder à la fiche détaillée d’un produit, afin d’en obtenir toutes les informations.

Ici on va avoir besoin d’utiliser `ActivatedRoute` ainsi que `ProductService` :

- Le 1er permettant d’obtenir l’identifiant du produit contenu dans l’URL de la route.
- Le 2ème permettant d’obtenir le détail d’un produit à partir de son identifiant.

On peut clairement deviner la liaison entre les deux acteurs, on va devoir combiner la récupération de l’identifiant dans l’URL ainsi que la récupération du détail du produit.

Ce qu’il vaut stopper immédiatement :

🚫 Imbriquer les subscribes et donc de créer un “enfer de souscriptions”.

Ce qu’il faut appliquer dès maintenant :

✅ Utiliser un opérateur RxJS de combinaison tel que `SwitchMap`.

💡 BONUS : Comme on utilise `AsyncPipe` la gestion de la désinscription est déléguée et réalisé à la destruction du composant.

👉 Lien du code GitHub en 1er commentaire 😉
