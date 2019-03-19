import { Component, OnInit, ViewChild } from '@angular/core';
import { Tech } from '../../tech.model';
import { TechListComponent } from '../../tech-list.component';
import { ModalService } from 'src/app/admin-module/modal/modal.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {
  subscription: any;
  public viewTech;
  constructor(
    private modalService: ModalService,
    private tchlist: TechListComponent
  ) { }


  ngOnInit() {
    // this.subscription = this.tchEdit.startedEditing
    // .subscribe(
    //   (index: number) => {
    //     this.editedItemIndex = index;
    //     this.editMode = true;
    //     this.editedItem = this.tchEdit.getTech(index);
    //     this.tchForm.setValue({
    //       id: this.editedItem.id,
    //       name: this.editedItem.name,
    //       nameDirection: this.editedItem.nameDirection,
    //       startDate: this.editedItem.startDate,
    //       updateDate: this.editedItem.updateDate,
    //       photo: this.editedItem.photo})
    //   }
    // );

    this.modalService.techData$.subscribe(data => {
      if (data) {
        // console.log(data);
        this.viewTech = data;
      }
    });
  }

  onCloseModal(){
    this.tchlist.OnCloseView();
  }

}
