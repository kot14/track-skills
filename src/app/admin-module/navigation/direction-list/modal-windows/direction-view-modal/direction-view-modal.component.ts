import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from 'src/app/admin-module/modal/modal.service';
import { DirectionListComponent } from '../../direction-list.component';
import { DirectionService } from '../../services/direction.service';
import { Tech } from '../../../tech-list/tech.model';

@Component({
  selector: 'app-direction-view-modal',
  templateUrl: './direction-view-modal.component.html',
  styleUrls: ['./direction-view-modal.component.scss']
})
export class DirectionViewModalComponent implements OnInit {
  subscription: any;
  editedItemIndex: number;
  editMode: boolean;
  editedItem: Tech;
  viewDirection;
  @ViewChild('f') tchForm: NgForm;
  constructor(private modalService: ModalService,
              private directionList: DirectionListComponent) { }
  ngOnInit() {
    this.modalService.techData$.subscribe(data => {
      if (data) {
        // console.log(data);
        this.viewDirection = data;
      }
    });
  }
  onCloseModal(){
    this.directionList.onCloseModal();
  }

}
