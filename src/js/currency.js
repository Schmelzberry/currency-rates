// need to use for referring to API key :
//const url = https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD 

// BUSINESS LOGIC //
export default class CurrencyExchange {
  static async getRates() {
    try {
      const APIresponse = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      console.log(APIresponse);
      const JSONresponse = await APIresponse.json();
      console.log(JSONresponse);
      if (!APIresponse.ok) {
        const errorMessage = `${APIresponse.status} ${APIresponse.statusText} ${JSONresponse.message}`;
        throw new Error(errorMessage);
      }
      console.log(JSONresponse);
      return JSONresponse;
      
    } catch(error) {
      return error;
    }
  }
}