import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../../model/user.model'
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Store } from '@ngxs/store'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  user : User
  editForm : FormGroup


  constructor(
    private store : Store,
    private formBuilder : FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id : [],
      email : ['', Validators.required],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required]
    })

    this.route.params.forEach((params : Params) => {
        let id = params['id']
        if(!id) {
          this.router.navigate(['list-user'])
          return
        }

        this.store.select(state =>
          state.userState.users).subscribe(users =>{
            this.user = users.find(user => user.id == id)
            this.editForm.setValue(this.user)
          })
      })
  
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user'])
      })
  }


}
