# Basic JS tasks (variables, data types)

## Podstawy podstaw

### Zadanie 1

Utwórz stronę wyświetlającą komunikat „Jestem JavaScript!”.

Zrób to w konsoli przegądarki lub w tagu `<script>` w pliku HTML, format to nie ma znaczenia, najważniejsze jest, aby upewnić się, że działa.

### Zadanie 2

Skorzystaj z rozwiązania z poprzedniego zadania. Zmień go tak, aby zawartość skryptu znajdowała się w zewnętrznym pliku `alert.js`, który będzie w tym samym folderze. Otwórz stronę i upewnij się, że komunikat jest wyświetlany.

## Praca ze zmiennymi

### Zadanie 3

- Zadeklaruj dwie zmienne: admin i name
- Przypisz wartość "Jan Kowalski" do zmiennej name.
- Skopiuj wartość ze zmiennej name do admin
- Wyprowadź wartość zmiennej administratora za pomocą funkcji `alert` (która powinna wyświetlać "Jan Kowalski").

## Interakcja z użytkownikiem, instrukcje warunkowe

### Zadanie 4

Stwórz stronę, która zapyta o podanie imienia użytkownika i przywita się z nim (np. dla imienia `Jan` napisze `Cześć Jan, miło Cię widzieć!`).

### Zadanie 5

Zmodyfikuj kod poprzedniego zadania tak, aby przywitanie było wyświetlane tylko wtedy, gdy użytkownik poda swoje imię. Jeśli użytkownik nie poda imienia, niech funkcja `alert` wyświetli komunikat `Witaj, nieznajomy!`.

Dodatkowo, jeżeli użytkownik poda imię z zadania 4 - przywitajmy się z nim _PONOWNIE_ (np. dla imienia `Jan` napisze `Cześć Jan, miło Cię znowu widzieć!`).

- brak wartości -> `Witaj nieznajomy!`
- imię z zadania 4 -> `Cześć $NAME, miło Cię znowu widzieć!`
- inne imię -> `Cześć $NAME, miło Cię widzieć!`

### Zadanie 6

Popraw poniższy kod:

```
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
```

Ten kod powinien zapytać o dwie liczby i wyświetlić ich sumę, jednak dla podanych domyślnie liczb 1 oraz 2 wyświetla 12 (zamiast 3).

### Zadanie 7

Używając `if..else`, napisz kod, który otrzymuje liczbę za pomocą `prompt`, a następnie wyświetla komunikat:

- `1` jeśli wartość jest większa od zera
- `-1` jeśli jest mniejsze od zera
- `0`, jeśli jest równe zeru

### Zadanie 8

Napisz prosty kalkulator.

- Użytkownik podaje dwie liczby
- użytkownik wybiera działanie, które chce wykonać
- Na podstawie wyboru użytkownika, wykonaj odpowiednie działanie i wyświetl wynik za pomocą alert
- pamiętaj o obsłużeniu błędów użytkownika (np. dzielenie przez 0)
