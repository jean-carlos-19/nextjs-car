import { AxiosResponse } from "axios"

interface SearchController {
    search(params:URLSearchParams):Promise<AxiosResponse<any>>
}
export type { SearchController }