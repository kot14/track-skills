import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  public isTrue = false;
  public userList;
  constructor(private modalService: ModalService) { }

  ngOnInit() {

    this.modalService.currentUser$.subscribe(data => {
      if (data) {
        this.userList = data;
      }
    });
  }

  closeModal() {
    this.modalService.addCheckedIsClose(true);
  }



}
