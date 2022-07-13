export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IAction{
  isNavigation? : boolean,
  path? : string,
  params? : object
}
