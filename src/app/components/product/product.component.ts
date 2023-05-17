import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import { NgForm } from "@angular/forms";
import { Product } from "../../models/product";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
	this.getProducts();
  }
  getProducts(){
		this.productService.getProducts().subscribe(
		res => {	
			this.productService.products=res;
		},
		err => console.log(err)
		);
  }
  addProduct(form: NgForm) {
    if (form.value._id) {
      this.productService.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getProducts();
      });
    } else {
      this.productService.postProduct(form.value).subscribe((res) => {
        this.getProducts();
        this.resetForm(form);
      });
    }
  }
  editProduct(order: Product) {
    this.productService.selectedProduct = order;
  }

	deleteProduct(_id: string, form: NgForm) {
			  Swal.fire({
			  title: 'Estas seguro de eliminar?',
			  text: 'Si eliminas no podras recuperar este dato!',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonText: 'Si, eliminalo!',
			  cancelButtonText: 'Cancelar'
			}).then((result) => {
			  if (result.isConfirmed) {
					this.productService.deleteProduct(_id).subscribe((res) => {
					        this.getProducts();
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
	  this.getProducts();
    }
  }

}
