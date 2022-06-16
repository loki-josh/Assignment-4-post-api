import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive_forms';
  reactiveForm:any
  constructor(private service:SharedService){
    
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      'firstName': new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[A-Za-z]+")]),
      'lastName': new FormControl("", [Validators.required, Validators.maxLength(15),Validators.pattern("[A-Za-z]+")]),
      'username': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
      'gender': new FormControl("", [Validators.required]),


    });
    // this.reciaveData()
    
  }
  sendData(){
    if (this.reactiveForm.valid) {
      this.service.postUser(this.reactiveForm.value).subscribe((request) => {
        window.alert("posted user successfully")

      });
      error : () => {
        window.alert("error while adding the user")
      }


    }
  }
  reciaveData(){
      this.service.getUser().subscribe((res)=>{
        console.log(res)
      })
  }
  Submitform(){
      console.log(this.reactiveForm)
      this.sendData();
      this.reciaveData()
      
  }
  resetform(){
    this.reactiveForm.reset()
  }

}
