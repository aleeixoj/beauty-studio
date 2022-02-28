import { Decimal } from '@prisma/client/runtime';

interface IAddress {
  street: string;
  city: string;
  province: string;
  state: string;
  number: Decimal;
  complement: string;
}

interface ICreateUser {
  name: string;
  password: string;
  email: string;
  phone: Decimal;
  Address: IAddress[];
}

export { IAddress, ICreateUser };
