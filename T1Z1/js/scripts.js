/* 1. Instrukcje warunkowe
Za pomocą instrukcji warunkowej if (wraz z blokami else) lub switch, stwórz skrypt, który w konsoli (za pomocą console.log()) wyświetli cenę produktu, w zależności od liczby zakupionych przez klienta do tej pory produktów. Oczywiście wszystko to jest abstrakcyjne, więc musisz utworzyć zmienną, która będzie przechowywała liczbę zakupionych produktów, np. 100, a następnie zmienną z ceną jakiegoś fikcyjnego produktu, np. 50. Poniżej tych dwóch zmiennych utwórz blok instrukcji warunkowych, który ustali ostateczną cenę, w zależności od liczby zakupionych przez klienta produktów.
Jeśli zatem klient ma już na koncie od 5 do 20 zakupionych produktów, to przyznaj zniżkę 5%. Jeśli 21 do 50, to 10%, od 51 do 100 produktów daje zniżkę 15%, a powyżej 100 produktów zniżkę w wysokości 20%.
Musisz zatem obliczyć ostateczną cenę produktu, a następnie wyświetlić w konsoli komunikat, np. “Podstawowa cena produktu to 20zł, po obniżce to 17zł”. Aby to
przetestować, będziesz musiał zmieniać liczbę zakupionych przez klienta produktów w zmiennej, w której taką informację zapiszesz
*/



(function(){

	var products_count = 120,
		product_price = 20,
		discount,
		final_price,
		text;

	function calculate(product_price, products_count){

		if(product_price >= 0 && products_count >= 0){

			if(products_count > 4 && products_count <=20){
				discount = .05;
			}
			else if(products_count > 20 && products_count <= 50){
				discount = .10;
			}
			else if(products_count > 50 && products_count <= 100){
				discount = .15;
			}else if(products_count > 100){
				discount = .20;
			}else{
				discount = 0;
			}

			return product_price * (1 - discount);

		} else {

			return -1;

		}

	}



	// function calculate2(product_price, products_count){

	// 	if(product_price >= 0 && products_count >= 0){

	// 		switch(true){
	// 			case (products_count > 100):
	// 				discount = .20;
	// 				break;			
	// 			case (products_count > 50):
	// 				discount = .15;
	// 				break;
	// 			case (products_count > 20):
	// 				discount = .10;
	// 				break;				
	// 			case (products_count > 4):
	// 				discount = .05;
	// 				break;
	// 			case (products_count > 4):
	// 				discount = 0;
	// 				break;			
	// 		}

	// 		return product_price * (1 - discount);

	// 	} else {

	// 		return -1;

	// 	}			

	// }


	final_price = calculate(product_price, products_count);

	if(final_price >= 0){
		text = "Podstawowa cena produktu to " + product_price + " zł, po obniżce to " +  final_price + " zł";
	} else {
		text = "Podano nieprawidłową cenę lub ilość produktów!"
	}


	document.querySelector("#discount-info").textContent = text;
	console.log(text);

})()