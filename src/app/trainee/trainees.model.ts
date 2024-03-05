export interface ITrainees {
    id: number;
    name: string;
    age: number;
    favouriteCourse: string;
}

export interface ITraineesExt extends ITrainees{
    state?: string;
    CGPA?: number;
    favouriteQuote?: string;
}

export class Trainees {
   id: number;
   name: string;
   age: number;
   email?: string;
   favouriteCourse: string;
   state?: string;
   CGPA?: number;
   favouriteQuote?: string;
  constructor(id: number, name: string, age: number, email: string, favouriteCourse: string, state?: string, CGPA?: number, favouriteQuote?: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.favouriteCourse = favouriteCourse;
    this.state = state;
    this.CGPA = CGPA;
    this.favouriteQuote = favouriteQuote;
  }
}