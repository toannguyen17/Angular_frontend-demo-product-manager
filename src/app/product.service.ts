import {Injectable}  from '@angular/core';
import {IProduct}    from './iproduct';
import {HttpClient}  from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable}  from 'rxjs';

const API_URL: string = environment.API_URL;
const LIST: string    = environment.LIST;
const CREATE: string  = environment.CREATE;
const UPDATE: string  = environment.UPDATE;
const DELETE: string  = environment.DELETE;

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    save(product: IProduct): Observable<any> {
        if (!!product.id) {
            return this.http.put(API_URL + UPDATE, product);
        }
        return this.http.post(API_URL + CREATE, product);
    }

    findById(id: number): Observable<any> {
        return this.http.get(API_URL + id);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(API_URL + DELETE + '/' + id);
    }

    getAll(): Observable<any> {
        return this.http.get(API_URL + LIST);
    }
}
