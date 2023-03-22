# Funkcje, tablice

## Funkcje

[Podstawy funkcji](https://javascript.info/function-basics)
[Wyrażenia funkcyjne](https://javascript.info/function-expressions)
[Funkcje strzałkowe](https://javascript.info/arrow-functions-basics)

## Tablice

[Tablice - podstawy](https://javascript.info/array)
[Tablice - metody](https://javascript.info/array-methods)
[Zamiana obiektu na tablicę](https://javascript.info/keys-values-entries)

## Zadania

### 5.1

Poniższa funkcja zwraca wartość `true`, jeśli wiek parametru jest większy niż 18.
W przeciwnym razie prosi o potwierdzenie i zwraca wynik.

```
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Przepisz ją, żeby działanie pozostało bez zmian, ale bez if'a, w jednym wierszu.
Zrób dwa warianty checkAge:

- Używając operatora znaku zapytania `?`
- Używając operatora logicznego `||`

### Zadanie 5.2

Napisz funkcję `pow(x,n)`, która zwraca x w potędze n.
Innymi słowy, mnoży `x` przez siebie `n` razy i zwraca wynik.

```
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

Utwórz stronę, która prosi o podanie `x` i `n`, a następnie wyświetla wynik `pow(x,n)`.

### Zadanie 5.3

Napisz funkcję `addToCart(productName)`, która sprawdza czy produkt o podanej nazwie już jest w koszyku i jeżeli go nie ma - dodaje element do koszyka.

P.S. przydatne będą metody `includes` oraz `push`.

### Zadanie 5.4

Napisz funkcję capitalize(str), która zwraca podany string ze zmienioną pierwszą literą na dużą.
Jeżeli input nie jest poprawny - zwróć alert z informacją o błędzie.

```
capitalize('adam') // Adam
capitalize('Techni') // Techni
capitalize() // alert('Podaj wartość!')
```

### Zadanie 5.5

Napisz funckje `getCartTotalPrice`, która zwraca sumę cen wszystkich produktów w koszyku.

```
getCartTotalPrice() // alert('Koszyk jest pusty!')
getCartTotalPrice([]) // 0
getCartTotalPrice([
  {name: 'apple', price: 1},
  {name: 'orange', price: 2}
]) // 3
```

### Zadanie 5.6

Przepisz funkcje na funkcje strzałkowe:

```

function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}

ask(
"Do you agree?",
function() { alert("You agreed."); },
function() { alert("You canceled the execution."); }
);

```

### Zadanie 5.7\*

Napisz funkcję `removeFromCart(productName)`, która zwraca koszyk bez produktu o podanej nazwie.
P.S. przydatne będą metody `findIndex` oraz `splice`, lub ewentualnie `filter`.

```

```
