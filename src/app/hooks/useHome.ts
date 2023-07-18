import { useCallback, useEffect, useState } from 'react'
import { SearchService } from '@/services'
import { AxiosError } from 'axios';

const useHome = () => {
    const service: SearchService = SearchService.getService();
    const [isDataEmpty, setDataEmpty] = useState(false);
    const [data, setData] = useState([])
    const [msj,setMsj] = useState('');
    
        useEffect(() => {
            searchCar();
        }, [])

    const searchCar = useCallback(async () => {
        try {
            const rs = await service.search(new URLSearchParams([["model", ""]]));
            const { data } = rs;
            const empty: boolean = Array.isArray(data) || data.length < 1 || !data;
            setDataEmpty(empty);
            setData(data);
        } catch (error) {
            const err = error as AxiosError;
            const {message} = err;
            setMsj(message);
        }
    }, [])

    return { isDataEmpty, data }
}
export { useHome }