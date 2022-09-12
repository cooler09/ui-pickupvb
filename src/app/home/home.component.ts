import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  @ViewChild("placesRef") placesRef : GooglePlaceDirective | undefined;
  destroyed = new Subject<void>();
  createEventInfoForm: UntypedFormGroup;
  createEventForm:UntypedFormGroup;
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
  isSmallScreen = false;
  get IsMaxPlayers() {
    return this.createEventForm.get('isMaxPlayers')?.value;
  }
  Players(i:number):UntypedFormArray {
    return this.Teams.controls[i].get('players') as UntypedFormArray;
  }
  get Teams():UntypedFormArray {
    return this.createEventForm.get('teams') as UntypedFormArray;
  }
  get TotalPlayer(): UntypedFormControl{
    return this.createEventForm.get('totalPlayers') as UntypedFormControl;
  }
  constructor(private fb: UntypedFormBuilder,breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        this.isSmallScreen = result.breakpoints[Breakpoints.Small];
      });
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
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
  onSubmit() {
    console.log(this.createEventForm);
  }
  ngOnInit(): void {}
  addTeam(){
    let template = this.createEventForm.get('selectedTemplate')?.value;
    let players:UntypedFormGroup[] = [];
    switch(+template){
      case 0:
        let totalPlayer = this.createEventForm.get('totalPlayers')?.value
        for(let i = 0; i < totalPlayer; i++){
          players.push(this.fb.group({position: ['A', Validators.required]}));
        }
        break;
      case 1:
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['R', Validators.required]}));
        players.push(this.fb.group({position: ['L', Validators.required]}));
        break;
      case 2:
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['R', Validators.required]}));
        players.push(this.fb.group({position: ['L', Validators.required]}));
        break;
      case 3:
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['R', Validators.required]}));
        break;
      case 4:
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['L', Validators.required]}));
        break;
      case 5:
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['L', Validators.required]}));
        break;
      case 6:
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['S', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['M', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        players.push(this.fb.group({position: ['O', Validators.required]}));
        break
    }
    this.Teams.push(this.fb.group({
      players: this.fb.array(players)
    }));
    this.Teams?.updateValueAndValidity();
  }
  deleteTeam(teamIndex: number){
    this.Teams.removeAt(teamIndex);
    this.Teams?.updateValueAndValidity();
  }
  deletePlayer(teamIndex: number, playerIndex: number){
    (this.Teams?.controls[teamIndex].get('players') as UntypedFormArray).removeAt(playerIndex);
    this.Teams?.updateValueAndValidity();
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
}
