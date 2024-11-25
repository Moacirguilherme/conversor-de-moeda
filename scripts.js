const convertButton = document.querySelector(".convert-button") // mapeando os botoes. e seletores
const currencySelect = document.querySelector(".currency-select") // segundo valor convertido..
const currencySelectFirst = document.querySelector(".money-to-convert") //primeiro valor convertido


function convertValue() { // converte real para dolar ou euro
    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //primeiro valor real
    const currencyValueConverted = document.querySelector(".currency-value") //segundo valor dolar

    const dolarToday = 5.77 //data 20.11.2024
    const euroToday = 6.08  
    const libraToday = 7.3
    const realToday = 1

     // Formatar o valor exibido no primeiro select com base na moeda
     if (currencySelectFirst.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
    } else if (currencySelectFirst.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);
    } else if (currencySelectFirst.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue);
    } else if (currencySelectFirst.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

// Atualizando o símbolo da moeda convertida
    let currencySymbol = "";
    if (currencySelect.value == "dolar") {
        currencySymbol = "$";
    } else if (currencySelect.value == "euro") {
        currencySymbol = "€";
    } else if (currencySelect.value == "libra") {
        currencySymbol = "£";
    } else if (currencySelect.value == "real") {
        currencySymbol = "R$";
    }

// dolar como primeira moeda

if (currencySelectFirst.value == "dolar") {
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (dolarToday / euroToday))
    }
    else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (dolarToday / libraToday))
    }
    else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * (dolarToday / realToday))
    }
    else if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (dolarToday / dolarToday))
    }
}

if (currencySelectFirst.value == "real") {// real como primeira moeda
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (realToday / euroToday))
    }
    else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (realToday / libraToday))
    }
    else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * (realToday / realToday))
    }
    else if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (realToday / dolarToday))
    }
}

if (currencySelectFirst.value == "euro") {// euro como primeira moeda
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (euroToday / dolarToday))
    }
    else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (euroToday / libraToday))
    }
    else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * (euroToday / realToday))
    }
    else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (euroToday/ euroToday))
    }}
  
if (currencySelectFirst.value == "libra") {// libra como primeira moeda
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (libraToday / dolarToday))
    }
    else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (libraToday / euroToday))
    }
    else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * (libraToday / realToday))
    }
    else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (libraToday / libraToday))
    }
    }
}
   
// funcao para mudar texto e imagem da primeira moeda
function chanceCurrencyfirst() { 
    const currencyName1 = document.getElementById("curency-name-1")
    const currencyImage1 = document.querySelector(".currency-img-first")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //1


    if (currencySelectFirst.value == "dolar") {
        currencyName1.innerHTML = "Dolar Americano"
        currencyImage1.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(1); // Exemplo para mostrar o símbolo do Dólar

    }
      
    if (currencySelectFirst.value == "euro") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(1); // Exemplo para mostrar o símbolo do Euro

    }
    if (currencySelectFirst.value == "libra") {
        currencyName1.innerHTML = "Libra"
        currencyImage1.src = "./assets/libra.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(1); // Exemplo para mostrar o símbolo da Libra

    }
    if (currencySelectFirst.value == "real") {
        currencyName1.innerHTML = "Real Br"
        currencyImage1.src = "./assets/real.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(1); // Exemplo para mostrar o símbolo do Real
    }
}

 //funcao mudar texto e imagem da segunda moeda
function chanceCurrency() { 
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Br"
        currencyImage.src = "./assets/real.png"
    }
}


currencySelectFirst.addEventListener("change", chanceCurrencyfirst)
currencySelect.addEventListener("change", chanceCurrency)
convertButton.addEventListener("click", convertValue)


function handleEnterKey(e) {
    if (e.key === "Enter") {
        convertValue();  // Dispara a conversão quando pressionar Enter
    }
}

document.querySelector(".input-currency").addEventListener("keydown", handleEnterKey);

