/*
5. Funkcja zwracająca sformatowaną datę
Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę.
Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017.
Przykładowe użycie tej funkcji powinno wyglądać następująco:
getDate(); // zwraca np. “17.04.2017”
*/


(function(){

    function getDate(){

        var date = new Date(),
            day = date.getDay(),
            month = date.getMonth() + 1,
            year = date.getFullYear();

        return (day < 10 ? "0" + day : day) + "." + (month < 10 ? "0" + month : month) + "." + year;

    }

    console.log(getDate());


})()