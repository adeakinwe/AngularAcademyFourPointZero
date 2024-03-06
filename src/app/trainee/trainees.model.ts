export class Trainees {
    id: number;
    name: string;
    age: number;
    email: string;
    favouriteCourse: string;
    isMarried?: boolean;

    constructor(id: number, name: string, age: number, email: string, favouriteCourse: string, isMarried: boolean){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.favouriteCourse = favouriteCourse;
    }
}
