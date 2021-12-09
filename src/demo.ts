export interface ICar{
    name: string;
    year: number;
    color: string;

}

const car1: ICar = {    
    name: 'Ford',
    year: 2020,
    color: 'red'
}

const car2: ICar = {
    name: 'Audi',
    year: 2019,
    color: 'blue'
}

export const cars = [car1, car2];