# Avoid SubscribeHell with RxJS

**Status**: Ready


## EN

In my opinion one of the most serious and widespread mistakes in Angular codes I review is the understanding and use of RxJS (aka: streams or Observable).

This is a design error that is exponential, as it creates memory leaks, I once saw a large webapp that consumed 3GB of RAM because of this.

Sometimes we need to aggregate values of multiple observables or process nested observables to perform an action.

To aggregate values or process nested observables, we can use one of the combination or flattening operators such as SwitchMap, MergeMap, CombineLatest, etc...

Let's take the following example:

In an E-Commerce site, we retrieve the identifier of a product contained in the route: https://monsite.fr/products/xxxxxxx/. Then we ask the API to return the product via its identifier.

🚫 The mistake is to nest the subscribers.

✅ The best practice is to use an RxJS combination operator such as SwitchMap.

💡 The small +, as we use AsyncPipe the management of the unsubscription is delegated and realized at the destruction of the component.

## FR

Selon moi une des erreurs les plus graves et répandues dans les codes Angular que je reviews c’est la compréhension et l’utilisation de RxJS (aka: les fluxs ou Observable).

C’est une erreur de design qui est exponentiel, comme elle crée des fuites de mémoires, j’ai déjà vu une large webapp qui consommé 3 GO de RAM à cause de cela.

Parfois, nous devons agréger les valeurs de plusieurs observables ou traiter des observables imbriquées pour effectuer une action.

Pour agréger des valeurs ou traiter des observables imbriquées, nous pouvons utiliser l'un des opérateurs de combinaison ou d'aplatissement tel que SwitchMap, MergeMap, CombineLatest, etc…

Prenons l'exemple suivant :

Dans un site E-Commerce, nous récupérons l’identifiant d’un produit contenu dans la route: https://monsite.fr/products/xxxxxxx/. Puis on demande à l’API de nous retourner le produit via son identifiant.

🚫 L’erreur, c'est d’imbriquer les subscribes.

✅ La bonne pratique, c'est d’utiliser un opérateur RxJS de combinaison tel que SwitchMap.

💡 Le petit +, comme on utilise AsyncPipe la gestion de la désinscription est délégué et réalisé à la destruction du composant.
