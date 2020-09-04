import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



@Injectable()
export class CharacterService {

    constructor(private httpClient:HttpClient){

    }
    
    getavengers(): Observable<any[]>{
        return this.httpClient.get<any[]>('http://localhost:3000/avengers_list/');
        
    }

}