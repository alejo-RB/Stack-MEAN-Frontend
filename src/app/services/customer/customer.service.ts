import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

	selectedCustomer: Customer={
		customerId: '',
   		name: '',
   		email: '',
		address: ''
	};

  	URL_API='http://localhost:3678/api/customers';
	
	customers!: Customer[];
	
	constructor(private http: HttpClient) { }

	getCustomers(){
		return this.http.get<Customer[]>(this.URL_API);
	}
	postCustomer(order: Customer) {
    	return this.http.post(this.URL_API, order);
  	}
	putCustomer(order: Customer) {
    	return this.http.put(this.URL_API + `/${order._id}`, order);
  	}

  	deleteCustomer(_id: string) {
    	return this.http.delete(this.URL_API + `/${_id}`);
  	}
}
