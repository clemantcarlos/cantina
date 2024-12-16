export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  cedula: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  hashedRt: string | null;
};
export type Pagination = {
  skip: number;
  take: number;
  total: number;
};