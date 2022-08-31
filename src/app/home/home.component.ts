import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  createEventInfoForm: FormGroup;
  createEventForm:FormGroup;
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
    {value: '0', name: 'Any Positions'},
    {value: '1', name: 'Indoor: 5-1'},
    {value: '2', name: 'Indoor: 5-1 Typewrite'},
    {value: '3', name: 'Indoor: 5-1 No Libero'},
    {value: '4', name: 'Indoor: 4-2'},
    {value: '5', name: 'Indoor: 4-2 Typewrite'},
    {value: '6', name: 'Indoor: 4-2 No Libero'},
    {value: '7', name: 'Grass/Sand: Doubles'},
    {value: '8', name: 'Grass/Sand: Triples'},
    {value: '9', name: 'Grass/Sand: Quads'},
    {value: '10', name: 'Grass/Sand: Sixes'},
  ];
  times: any = [];
  showTotalPlayers = true;
  get IsMaxPlayers() {
    return this.createEventForm.get('isMaxPlayers')?.value;
  }
  get Players():FormArray {
    return this.createEventForm.get('players') as FormArray;
  }
  get Teams():FormArray {
    return this.createEventForm.get('teams') as FormArray;
  }
  get TotalPlayer(): FormControl{
    return this.createEventForm.get('totalPlayers') as FormControl;
  }
  constructor(private fb: FormBuilder) { 
    this.createEventInfoForm = this.fb.group({
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      startTimeAMPM: ['PM', Validators.required],
      endTime: ['', Validators.required],
      endTimeAMPM: ['PM', Validators.required],
      eventName: ['', Validators.required],
      location: ['', Validators.required],
    });
    this.createEventForm = this.fb.group({
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      startTimeAMPM: ['PM', Validators.required],
      endTime: ['', Validators.required],
      endTimeAMPM: ['PM', Validators.required],
      eventName: ['', Validators.required],
      location: ['', Validators.required],
      totalPlayers:[6, Validators.required],
      selectedTemplate: ['0',Validators.required],
      players: this.fb.array([]),
      teams: this.fb.array([])
    });
    for (let i = 1; i <= 12; i++) {
      for(let x = 0; x <= 45; x += 15){
        let time = `${i}:${x === 0?'00': x}`;
        this.times.push({value: time, name: time});
      }
    }
  }
  onSubmit() {
    console.log(this.createEventForm);
  }
  ngOnInit(): void {}
  addTeam(){
    let template = this.createEventForm.get('selectedTemplate')?.value;
    let players:FormGroup[] = [];
    switch(+template){
      case 0:
        let totalPlayer = this.createEventForm.get('totalPlayers')?.value
        for(let i = 0; i < totalPlayer; i++){
          players.push(this.fb.group({position: ['A', Validators.required]}));
        }
        break;
    }
    console.log(players);
    this.Teams.push(this.fb.group({
      players: this.fb.array(players)
    }));
  }
  templateChange(value:number){
    this.createEventForm.get('totalPlayers')?.clearValidators();
    if(value == 0){
      this.createEventForm.get('totalPlayers')?.addValidators([Validators.required]);
      this.showTotalPlayers = true;
    }else{
      this.showTotalPlayers = false;
    }
    this.createEventForm.get('totalPlayers')?.updateValueAndValidity();
  }
  addPlayers(value: number){
    this.Players.clear();
    switch(+value){
      case 0:
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        this.Players.push(this.fb.group({position: ['A', Validators.required]}));
        break;
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
        this.createEventForm.get('totalPlayers')?.setValue(14);
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
        this.createEventForm.get('totalPlayers')?.setValue(12);
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
        this.createEventForm.get('totalPlayers')?.setValue(12);
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
        this.createEventForm.get('totalPlayers')?.setValue(14);
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
        this.createEventForm.get('totalPlayers')?.setValue(12);
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
        this.createEventForm.get('totalPlayers')?.setValue(12);
        break
    }
    
    this.createEventForm.get('players')?.updateValueAndValidity();
  }
  // maxPlayerChange(){
  //   if(this.createEventForm.get('isMaxPlayers')?.value){
  //     this.createEventForm.get('totalPlayers')?.addValidators(Validators.required)
  //   }else{
  //     this.createEventForm.get('totalPlayers')?.clearValidators()
  //   }
  //   this.createEventForm.get('totalPlayers')?.updateValueAndValidity();
  // }
  private updatePlayersArray(totalPlayers: number){
    this.Players.clear();
    for (let i = 0; i < totalPlayers; i++) {
      this.Players.push(this.fb.group({position: ['A', Validators.required]}));
    }
  }
}
