const account: {
  name: string,
  balance: number,
  status?: string // question mark means that the field is optional
} = {
  name: 'Luis',
  balance: 10,
};

let accounts: {}[]; // the variable will store an array of objects

// interfaces are alternative synthax which is more cleaner
interface IAccount {
  name: string,
  balance: number,
  status?: string,
  deposit?: () => void // for methods we want to have params and return type, void means there is no return value
}; // they cant hold values

const account1: IAccount = {
  name: 'Luis',
  balance: 10
};

let accounts3: IAccount[];