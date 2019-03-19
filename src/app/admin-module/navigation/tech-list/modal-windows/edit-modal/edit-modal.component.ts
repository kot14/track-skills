import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/admin-module/modal/modal.service';
import { Tech } from '../../tech.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl } from '@angular/forms';
import { TechListServiceService } from 'src/app/admin-module/services/tech-list-service.service';
import { TechListComponent } from '../../tech-list.component';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  public viewTech;
  private editId;
  formTechGroup: FormGroup;
  constructor(private modalService: ModalService,
              private techService: TechListServiceService,
              private tchlist: TechListComponent) { }

  ngOnInit() {
    this.formTechGroup = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(),
      'nameDirection': new FormControl(),
      'startDate': new FormControl(),
      'updateDate': new FormControl(),
      'photo': new FormControl()
    });
    this.modalService.techData$.subscribe(data => {
      if (data) {
         console.log(data);
        this.viewTech = data;
        this.editId = data.id[0];
        console.log(this.editId);
      }
    });
  }
  onSubmit(){
    const techId = this.editId; 
    const id = this.formTechGroup.value.id;
    const name = this.formTechGroup.value.name;
    const nameDirection = this.formTechGroup.value.nameDirection;
    const startDate = this.formTechGroup.value.startDate;
    const updateDate = this.formTechGroup.value.updateDate;
    const photo = this.formTechGroup.value.photo;
    const postData = {
      id: id,
      name: name,
      nameDirection: nameDirection,
      startDate: startDate,
      updateDate: updateDate,
      photo: photo
      
    };
    this.tchlist.setPage(1);
    this.techService.putData(techId, postData);
    this.tchlist.getDataFromBase();
    this.onCloseModal();
    console.log(postData)
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  onCloseModal(){
    this.tchlist.OnCloseView();
  }


}
