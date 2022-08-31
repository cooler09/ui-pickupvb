import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileForm:FormGroup;
  get IsMaxPlayers() {
    return this.profileForm.get('isMaxPlayers')?.value;
  }
  get Players() {
    return this.profileForm.get('players') as FormArray;
  }
  constructor(private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      startDate: ['', Validators.required],
      eventName: ['', Validators.required],
      location: ['', Validators.required],
      isMaxPlayers: [true],
      maxPlayers:[12,Validators.required],
      players: this.fb.array([])
    });
    this.updatePlayersArray(this.profileForm.get('maxPlayers')?.value);
  }
  onSubmit() {
    console.log(this.profileForm);
  }
  ngOnInit(): void {
  }
  
  addAlias() {
    this.Players.push(this.fb.control(''));
  }
  maxPlayerValueChange(){
    this.updatePlayersArray(this.profileForm.get('maxPlayers')?.value);
  }
  maxPlayerChange(){
    if(this.profileForm.get('isMaxPlayers')?.value){
      this.profileForm.get('maxPlayers')?.addValidators(Validators.required)
    }else{
      this.profileForm.get('maxPlayers')?.clearValidators()
    }
    this.profileForm.get('maxPlayers')?.updateValueAndValidity();
  }
  private updatePlayersArray(maxPlayers: number){
    this.Players.clear()
    for (let i = 0; i < maxPlayers; i++) {
      this.Players.push(this.fb.control(''));
    }
  }
}
