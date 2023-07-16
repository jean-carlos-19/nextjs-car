import {SearchController} from '@/controllers'
import { AxiosResponse } from 'axios';

class SearchService implements  SearchController{

    search = (search: string): Promise<AxiosResponse<any, any>> => {
        throw new Error('Method not implemented.');
    }
    
}

export {SearchService}