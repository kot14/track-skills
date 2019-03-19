import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/admin-module/modal/modal.service';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DirectionListComponent } from '../../direction-list.component';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-direction-edit-modal',
  templateUrl: './direction-edit-modal.component.html',
  styleUrls: ['./direction-edit-modal.component.scss']
})
export class DirectionEditModalComponent implements OnInit {

  subscription: Subscription;
  editedItemIndex: number;
  public viewDirection;
  private editId;
  formDirectionGroup: FormGroup;
  constructor(private modalService: ModalService,
              private directionList: DirectionListComponent,
              private directionService: DirectionService) { }
   
    ngOnInit() {
      this.formDirectionGroup = new FormGroup({
        'id': new FormControl(),
        'name': new FormControl(),
        'startDate': new FormControl(),
        'updateDate': new FormControl(),
        'photo': new FormControl()
      });
      this.modalService.techData$.subscribe(data => {
        if (data) {
           //console.log(data);
          this.viewDirection = data;
          this.editId = data.id[0];
          //console.log(this.editId);
        }
      });
    }
    onSubmit() {
      const techId = this.editId; 
      const id = this.formDirectionGroup.value.id;
      const name = this.formDirectionGroup.value.name;
      const startDate = this.formDirectionGroup.value.startDate;
      const updateDate = this.formDirectionGroup.value.updateDate;
      const photo = this.formDirectionGroup.value.photo;
      const postData = {
        id: id,
        name: name,
        startDate: startDate,
        updateDate: updateDate,
        photo: photo
        
      };
      this.directionList.setPage(1);
      this.directionService.putData(techId, postData);
      this.directionList.getDataFromBase();
      this.onCloseModal();
      //console.log(postData)
      
    }
   
    onCloseModal(){
      this.directionList.onCloseModal();
    }
  
  
  }


