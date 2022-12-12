import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  hideBtns = true;

  constructor(public stream: DashboardService) {}

  ngOnInit(): void { }

  async startCall() {
    const uid = this.stream.generateUid();
    const rtcDetails = {
      uid: uid,
      token: localStorage.getItem('token'),
    };

    this.stream.createRTCClient();
    console.log("jijiji");

    this.stream.agoraServerEvents(this.stream.rtc);
    await this.stream.localUser(rtcDetails.token, uid);

    this.hideBtns = false;
  }

  async logout() {
    await this.stream.leaveCall();
  }
}
