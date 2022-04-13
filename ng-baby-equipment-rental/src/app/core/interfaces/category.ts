import {IMain} from './main';

export interface ICategory<T=string> extends IMain {
    id: string;
    name: string;
    products: T[];
    image: {
        alt: string,
        link: string,
        title: string
    }
    parent_category_id: string;
}