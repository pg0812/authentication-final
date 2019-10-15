import { Component, OnInit } from '@angular/core';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private chklist : ChecklistService) { }



  ngOnInit() {
    
   
  
    

  }

}
