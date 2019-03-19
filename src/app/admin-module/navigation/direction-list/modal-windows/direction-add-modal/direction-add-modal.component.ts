import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DirectionListComponent } from '../../direction-list.component';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-direction-add-modal',
  templateUrl: './direction-add-modal.component.html',
  styleUrls: ['./direction-add-modal.component.scss']
})
export class DirectionAddModalComponent implements OnInit {
  public viewTech;
  formDirectionGroup: FormGroup;
  
  constructor(
    private directionlist: DirectionListComponent,
    private directionService: DirectionService) {

}
  ngOnInit() {
  
  this.formDirectionGroup = new FormGroup({
    'id': new FormControl,
    'name': new FormControl('',Validators.required),
    'startDate': new FormControl('',Validators.required),
    'updateDate': new FormControl('',Validators.required),
    'photo': new FormControl('',Validators.required)
  });
  this.directionlist.getDataFromBase();

}
onSubmit() {
  // const id = parseInt(this.formTechGroup.value.id, 10);
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

  this.directionService.postData(postData);
  this.directionService.getData();
  this.directionlist.setPage(1);

 
}


onCloseModal(){
  this.directionlist.onCloseModal();
}

}
