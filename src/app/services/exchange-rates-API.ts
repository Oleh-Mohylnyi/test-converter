const HOST = "https://api.privatbank.ua/p24api/pubinfo";
const REQUEST = "?json&exchange&coursid=5";

export let exchangeRates: any[] = [

];

export async function fetchExchangeRate() {

    await fetch(`${HOST}${REQUEST}`)
        .then(response => {
            // if (response.ok) {
            return response.json()
          }
        //   return Promise.reject(
        //     new Error(`nothing found for this request`)
          )
        // })
        .then(data => exchangeRates = data)
 
    return exchangeRates
}

