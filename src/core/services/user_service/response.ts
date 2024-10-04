import { User } from "../../types/user";

export interface GetAllResponse {
    users: User[],
    total: number,
    skip: number,
    limit: number
}