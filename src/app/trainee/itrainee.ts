export interface ITrainees {
    id: number;
    name: string;
    age: number;
    email: string;
    favouriteCourse: string;
    isMarried?: boolean;
    image?: string;
}

export interface ITraineesExt extends ITrainees{
    state?: string;
    CGPA?: number;
    favouriteQuote?: string;
}
