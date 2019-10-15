import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  taskadded = new EventEmitter<any [] >();
  taskupdated = new EventEmitter<number >();
 i:number=0;
  constructor(private http : Http) { }
  checklist=[{
    id:1,
    taskname : 'Client Meeting',
    taskDescription : 'Audit meeting for this quarter',
    Schedule : new Date('2019-11-24T00:00:00')

  },{
    id:2,
  taskname : 'Site visit',
  taskDescription : 'site Inspetion for audit purpose',
  Schedule : new Date('2019-11-24T00:00:00')
}
];
  storetask(checklist : any []){

    this.taskadded.emit(checklist);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'AIzaSyAqihwaxzs1yFfEjDWQ2lC_LFz0kqo5NJQ');
    
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
   
    return this.http.put('https://pointy-haired-boss-7aea2.firebaseio.com/data.json',
    checklist,
      {headers: headers});

     

  }


  getChecklist() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'AIzaSyAqihwaxzs1yFfEjDWQ2lC_LFz0kqo5NJQ');
    return this.http.get('https://pointy-haired-boss-7aea2.firebaseio.com/data.json',
    {headers: headers})
      .map(
        (response: Response) => {
          const data = response.json();
        console.log(data);
        
          return data;

        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  deleteRecord(i : number){
    this.checklist.splice(i, 1);
   console.log('in delete func');
   
   return this.http.delete('https://pointy-haired-boss-7aea2.firebaseio.com/data.json')
   .map(
     (response: Response) => {
       const data = response.json();
     console.log(data);
     
       return data;

     }
   )
   .catch(
     (error: Response) => {
       return Observable.throw('Something went wrong');
     }
   );

  }
  updateRecord(i){
    this.taskupdated.emit(i);
    
  }


}
