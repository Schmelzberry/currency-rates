// BUSINESS LOGIC //
 class CurrencyExchange {
  static async getRates() {
    try {
      const APIresponse = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const JSONresponse = await APIresponse.json();
      if (!APIresponse.ok) {
        const errorMessage = `${APIresponse.status} ${APIresponse.statusText} ${JSONresponse.message}`;
        throw new Error(errorMessage);
      }
      return JSONresponse;
      
    } catch(error) {
      return error;
    }
  }
}

export default async function getRates() {
  const response = await CurrencyExchange.getRates();
  return response.conversion_rates;
}