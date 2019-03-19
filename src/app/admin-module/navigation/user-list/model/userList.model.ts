export interface UserDatabaseList {
    // id: number;
    name: string;
    email: string;
    role: string;
}

export class UserClassDatabaseList {
    // public  id: number;
    public  name: string;
    public  email: string;
    public  role: string;

        constructor(data: UserDatabaseList) {
            // this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.role = data.role;
    }
}
