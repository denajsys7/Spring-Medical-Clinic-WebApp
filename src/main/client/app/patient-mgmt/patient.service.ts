import { Injectable } from '@angular/core';
// import * as _ from 'lodash';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PatientService {
  data: Array<Object>;
  private patients: Patient[] = [];
  // private sequencer: number = 1; // wykomentowałem, bo mamy id randomvalue w springu

  /*findAllPatients(): Patient[] {
    this.http.get('http://localhost:8080/patient/all')
      .map((res: Response) => res.json())
      .subscribe(
        data => this.patients = data,
        err => this.errorMsg(err),
        () => console.log('Patients fetch complete'),
      );
    return this.patients;
  }
  errorMsg(err: any) {
    console.error('Error: ' + err);
  }*/

  /* : Observable<Patient[]> {
     return this.http.get('http://localhost:8080/patient/all')
       .map(data => <Patient[]>data);
   }
   
    findAllPatients()
       .map((user: Array<any>) => {
         let result:Array<User> = [];
         if (user) {
           user.forEach((erg) => {
             result.push(new User(erg.nickname, erg.id, erg.name, erg.nachname, erg.pictURL, erg.city ));
           });
         }
         return result; // <<<=== missing return
       })
       .subscribe(user => this.user = user);
   }*/

  /*findAllPatients(): Observable<any> {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/patient/all', { headers: headers })
      .map((res: Response) => res.json());
    // let patients$ = this.http
    //  .get('http://localhost:8080/patient/all', {headers: this.getHeaders()})
  }*/

  findAllPatients(): Promise<Patient[]> {
    return this.http.get('http://localhost:8080/patient/all')
      .toPromise()
      .then(response => response.json().data as Patient[]);
      // .catch(error);
  }

 createPatient(): Observable<any> {
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return this.http.post('http://localhost:8080/patient/create', {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).map((res: Response) => res.json());
  }

  constructor(private http: Http) { }
}


export class Patient {
  private _id: number;
  private _name: string;
  private _surname: string;

  constructor(ids?: number, names?: string, surnames?: string) {
    this._id = ids;
    this._name = names;
    this._surname = surnames;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set surname(value: string) {
    this._surname = value;
  }
}