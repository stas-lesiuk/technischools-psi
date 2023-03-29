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

---

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

---

## Zmiana atrybutów elementu

### Zmiana stylu elementu

```
const element = document.getElementById('my-element');
element.style.color = 'red';
element.style.backgroundColor = 'blue'; // zwróć uwagę na notację camelCase
```

### Dodanie lub usunięcie klasy

```
const element = document.getElementById('my-element');
element.classList.add('green') // dodaje klasę
element.classList.remove('green') // usuwa klasę
```

---

## Tworzenie elementu

### Prosty element

```
const element = document.createElement('div');
element.innerText = 'Nowy element';
document.body.appendChild(element); // dodajemy do body

```

### Zagnieżdżony element

```
const parent = document.querySelector('.parent');

// tworzymy listę
const list = document.createElement('ul');

// twożymy elementy listy
const item1 = document.createElement('li');
item1.innerText = 'Pierwszy element';
const item2 = document.createElement('li');
item2.innerText = 'Drugi element';
const item3 = document.createElement('li');
item3.innerText = 'Trzeci element';

// dodajemy elementy do listy
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

parent.appendChild(list); // dodajemy listę do elementu parent
```

## Interakcja z użytkownikiem

### Kliknięcie na element (click event)

Są dwa "stare" sposoby na dodawanie eventów - w HTML oraz za pomocą bezpośredniego przypisania funkcji do elementu oraz lepszy sposób - dodanie eventu za pomocą addEventListener.

### Bad 1 (ustawiamy w HTML - nie używaj tego):

#### **HTML**

```
<div onclick="myFunction()">Click me!</div>
```

#### **JS**

```
function myFunction() {
  alert('Hello World!');
}
```

### Bad 2 (ustawiamy poprzez nazwę eventu - nie używaj tego):

```
const element = document.getElementById('my-element');
element.onclick = function() {
  alert('Hello World!');
}

```

### Good (dodajemy event za pomocą addEventListener):

```
const element = document.getElementById('my-element');
element.addEventListener('click', function() {
  alert('Hello World!');
});
```

Można ładniej i czytelniej - wynieść funkcję:

```
const element = document.getElementById('my-element');
element.addEventListener('click', handleElementClick);

function handleElementClick (){
  alert('Hello World!');
}
```

---

## Zadania

### Zadanie 1

1. Stwórz html z trzema elementami:

- - elementem o klasie `parent`
- - elementem o klasie `child-left` w środku parent
- - elementem o klasie `child-right` w środku parent

1. Ustaw kolor tła dla lewego dziecka na niebiseki.
1. Ustaw kolor tła dla prawego dziecka na czerwony.
1. Ustaw kolor czcionki dla rodzica na biały.

### Zadanie 2

1. Stwórz HTML z listą trzech elementów.
1. Pokoloruj drugi z tych elementów na zielono za pomocą JS, używając właściwości `style`.
1. Zmodyfikuj kod w taki sposób, aby nie używać `style`, tylko dodawać klasę CSS.

### Zadanie 3

- Stwórz html o następującej strukturze:
- - elementem o klasie `parent`
- - elementem o klasie `col-left` w środku parent
- - elementem o klasie `col-right` w środku parent
- - stwórz po 3 elementy `span.inner` w środku każdej kolumny
- pokoloruj wszystkie elementy `span.inner` w kolumnie po lewej na niebieski

#### Zadanie 4

- Stwórz html z dwoma elementami:
- button o klasie `increment`
- div z id `result`
- Dodaj event, który będzie zwiększał wartość w divie o 1 za każdym razem, gdy klikniemy w button
