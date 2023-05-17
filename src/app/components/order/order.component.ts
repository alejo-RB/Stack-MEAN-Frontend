import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order/order.service';
import { NgForm } from "@angular/forms";
import { Order } from "../../models/order";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
	this.getOrders();
  }
  getOrders(){
		this.orderService.getOrders().subscribe(
		res => {	
			this.orderService.orders=res;
		},
		err => console.log(err)
		);
  }
    addOrder(form: NgForm) {
    if (form.value._id) {
      this.orderService.putOrder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getOrders();
      });
    } else {
      this.orderService.postOrder(form.value).subscribe((res) => {
        this.getOrders();
        this.resetForm(form);
      });
    }
  }
  editOrder(order: Order) {
    this.orderService.selectedOrder = order;
  }

	deleteOrder(_id: string, form: NgForm) {
			  Swal.fire({
			  title: 'Estas seguro de eliminar?',
			  text: 'Si eliminas no podras recuperar este dato!',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonText: 'Si, eliminalo!',
			  cancelButtonText: 'Cancelar'
			}).then((result) => {
			  if (result.isConfirmed) {
					this.orderService.deleteOrder(_id).subscribe((res) => {
					        this.getOrders();
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
	  this.getOrders();
    }
  }

}
