import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../checklist.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  taskadded = new Subject<any []>();
  constructor(private chk : ChecklistService) { }
  taskname : string ;
  taskdescription : string;
  taskdate : Date
  
  ngOnInit() {
    this.chk.storetask(this.chk.checklist)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
    );
    this.chk.taskupdated
    .subscribe(
      (i : number) => {
        this.taskname=this.chk.checklist[i].taskname;
        this.taskdescription=this.chk.checklist[i].taskDescription;
        this.taskdate=this.chk.checklist[i].Schedule;
        this.taskdate = new Date(this.taskdate);
      //  console.log('Just addedddddddd'+this.dispchecklist );
      const d = new Date(this.taskdate);
        
        
        
      }
     
    );
  }

  onSubmit( taskname :string,taskdescription : string ,taskdate : string){
    let i= this.chk.checklist.length+1;
  
    
    this.chk.checklist.push({
      id : i,
      taskname: taskname,
      taskDescription : taskdescription,
      Schedule: new Date(taskdate)
    });
    this.chk.storetask(this.chk.checklist)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
        
      );
   
      this.taskadded.next(this.chk.checklist.slice());

  }

}
