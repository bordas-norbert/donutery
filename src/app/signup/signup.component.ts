import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    fields: string[] = ['', '', '', '']
    save(value: any, id: any) 
    {
      this.fields[id - 1] = value;
    }

    checkInputFields(){
      let ok = 1;
      for(let i=0; i < this.fields.length && ok == 1; i++)
        {
          this.fields[i] == '' ? ok=0 : ok=1;
        }
      
      if(ok == 0)
      {
        alert("Fill in all the fields")
      }
      else
      {
        if(this.fields[2] != this.fields[3])
        {
          alert("Passwords not matching")
        }
        else
        {
          alert("Registration successfully")
          location.reload()
        }
        
      }
    }
  }

