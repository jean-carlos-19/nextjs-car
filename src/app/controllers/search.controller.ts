import { AxiosResponse } from "axios"

interface SearchController {
    search(search:string):Promise<AxiosResponse<any>>
}
export type { SearchController }