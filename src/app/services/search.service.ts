import {SearchController} from '@/controllers'
import { AxiosResponse } from 'axios';
import {Http} from './http/http'

class SearchService implements  SearchController{
    private static service: SearchService;
    private http: Http = new Http();
    

    search = async (params: URLSearchParams): Promise<AxiosResponse<any, any>> => {
        return await this.http.get<any>(
            `${process.env.REACT_CARS_API_NINJAS}`,
            this.http.header_get_params(params)
          );
    }

    public static getService():SearchService{
        if(this.service === undefined) this.service = new SearchService();
        return this.service;
    }

    private constructor(){}
    
}

export {SearchService}