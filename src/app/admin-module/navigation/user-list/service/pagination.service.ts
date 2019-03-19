import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public startPage: number;
  public endPage: number;
 
  constructor() { }

  getPage(totalItems: number, currentPage: number = 1, pageSize: number) {

    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    if (totalPages <= 5) {
      this.startPage = 1;
      this.endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        this.startPage = 1;
        this.endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        this.startPage = totalPages - 4;
        this.endPage = totalPages;
      } else {
        this.startPage = currentPage - 4;
        this.endPage = currentPage + 3;
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: this.startPage,
      endPage: this.endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
      
    };
    
  }
}
