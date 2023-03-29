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

function() handleElementClick{
  alert('Hello World!');
}
```
