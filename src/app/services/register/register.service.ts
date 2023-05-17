import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  selectedRegister: Register={
		name: '',
   		email: '',
   		password: ''
	};

  	URL_API='http://localhost:3678/api/register';
	URL_API2='http://localhost:3678/api/register/name';
	URL_API3='http://localhost:3678/api/register/password';
	
	Registers!: Register[];
	
	constructor(private http: HttpClient) { }

	postRegister(order: Register) {
    	return this.http.post(this.URL_API, order);
  	}
	getName(name: string) {
    	return this.http.get<Register[]>(this.URL_API2 + `/${name}`);
  	}
	getPassword(password: string) {
    	return this.http.get<Register[]>(this.URL_API3 + `/${password}`);
  	}

}