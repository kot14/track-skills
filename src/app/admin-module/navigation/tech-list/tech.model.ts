export interface TechDatabaseList {
     id: number;
     name: string;
     nameDirection: string;
     startDate: number;
     updateDate: number;
     photo: string;
}

export class Tech {
    constructor(public id: number,
                public name: string,
                public nameDirection: string,
                public startDate: number,
                public updateDate: number,
                public photo: string){}
}