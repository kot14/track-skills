import { Component, OnInit } from '@angular/core';
import { ModalService } from './service/modal.service';
import { PaginationService } from './service/pagination.service';
import { UsersListService } from './service/users-list.service';
import { FormGroup, FormControl } from '@angular/forms';
import { parse } from 'querystring';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  public searchText: string;
  public isTrue = false;
  public dataUser;
  public addUsersIsTrue = false;
  public edditUserIsTrue = false;
  pager: any = {};
  pagedItems: any[];
  private userList: any[];
  public id;
  public currentPage: number;
  public selection = 10;

  formUserGroup: FormGroup;


  constructor(
    private modalService: ModalService,
    private paginationService: PaginationService,
    private userListService: UsersListService) {

  }

  ngOnInit() {
    this.formUserGroup = new FormGroup({
      'name': new FormControl(),
      'email': new FormControl(),
      'role': new FormControl(),
    });
    this.modalService.checkedIsClose$.subscribe(data => {
      if (data) {
        this.edditUserIsTrue = false;
        this.isTrue = false;
        this.addUsersIsTrue = false;
      }
    });
    this.getUserDataFromDatabase();
    this.setPage(1);
  }

  searchLine(event: any) {
    // console.log(event);
    this.pagedItems = this.userList.filter(data => {
       console.log(data);
      const valueName = data.value.name;
      const parseValueName = valueName;
      const eventName = event.target.value;
      const parseValueEvent = eventName;
      let currentValueName = [];
      let currentEventName = [];
      for (const i of parseValueName) {
        //console.log(i);
        // currentValueName.push(i);
        //currentValueName = i;
      }

      for (const i of parseValueEvent) {
        console.log(i);
         //currentEventName.push(i);
        //currentEventName = i;
      }
      //console.log(currentValueName);
      //console.log(currentEventName);
      // console.log(parseValueName);
      // console.log(parseValueEvent);
      if (currentValueName.includes(currentEventName)) {
        return data;
      }
    });
  }


  viewModal(user: any) {
    this.dataUser = user;
    this.isTrue = true;
  }

  addModal() {
    this.addUsersIsTrue = true;
  }

  editModal(user: any) {
    this.edditUserIsTrue = true;
    this.dataUser = user;
    this.id = user.id[0];
  }

  deleteModal(data: any) {
    const id = data.id[0];
    this.userListService.deleteData(id);
    this.getUserDataFromDatabase();
    this.setPage(this.currentPage);
  }

  setPage(page: number) {
    setTimeout(() => {
      this.pager = this.paginationService.getPage(this.userList.length, page,this.selection);
      this.currentPage = page;
      console.log(this.currentPage);
      // get current page of items
      this.pagedItems = this.userList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }, 1000);
    // get pager object from service
  }
  onChange(event) {
    if (this.selection === event) return;
    this.selection = event;
    this.setPage(1);
    //console.log(this.selection);

  }

  getUserDataFromDatabase() {
    this.userListService.getData();
    this.userListService.getData$.subscribe(getData => {
      // console.log(this.userList);
      this.userList = getData;
    });
  }

  onEdit() {
    const id = this.id;
    const name = this.formUserGroup.value.name;
    const email = this.formUserGroup.value.email;
    const role = this.formUserGroup.value.role;
    const postData = {
      name: name,
      email: email,
      role: role
    };
    this.userListService.putData(id, postData);
    this.modalService.addCheckedIsClose(true);
    this.getUserDataFromDatabase();
    this.setPage(this.currentPage);
  }

  onSubmit() {
    const id = parseInt(this.formUserGroup.value.id, 10);
    const name = this.formUserGroup.value.name;
    const email = this.formUserGroup.value.email;
    const role = this.formUserGroup.value.role;
    const postData = {
      name: name,
      email: email,
      role: role
    };

    this.userListService.postData(postData);
    this.modalService.addCheckedIsClose(true);
    this.userListService.getData();

    this.getUserDataFromDatabase();
    this.setPage(this.currentPage);
  }
}
