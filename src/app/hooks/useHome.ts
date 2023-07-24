import { useCallback, useEffect, useState } from "react";
import { SearchService } from "@/services";
import { AxiosError } from "axios";

const useHome = () => {
  const service: SearchService = SearchService.getService();
  const [isDataEmpty, setDataEmpty] = useState(true);
  const [data, setData] = useState([]);
  const [msj, setMsj] = useState("");

  useEffect(() => {
    searchCar("q5","audi");
  }, []);

  const searchCar = useCallback(async (model:string,make:string) => {
    try {
      const rs = await service.search(
        new URLSearchParams([["model", model],["make",make]]),
      );
      const { data } = rs;
      const empty: boolean = Array.isArray(data) && data.length < 1;
      setDataEmpty(empty);
      setData(data);
      console.log(empty)
    } catch (error) {
      const err = error as AxiosError;
      const { message } = err;
      setMsj(message);
    }
  }, []);

  return { isDataEmpty, data, searchCar };
};
export { useHome };
