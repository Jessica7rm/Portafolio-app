import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup | undefined;
  constructor(private formBuilder:UntypedFormBuilder) { 
     this.form=this.formBuilder.group(
     { 
  usserName:['',[Validators.required,Validators.toString]],
  password:['',[Validators.required, Validators.minLength(8)]],
  deviceInfo:this.formBuilder.group({
  usserName:['',[Validators.required,Validators.toString]],
     deviceId:["17867868768"],
     deviceType:["DEVICE_TYPE_ANDROID"],
     notificationToken: ["67657575eececc34"]

     })
    }
  )
}

ngOnInit(): void {
}

get usserName()
{
  return this.form.get('usserName');
}

get Password()
{
  return this.form.get('password');
}


}


