import { Component, OnInit } from '@angular/core';
import { Tech } from './tech.model';
import { Subscription, Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { TechListServiceService } from '../../services/tech-list-service.service';
import { ModalService } from '../../modal/modal.service';
import { PaginationService } from '../user-list/service/pagination.service';



@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {
  formTechGroup: FormGroup;
  public id;
  public dataTech;
  public techs: Tech[];
  pager: any = {};
  pagedItems: any[];
  public viewModal = false;
  public editModal = false;
  public addModal = false;
  public direction;
  public currentPage: number;
  public selection = 5;

constructor(private modalService: ModalService, 
            private techListService: TechListServiceService,
            private paginationService: PaginationService
            //private directionService: DirectionService,
            //private directionListService: DirectionListComponent
            ) { }

ngOnInit() {
  // this.subscription = this.techsChanged
  //   .subscribe(
  //     (techs:Tech[]) => {
  //       this.techs = techs;         
  //     }
  //   );
  this.formTechGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl(),
    'nameDirection': new FormControl(),
    'startDate': new FormControl(),
    'updateDate': new FormControl(),
    'photo': new FormControl()
  });
  this.getDataFromBase();
  this.setPage(1);

}
  getDataFromBase(){
    this.techListService.getData();
    // this.directionService.getData();
    // this.directionService.getData$.subscribe(directionsData =>{
    //   this.directions = directionsData; 
    //   console.log(this.direction)
    // })
    this.techListService.getData$.subscribe(data => {
      this.techs = data;
      // console.log(this.techs)
    })
  }

  setPage(page: number) {
    setTimeout(() => {
      this.pager = this.paginationService.getPage(this.techs.length, page,this.selection);
      this.currentPage = page;
      console.log(this.currentPage);
      // get current page of items
      this.pagedItems = this.techs.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }, 1000);
    // get pager object from service

  }

  onChange(event) {
    if (this.selection === event) return;
    this.selection = event;
    this.setPage(this.selection);
    console.log(this.selection);

  }


  onView(tech: any) {
    console.log(tech);
  }
  
  onDeleteTech(data: any) {
    const id = data.id[0];
    this.techListService.deleteData(id);
    this.getDataFromBase();
    this.setPage(this.currentPage);
  }

  onOpenModal(id: string){
    this.modalService.open(id);
  }
  onCloseModal(id: string){
    this.modalService.close(id);
  }
  onViewItem(data: any) {
    this.viewModal = true;
    this.modalService.addViewModal(data);
    
  }
  onEditItem(data: any){
    this.editModal = true;
    this.modalService.addViewModal(data);
    this.setPage(this.currentPage);
    
  }
  onAddItem(data: any){
    this.addModal = true;
    this.modalService.addViewModal(data);
    this.setPage(this.currentPage);
  }

  OnCloseView(){
    this.viewModal = false;
    this.editModal = false;
    this.addModal = false;
  }
}
