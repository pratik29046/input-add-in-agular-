import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NA';
  secretshow=false;

  username:string="";
  password:string="";
  log:any=[];
    
  ontoggledetails(){
     this.secretshow= ! this.secretshow;
  
     this.log.push(this.log);
     

  }
}
