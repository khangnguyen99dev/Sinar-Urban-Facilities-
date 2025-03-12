import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    url = environment.api_url;

    constructor() { }

    async get(url: string, params?: string, token: boolean = false): Promise<any[]> {
        const defaultParams = 'populate=*&sort=createdAt:desc&pagination[limit]=5';
        try {
            const res = await axios.get(`${this.url}/${url}${params ? `?${params}` : `?${defaultParams}`}`, {
                headers: {
                    'Authorization': token ? `Bearer ${environment.api_token_identifier}` : '',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            return res.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
