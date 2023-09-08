// need to use for referring to API key :
//const url = https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD 

// BUSINESS LOGIC //
export default class CurrencyExchange {
  static async getAustralia(AUD) {
    try {
      const APIresponse = await fetch ('https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD');
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