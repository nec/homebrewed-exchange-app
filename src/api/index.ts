export type tListCurrency = {
  [key: string]: number,
};

export type tExchangeData = {
  base: string,
  date: string,
  rates: tListCurrency,
};

export class API {
  static async fetching(): Promise<tExchangeData> {
    const data = await fetch("https://api.ratesapi.io/api/latest");
    return await data.json();
  }
}
