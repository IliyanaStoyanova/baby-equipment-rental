import { ICategory } from './category';
import {IMain} from './main';

export interface IProduct extends IMain {
    id: string;
    name: string;
    categoryId: ICategory;
    description: string;
    features: [
        {
            descript: string
        }
    ];
    technical: {
        weight: number;
        weight_unit: string;
        dimensions: {
            length: number;
            weight: number;
            height: number;
        };
        dimensions_unit: string;
        folded: {
            length: number;
            weight: number;
            height: number;
        };
        folded_unit: string;
    };
    price: number;
    currency: string;
    accessories: [
        {
            name: string;
            price: number;
        }
    ];
    rental_period: [
        {
            start_period: string;
            end_period: string;
        }
    ];
    deposit: number;
    images: [
        {
            alt: string;
            link: string;
            title: string;
        }
    ];
    instructions: string;
}