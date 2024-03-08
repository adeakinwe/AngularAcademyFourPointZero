export interface ITrainees {
    id: number;
    name: string;
    age: number;
    email: string;
    favouriteCourse: string;
    isMarried?: boolean;
}

export interface ITraineesExt extends ITrainees{
    state?: string;
    CGPA?: number;
    favouriteQuote?: string;
}
