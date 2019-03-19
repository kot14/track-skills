export interface directionDatabaseList {
    id: number;
    name: string;
    startDate: number;
    updateDate: number;
    photo: string;
}

export class Direction {
   constructor(public id: number,
               public name: string,
               public startDate: number,
               public updateDate: number,
               public photo: string){}
}