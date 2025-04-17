import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILogin } from "../Logininterface";

interface Loginpayload{
    username: string;
    password: string
}

@Injectable({
    providedIn: 'root'
})
export class Authsevice{
    private apiUrl = 'https://dummyjson.com/auth/login';

    constructor(private http: HttpClient){}

    login(credentials:Loginpayload){
        return this.http.post<ILogin>(this.apiUrl,credentials)
    }
}