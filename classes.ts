interface IAccount {
  name: string,
  balance: number,
  status?: string,
  deposit?: () => void // for methods we want to have params and return type, void means there is no return value
}; // they cant hold values

class InvestmentAccounts implements IAccount {
  // name;
  // balance; // there is no need to assign to them values
  constructor(public name, public balance) {

  } // public means that the properties can be accessed outside the class

  private withdraw() {

  } // cannot be call outside the object
}