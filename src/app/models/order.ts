export interface Order{
   customerId: string;
   orderId: string;
   orderStatus: string;
   createdAt?: Date;
   updatedAt?: Date;
   _id?: string;
}