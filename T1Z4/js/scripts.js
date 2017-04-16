/*
4. Funkcja sumująca przekazane liczby
Stwórz funkcję o nazwie sum, która będzie przyjmowała jeden parametr, którym będzie
tablica z liczbami. Funkcja ta powinna zsumować wszystkie liczby z przekazanej tablicy, a
następnie zwrócić wynik takiej operacji.
Przykładowe jej użycie powinno wyglądać tak:
sum([1, 10, 5, 4]); // zwraca wartość 20
*/


(function(){


	function sum(numbers){

		var result = 0;

		for(var i = 0; i < numbers.length; i++){
			result += numbers[i];
		}

		return result;

	}

	console.log(sum([1, 10, 5, 4])); 

})()