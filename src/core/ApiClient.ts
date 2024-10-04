export class ApiClient {
    private baseUrl: string = 'https://dummyjson.com';

    // GET
    async get<Response>(endpoint: string, params?: Record<string, string>): Promise<Response> {
        const url = this.constructUrl(endpoint, params);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: this.getHeaders(),
            });

            return this.handleResponse<Response>(response);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // POST
    async post<Response>(endpoint: string, body: Record<string, any>): Promise<Response> {
        const url = `${this.baseUrl}/${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(body),
            });

            return this.handleResponse<Response>(response);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // DELETE
    async delete<Response>(endpoint: string): Promise<Response> {
        const url = `${this.baseUrl}/${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: this.getHeaders(),
            });

            return this.handleResponse<Response>(response);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Header manager
    private getHeaders(): HeadersInit {
        return {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
    }

    // Build url
    private constructUrl(endpoint: string, params?: Record<string, string>): string {
        const url = new URL(`${this.baseUrl}/${endpoint}`);

        if (params) {
            Object.keys(params).forEach(key => {
                url.searchParams.append(key, params[key]);
            });
        }

        return url.toString();
    }

    // Manage responses
    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
        }

        return response.json();
    }

    // Manage error
    private handleError(error: unknown): Error {
        if (error instanceof Error) {
            return error;
        }

        return new Error('An unknown error occurred.');
    }
}
