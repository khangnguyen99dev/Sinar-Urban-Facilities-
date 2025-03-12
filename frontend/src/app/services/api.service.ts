import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    url = environment.api_url;

    constructor() { }

    async get(url: string, params?: string): Promise<any[]> {
        const defaultParams = 'populate=*&sort=createdAt:desc&pagination[limit]=5';
        const res = await axios.get(`${this.url}/${url}${params ? `?${params}` : `?${defaultParams}`}`, {
            headers: {
                'Authorization': `Bearer ${environment.api_token_identifier}`
            }
        });
        return res.data;
    }
}
