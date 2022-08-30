import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileForm = this.fb.group({
    startDate: ['', Validators.required],
    eventName: ['', Validators.required],
    location: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }
  onSubmit() {
  }
  ngOnInit(): void {
  }

}
