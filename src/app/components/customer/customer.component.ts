import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer/customer.service';
import { NgForm } from "@angular/forms";
import { Customer } from "../../models/customer";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	titularAlerta:string='';

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
	this.getCustomers()
  }
  getCustomers(){
		this.customerService.getCustomers().subscribe(
		res => {	
			this.customerService.customers=res;
		},
		err => console.log(err)
		);
  }
  addCustomer(form: NgForm) {
    if (form.value._id) {
      this.customerService.putCustomer(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getCustomers();
      });
    } else {
      this.customerService.postCustomer(form.value).subscribe((res) => {
        this.getCustomers();
        this.resetForm(form);
      });
    }
  }
  editCustomer(order: Customer) {
    this.customerService.selectedCustomer = order;
  }

  deleteCustomer(_id: string, form: NgForm) {
			  Swal.fire({
			  title: 'Estas seguro de eliminar?',
			  text: 'Si eliminas no podras recuperar este dato!',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonText: 'Si, eliminalo!',
			  cancelButtonText: 'Cancelar'
			}).then((result) => {
			  if (result.isConfirmed) {
				this.customerService.deleteCustomer(_id).subscribe((res) => {
			        this.getCustomers();
			        this.resetForm(form);
			      });
			    Swal.fire(
			      'Eliminado!',
			      'El registro ha sido eliminado',
			      'success'
			    )
			
			  } else if (result.dismiss === Swal.DismissReason.cancel) {
			    Swal.fire(
			      'Cancelado',
			      'Su registro esta a salvo',
			      'error'
			    )
			  }
			})
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
	  this.getCustomers();
    }
  }

}
