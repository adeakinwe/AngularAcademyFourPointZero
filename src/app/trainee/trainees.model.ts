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
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public favouriteCourse: string,
    public state?: string,
    public CGPA?: number,
    public favouriteQuote?: string
  ) {}
}