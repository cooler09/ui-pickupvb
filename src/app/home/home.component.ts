import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileForm:FormGroup;
  positions = [
    {value: 'A', name: 'Any'},
    {value: 'L', name: 'Libero'},
    {value: 'S', name: 'Setter'},
    {value: 'M', name: 'Middle Blocker'},
    {value: 'O', name: 'Outside Hitter'},
    {value: 'R', name: 'Right Side'},
    {value: 'D', name: 'Defensive Specialist'},
];
templates = [
  {value: '1', name: '5-1 Rotation'},
  {value: '2', name: '5-1 Rotation Typewrite'},
  {value: '3', name: '5-1 Rotation No Libero'},
  {value: '4', name: '4-2 Rotation'},
  {value: '5', name: '4-2 Rotation Typewrite'},
  {value: '6', name: '4-2 Rotation No Libero'},
];
  times: any = [];
  get IsMaxPlayers() {
    return this.profileForm.get('isMaxPlayers')?.value;
  }
  get Players():FormArray {
    return this.profileForm.get('players') as FormArray;
  }
  constructor(private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      startTimeAMPM: ['PM', Validators.required],
      endTime: ['', Validators.required],
      endTimeAMPM: ['PM', Validators.required],
      eventName: ['', Validators.required],
      location: ['', Validators.required],
      isMaxPlayers: [true],
      totalPlayers:[12,Validators.required],
      players: this.fb.array([])
    });
    this.updatePlayersArray(this.profileForm.get('totalPlayers')?.value);
    for (let i = 1; i <= 12; i++) {
      for(let x = 0; x <= 45; x += 15){
        let time = `${i}:${x === 0?'00': x}`;
        this.times.push({value: time, name: time});
      }
    }
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
    this.updatePlayersArray(this.profileForm.get('totalPlayers')?.value);
  }
  templateChange(value: number){
    this.Players.clear();
    switch(+value){
      case 1:
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['R', Validators.required]}));
        this.Players.push(this.fb.group({position: ['R', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.profileForm.get('totalPlayers')?.setValue(14);
        break;
      case 2:
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['R', Validators.required]}));
        this.Players.push(this.fb.group({position: ['R', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.profileForm.get('totalPlayers')?.setValue(12);
        break;
      case 3:
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['R', Validators.required]}));
        this.Players.push(this.fb.group({position: ['R', Validators.required]}));
        this.profileForm.get('totalPlayers')?.setValue(12);
        break;
      case 4:
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.profileForm.get('totalPlayers')?.setValue(14);
        break;
      case 5:
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.Players.push(this.fb.group({position: ['L', Validators.required]}));
        this.profileForm.get('totalPlayers')?.setValue(12);
        break;
      case 6:
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['S', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['M', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.Players.push(this.fb.group({position: ['O', Validators.required]}));
        this.profileForm.get('totalPlayers')?.setValue(12);
        break
    }
    
    this.profileForm.get('players')?.updateValueAndValidity();
  }
  maxPlayerChange(){
    if(this.profileForm.get('isMaxPlayers')?.value){
      this.profileForm.get('totalPlayers')?.addValidators(Validators.required)
    }else{
      this.profileForm.get('totalPlayers')?.clearValidators()
    }
    this.profileForm.get('totalPlayers')?.updateValueAndValidity();
  }
  private updatePlayersArray(totalPlayers: number){
    this.Players.clear();
    for (let i = 0; i < totalPlayers; i++) {
      this.Players.push(this.fb.group({position: ['A', Validators.required]}));
    }
  }
}
