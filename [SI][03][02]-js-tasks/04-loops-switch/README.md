# Pętle, switch statements, obiekty

## Pętle

---

### Zadanie 4.1 - liczby parzyste

Użyj pętli `for`, aby wyświetlić `liczby parzyste` od 2 do 10.
Zadanie możesz wykonać w konsoli przeglądarki i wysłać tylko kod JS do sprawdzenia, nie musisz (ale możesz) stworzyć plik html i dodać skrypt do niego.

---

### Zadanie 4.2 - zmiana for na while

Przepisz kod, zmieniając pętlę `for` na `while` bez zmiany jej zachowania (output powinien pozostać taki sam).

```
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
}
```

---

### Zadanie 4.3

Napisz pętlę, która prosi o podanie liczby większej niż 100. Jeśli odwiedzający wpisze inną liczbę – poproś o ponowne wprowadzenie.

Pętla musi pytać o liczbę, dopóki odwiedzający nie wprowadzi liczby większej niż 100 lub nie anuluje wprowadzania danych/nie wprowadzi pustej linii.

Tutaj możemy założyć, że odwiedzający wprowadza tylko liczby. W tym zadaniu nie ma potrzeby implementowania specjalnej obsługi danych wejściowych nieliczbowych.

---

### Zadanie 4.4

Liczba całkowita większa od `1` nazywana jest liczbą pierwszą, jeśli nie można jej podzielić bez reszty przez cokolwiek oprócz `1` i samej siebie. Innymi słowy, `n > 1` jest liczbą pierwszą, jeśli nie może być równo podzielone przez cokolwiek oprócz `1` i `n`.

Na przykład liczba `5` jest liczbą pierwszą, ponieważ nie można jej podzielić bez reszty przez `2`, `3` i `4`.

**Napisz kod, który zwraca liczby pierwsze z przedziału od 2 do n.**

Dla `n = 10` wynikiem będzie `2`, `3`, `5`, `7`.

P.S. Kod powinien działać dla dowolnego `n`, a nie być hardcoded do żadnej stałej wartości.

P.P.S. aby sprawdzić, czy dana liczba jest liczbą pierwszą przydatne będzie użycie operatora modulo `%`, sprawdzając, czy jakakolwiek liczba od 2 do `n-1` dzieli `n` bez reszty.

### Switch

### Zadanie 5.1 - przepisz switch na if

Napisz kod, używając `if..else`, który odpowiadałby następującemu `switch`:

```
const browser = prompt('Enter your browser');

switch (browser) {
  case 'Chrome':
    alert( "You've got the Chrome!" );
    break;

  case 'Edge':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

## Obiekty

### Zadanie 6.1

1. Stwórz pusty obiekt `user`.
1. Dodaj do niego właściwość `name` z wartością `John`.
1. Dodaj do niego właściwość `surname` z wartością `Smith`.
1. Zmień wartość właściwości `name` na `Pete`.
1. Usuń właściwość `name` z obiektu.
1. Wyświetl obiekt w konsoli.

### Zadanie 6.2

Posiadamy obiekt przechowujący wynagrodzenia naszego zespołu:

```
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Napisz kod sumujący wszystkie wynagrodzenia i zapisz w zmiennej `totalPayout`. W powyższym przykładzie powinno być `390`. Jeśli pensje są puste, wynik musi wynosić `0`.

P.S. dla iteracji spróbuj użyć pętli `for..in`.

### Zadanie 6.3 - przemnóż właściwości numeryczne w obiekcie

```
// przed zmianami
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// dodaj zmiany tutaj

// po zmianach
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

P.S. dla sprawdzenia, czy dana właściwość jest liczbą, możesz użyć funkcji `typeof`. Np `typeof menu.width === 'number'`, lub `typeof menu[key] === 'number'`.
