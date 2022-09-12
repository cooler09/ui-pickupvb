import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-detail-info',
  templateUrl: './event-detail-info.component.html',
  styleUrls: ['./event-detail-info.component.scss']
})
export class EventDetailInfoComponent implements OnInit {
  @Input() createEventInfoForm!: UntypedFormGroup;
  times: any = [];
  constructor() { 
    for (let i = 1; i <= 12; i++) {
      for(let x = 0; x <= 45; x += 15){
        let time = `${i}:${x === 0?'00': x}`;
        this.times.push({value: time, name: time});
      }
    }
  }

  ngOnInit(): void {
  }

}
