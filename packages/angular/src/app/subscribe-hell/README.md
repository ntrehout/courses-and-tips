# Avoid SubscribeHell with RxJS

**Status**: Ready

Intro / Retour exp:

Selon moi une des erreurs les plus graves et répandues dans les codes Angular que je reviews c’est la compréhension et l’utilisation de RxJS (aka: les fluxs ou Observable).

C’est une erreur de design qui est exponentiel, comme elle crée des fuites de mémoires, j’ai déjà vu une large webapp qui consommé 3 GO de RAM à cause de cela.

Contexte:

Parfois, nous devons agréger les valeurs de plusieurs observables ou traiter des observables imbriquées pour effectuer une action.

Pour agréger des valeurs ou traiter des observables imbriquées, nous pouvons utiliser l'un des opérateurs de combinaison ou d'aplatissement tel que SwitchMap, MergeMap, CombineLatest, etc…

Prenons l'exemple suivant :

Dans un site E-Commerce, nous récupérons l’identifiant d’un produit contenu dans la route: https://monsite.fr/products/xxxxxxx/. Puis on demande à l’API de nous retourner le produit via son identifiant.

🚫 L’erreur, c'est d’imbriquer les subscribes.

✅ La bonne pratique, c'est d’utiliser un opérateur RxJS de combinaison tel que SwitchMap.

💡 Le petit +, comme on utilise AsyncPipe la gestion de la désinscription est délégué et réalisé à la destruction du composant.
