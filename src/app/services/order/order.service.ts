import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
	
	selectedOrder: Order={
		customerId: '',
   		orderId: '',
   		orderStatus: ''
	};
	
	URL_API='http://localhost:3678/api/orders';
	
	orders!: Order[];
	
	constructor(private http: HttpClient) { }

	getOrders(){
		return this.http.get<Order[]>(this.URL_API);
	}
	postOrder(order: Order) {
    	return this.http.post(this.URL_API, order);
  	}
	putOrder(order: Order) {
    	return this.http.put(this.URL_API + `/${order._id}`, order);
  	}

  	deleteOrder(_id: string) {
    	return this.http.delete(this.URL_API + `/${_id}`);
  	}
}
