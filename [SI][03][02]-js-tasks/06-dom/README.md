# Operacje na DOM

## Wyszukiwanie / pobieranie elementów HTML w JavaScript

### getElementById - zwraca jeden element lub null, szukając po id

```
const element = document.getElementById('my-element');
```

### getElementsByClassName - zwraca tablicę elementów lub pustą tablicę, szukając po klasie

```
const elements = document.getElementsByClassName('my-class');
```

### querySelector - zwraca jeden element lub null, szukając po DOWOLNYM selektorze CSS

`querySelector` jest bardziej elastyczny niż `getElementById` i `getElementsByClassName`, ponieważ pozwala na wykorzystanie złożonych selektorów CSS, co ułatwia wyszukiwanie elementów w drzewie DOM.

```
const element1 = document.querySelector('.my-class'); // pierwszy element o klasie my-class
const element2 = document.querySelector('#my-element .my-class'); // pierwszy element o klasie my-class w elemencie o id my-element
const element3 = document.querySelector('.sidebar article.sponsored'); // pierwszy element typu article z klasą sponsored w elemencie z klasą sidebar
```

### querySelectoAll - zwraca tablicę elementów lub pustą tablicę, szukając po DOWOLNYM selektorze CSS

```
const elements = document.querySelector('.my-class'); // wszystkie elementy o klasie my-class
const elements2 = document.querySelector('#my-element .my-class'); // wszystkie elementy o klasie my-class w elemencie o id my-element
const elements3 = document.querySelector('.sidebar article.sponsored'); // wszystkie elementy typu article z klasą sponsored w elemencie z klasą sidebar
```

## Zmiana zawartości elementu

### Zmiana tekstu w elemencie

```
const element = document.getElementById('my-element');
element.innerText = 'Nowy tekst';
```

### Zmiana HTML w elemencie

```
const element = document.getElementById('my-element');
element.innerHTML = '<strong>Nowy</strong> tekst';
```
