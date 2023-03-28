import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data:any=[];

  constructor(private fb:FormBuilder, private ds:DataService){}

  addform = this.fb.group({
    servicetypename:['',[Validators.required]],
    description:['',[Validators.required]],
    displayorder:['',[Validators.required]],
    pictureid:['',[Validators.required]],
    parentid:['',[Validators.required]],
    active:['',[Validators.required]],
    worktype:['',[Validators.required]],
    numberofcustomerquestions:['',[Validators.required]],
    isadminapprovalneeded:['',[Validators.required]],
    suggestedbiddurationindays:['',[Validators.required]],
    isattachmentallowed:['',[Validators.required]],
    currencycode:['',[Validators.required]],
    amount:['',[Validators.required]],
    credits:['',[Validators.required]]
  })

  submit(){
    if(this.addform.valid){
      var servicetypename = this.addform.value.servicetypename;
      var description = this.addform.value.description;
      var displayorder = this.addform.value.displayorder;
      var pictureid = this.addform.value.pictureid;
      var parentid = this.addform.value.parentid;
      var active = this.addform.value.active;
      var worktype = this.addform.value.worktype;
      var numberofcustomerquestions = this.addform.value.numberofcustomerquestions;
      var isadminapprovalneeded = this.addform.value.isadminapprovalneeded;
      var suggestedbiddurationindays = this.addform.value.suggestedbiddurationindays;
      var isattachmentallowed = this.addform.value.isattachmentallowed;
      var currencycode = this.addform.value.currencycode;
      var amount = this.addform.value.amount;
      var credits = this.addform.value.credits;
      this.ds.submit(servicetypename,description,displayorder,pictureid,active,worktype,numberofcustomerquestions,isadminapprovalneeded,suggestedbiddurationindays,isattachmentallowed,currencycode,amount,credits)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message);
        }
      })
    }
  }

  view(){
    this.ds.view().subscribe(
      (result:any)=>{
        this.data = result.data;
        console.log(result.data);
        
      }
    )
  }
}
