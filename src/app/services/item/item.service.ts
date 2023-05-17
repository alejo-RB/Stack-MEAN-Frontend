import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

	selectedItem: Item={
		orderId: '',
   		productId: '',
   		quantity: 0
	};

  	URL_API='http://localhost:3678/api/items';
	
	items!: Item[];
	
	constructor(private http: HttpClient) { }

	getItems(){
		return this.http.get<Item[]>(this.URL_API);
	}
	postItem(order: Item) {
    	return this.http.post(this.URL_API, order);
  	}
	putItem(order: Item) {
    	return this.http.put(this.URL_API + `/${order._id}`, order);
  	}

  	deleteItem(_id: string) {
    	return this.http.delete(this.URL_API + `/${_id}`);
  	}
}
