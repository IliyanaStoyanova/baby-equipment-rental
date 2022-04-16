import {IMain} from './main';
import { IProduct } from './product';
import { IUser } from './user';

export interface ICart extends IMain {
    userId: IUser;
    products: [
        {
            productId: IProduct, 
            rental_period: {
                start_period: string,
                end_period: string
            }
        }
       
    ]
    created_at: string;
    updated_at: string;
}