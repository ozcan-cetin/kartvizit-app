import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {
cardForm!:FormGroup;

  constructor(
    private dialogRef:MatDialogRef<CardModalComponent>,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.cardForm=this.fb.group({
      name:['', Validators.required, Validators.maxLength(50)],
      title:'',
      phone:['', Validators.required, Validators.maxLength(20)],
      email:['', Validators.email],
      address:'',
    })
  }

  addCard():void{
    console.log(this.cardForm.value)
  }

}
