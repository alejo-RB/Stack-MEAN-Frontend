import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item/item.service';
import { NgForm } from "@angular/forms";
import { Item } from "../../models/item";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
	this.getItems();
  }
  getItems(){
		this.itemService.getItems().subscribe(
		res => {	
			this.itemService.items=res;
		},
		err => console.log(err)
		);
  }
  addItem(form: NgForm) {
    if (form.value._id) {
      this.itemService.putItem(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getItems();
      });
    } else {
      this.itemService.postItem(form.value).subscribe((res) => {
        this.getItems();
        this.resetForm(form);
      });
    }
  }
  editItem(order: Item) {
    this.itemService.selectedItem = order;
  }

	deleteItem(_id: string, form: NgForm) {
			  Swal.fire({
			  title: 'Estas seguro de eliminar?',
			  text: 'Si eliminas no podras recuperar este dato!',
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonText: 'Si, eliminalo!',
			  cancelButtonText: 'Cancelar'
			}).then((result) => {
			  if (result.isConfirmed) {
					this.itemService.deleteItem(_id).subscribe((res) => {
					        this.getItems();
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
	  this.getItems();
    }
  }

}
