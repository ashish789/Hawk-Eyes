import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Drone} from './../../classes/drone';
import { DroneService } from './../../services/drone-services/drone.service';
import { ResposeConfigs } from './../../classes/responseConfig';
@Component({
  selector: 'app-drone-actions',
  templateUrl: './drone-actions.component.html',
  styleUrls: ['./drone-actions.component.scss']
})
export class DroneActionsComponent implements OnInit {

  constructor(private droneService: DroneService, private fb: FormBuilder) {

  }
  @Input() drone: Drone;
  @Output() updateForm = new EventEmitter();

 settingsObj: any = {
  speed : 0,
  altitude : 0
};

  ngOnInit() {

    this.settingsObj = {
      speed : this.drone.speed,
      altitude : this.drone.altitude
    }
  }


  onSubmit() {
  console.log(this.settingsObj.speed);
  this.updateSettings(this.settingsObj.speed, this.settingsObj.altitude);
  }


  captureImage(): void {
    let imageObj: ResposeConfigs['captureImage'];
    this.droneService.captureImage()
        .subscribe(
          fileInfo => imageObj = fileInfo,
          err => {console.log('file not saved');
                  console.log(err); },
          () => { console.log('file save complete')
                  console.log(imageObj.name); }
        );
  }

  returnToBase(): void {
    this.droneService.returnToBase()
        .subscribe(
          response => { if (response.status === true) {
            console.log('return to base');
          } else {
            console.log('command failed');
        }},
        err => console.log('command error' + err));

  }

  updateSettings(altitude, speed): void {
    console.log('updating settings' + speed);
    this.droneService.updateSettings(altitude, speed)
    .subscribe(
      droneData => console.log(droneData),
      error => console.log('update command error' + error),
      () => console.log('update request completed'));

}




// getDroneData(): void {
//     this.droneService.getDroneData()
//         .subscribe(
//           droneObj => this.droneObj = droneObj,
//           err => {console.error('http request error' + err.msg);
//                   this.droneObj = err.mockObj; },
//           () => this.selectedDrone = this.droneObj);
//   }
}
