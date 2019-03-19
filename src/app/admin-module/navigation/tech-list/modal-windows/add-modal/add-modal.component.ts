import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Tech } from '../../tech.model';
import { ModalService } from 'src/app/admin-module/modal/modal.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TechListComponent } from '../../tech-list.component';
import { TechListServiceService } from 'src/app/admin-module/services/tech-list-service.service';
import { Direction } from '../../../direction-list/model/direction.model';
import { DirectionService } from '../../../direction-list/services/direction.service';
import { DirectionListComponent } from '../../../direction-list/direction-list.component';
import { PaginationService } from '../../../user-list/service/pagination.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  public viewTech;
  dropdownView = false
  formTechGroup: FormGroup;
  directions: Direction[];
  techs: Tech[];
  
  constructor(
              
              private tchlist: TechListComponent,
              private techService: TechListServiceService) {
    
   }

   ngOnInit() {
    this.techService.getData();
    this.techService.getData$.subscribe(techsData =>{
      this.techs = techsData; 
      console.log(this.techs)
    })

    this.formTechGroup = new FormGroup({
      'id': new FormControl,
      'name': new FormControl('',Validators.required),
      'nameDirection': new FormControl('',Validators.required),
      'startDate': new FormControl('',Validators.required),
      'updateDate': new FormControl('',Validators.required),
      'photo': new FormControl('',Validators.required)
    });
    this.tchlist.getDataFromBase();
    
  
  }

  onSubmit() {
    // const id = parseInt(this.formTechGroup.value.id, 10);
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

    this.techService.postData(postData);
    this.techService.getData();
    this.tchlist.setPage(1);

   
  }

  onOpenDropdown(){
    this.dropdownView = true;
  }
  onCloseDropdown(){
    this.dropdownView = false;
  }
  onCloseModal(){
    this.tchlist.OnCloseView();
  }

}
