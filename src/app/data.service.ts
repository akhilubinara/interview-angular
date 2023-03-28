import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http'

const options = {
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }

  submit(servicetypename:any,description:any,displayorder:any,pictureid:any,active:any,worktype:any,numberofcustomerquestions:any,isadminapprovalneeded:any,
    suggestedbiddurationindays:any,isattachmentallowed:any,currencycode:any,amount:any,credits:any){
    var data ={
      servicetypename,
      description,
      displayorder,
      pictureid,
      active,
      worktype,
      numberofcustomerquestions,
      isadminapprovalneeded,
      suggestedbiddurationindays,
      isattachmentallowed,
      currencycode,
      amount,
      credits
    }
    return this.http.post('http://94.237.73.65/submit',data);
  }

  view(){
    return this.http.get('http://94.237.73.65/view');
  }
}
