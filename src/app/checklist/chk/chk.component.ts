import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../checklist.service';
import { Subscription } from 'rxjs/Subscription';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-chk',
  templateUrl: './chk.component.html',
  styleUrls: ['./chk.component.css']
})
export class ChkComponent implements OnInit {

  constructor(private chklist : ChecklistService) { }
 dispchecklist=[];
private subscription: Subscription;


  ngOnInit() {
    

    this.chklist.getChecklist().subscribe(
      (taskdata: any[]) => this.dispchecklist=taskdata,
        (error) => console.log(error)
        
    )
  ;

  this.chklist.taskadded
  .subscribe(
    (checklist : any [] ) => {
      this.dispchecklist = checklist;
      console.log('Just addedddddddd'+this.dispchecklist );
      
    }
   
  );
 
}
deleteRecord(i : number){
this.chklist.deleteRecord(i).subscribe(
  (response: any) => console.log(response),
    (error) => console.log(error)

    
)
}

updateRecord(i){
  this.chklist.updateRecord(i);
}

    
  }  
   

