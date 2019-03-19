import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Tech } from '../tech-list/tech.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Direction } from './model/direction.model';
import { DirectionService } from './services/direction.service';
import { ModalService } from '../../modal/modal.service';
import { PaginationService } from '../user-list/service/pagination.service';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss']
})
export class DirectionListComponent implements OnInit {
  
  constructor(private directionService: DirectionService,
              private modalService: ModalService,
              private paginationService: PaginationService) { }
  subscription: Subscription
  formTechGroup: FormGroup;
  public id;
  public dataTech;
  public directions: Direction[];
  public viewModal = false;
  public editModal = false;
  public addModal = false;
  pager: any = {};
  pagedItems: any[];
  public currentPage: number;
  public selection = 5;

ngOnInit() {
  this.formTechGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl(),
    'startDate': new FormControl(),
    'updateDate': new FormControl(),
    'photo': new FormControl()
  });
  this.getDataFromBase();
  this.setPage(1);

}
getDataFromBase(){
  this.directionService.getData();
  this.directionService.getData$.subscribe(data => {
    this.directions = data;
    // console.log(this.directions)
  })
 }
 setPage(page: number) {
  setTimeout(() => {
    this.pager = this.paginationService.getPage(this.directions.length, page,this.selection);
    this.currentPage = page;
    //console.log(this.currentPage);
    // get current page of items
    this.pagedItems = this.directions.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }, 1000);
  // get pager object from service

}
 onView(direction: any) {
  console.log(direction);
}
onChange(event) {
  if (this.selection === event) return;
  this.selection = event;
  this.setPage(1);
  //console.log(this.selection);

}
  ondeleteDirection(data: any){
    const id = data.id[0];
    this.directionService.deleteData(id);
    this.getDataFromBase();
    this.setPage(this.currentPage);
  }
  onViewItem(data: any) {
    this.viewModal = true;
    this.modalService.addViewModal(data);
}
  onAddItem(data: any){
    this.addModal = true;
    this.modalService.addViewModal(data);
  }
  onEditItem(data:any){
    this.editModal = true;
    this.modalService.addViewModal(data);
  }
  onCloseModal(){
   this.viewModal = false;
   this.editModal = false;
   this.addModal = false;
  }
  // onChange(event) {
  //   if (this.selection === event) return;
  //   this.selection = event;
  // }
}

