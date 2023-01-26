import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  isSmallScreen = false;
  
  constructor(
    private http: HttpClient,
    private fb: UntypedFormBuilder,
    breakpointObserver: BreakpointObserver) {
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
      teams: this.fb.array([])
    });
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
  ngOnInit(): void {}
  create(){
    let startDate = new Date(this.createEventInfoForm.get("eventDate")?.value);
    let endDate = new Date(this.createEventInfoForm.get("eventDate")?.value);
    let startTime = new Date(this.createEventInfoForm.get("startTime")?.value);
    let endTime = new Date(this.createEventInfoForm.get("endTime")?.value);
    let startTimeAMPM = new Date(this.createEventInfoForm.get("startTimeAMPM")?.value);
    let endTimeAMPM = new Date(this.createEventInfoForm.get("endTimeAMPM")?.value);
    let body ={
      "name": this.createEventInfoForm.get("eventName")?.value,
      "location":this.createEventInfoForm.get("location")?.value,
      "startDate": startDate.toJSON(),
      "endDate": endDate.toJSON()
    }
    this.http.post("http://api:5000/Event", body).subscribe(response =>{
      console.log(response)
    })
  }
  
}
