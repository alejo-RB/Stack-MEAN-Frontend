import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	selectedProduct: Product={
		productId: '',
   		productoDescripcion: '',
   		price: 0
	};

  	URL_API='http://localhost:3678/api/products';
	
	products!: Product[];
	
	constructor(private http: HttpClient) { }

	getProducts(){
		return this.http.get<Product[]>(this.URL_API);
	}
	postProduct(order: Product) {
    	return this.http.post(this.URL_API, order);
  	}
	putProduct(order: Product) {
    	return this.http.put(this.URL_API + `/${order._id}`, order);
  	}

  	deleteProduct(_id: string) {
    	return this.http.delete(this.URL_API + `/${_id}`);
  	}
}
