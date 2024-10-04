import { ApiClient } from "../../ApiClient";
import { User } from "../../types/user";
import { GetAllResponse } from "./response";

export class UserService {
    private client: ApiClient = new ApiClient();

    // GET
    async getAll(params?: Record<string, string>): Promise<User[]> {
        try {
            const response = await this.client.get<GetAllResponse>('users', params);

            const users: User[] = response.users;
            return users;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}
