import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResponseModel } from '../Models/responseModel';
import { UserService } from '../services/user.service';
import { ResponseCode } from "../enums/responseCode";
import { Role } from '../Models/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public role:Role[]=[];
  public registerForm=this.formBuilder.group({
    fullName:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder,private userServie:UserService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }
  onSubmit()
  {

    console.log("on submit",this.role)
    let fullName=this.registerForm.controls["fullName"].value;
    let email=this.registerForm.controls["email"].value;
    let password=this.registerForm.controls["password"].value;
    this.userServie.register(fullName,email,password,this.role.filter(x=>x.isSelected)[0].role).subscribe((data:ResponseModel)=>{
       if(data.responseCode==ResponseCode.OK)
       {
        this.registerForm.controls["fullName"].setValue("");
        this.registerForm.controls["email"].setValue("");
        this.registerForm.controls["password"].setValue("");
        this.role.forEach(x=>x.isSelected=false);
       }
     console.log("response",data);
    },error=>{
      console.log("error",error)
    })
  }

  getAllRoles()
{
  this.userServie.getAllRole().subscribe(roles=>{
   this.role=roles;
  });
}


onRoleChange(role:string)
{
this.role.forEach(x=>{
  if(x.role==role)
  {
    x.isSelected=true;
  }
  else{
    x.isSelected=false;
  }

})
}



}
