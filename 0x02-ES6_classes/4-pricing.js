import Currency from './3-currency.js';

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount () {
    return this._amount;
  }

  set amount (x) {
    this._amount = x;
  }

  get currency () {
    return this._currency;
  }

  set currency (x) {
    this._currency = x;
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice (amount, conversionRate) {
    return this._amount * conversionRate;
  }
}
