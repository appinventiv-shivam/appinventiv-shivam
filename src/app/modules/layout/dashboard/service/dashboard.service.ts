import { IRtc } from './../../../../constant/interfaces';
import { Injectable } from '@angular/core';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IUser } from '../../../../constant/interfaces';

@Injectable()

export class DashboardService {
  rtc:IRtc = {
    client:null,
    localAudioTrack: null,
    localVideoTrack: null,
  };
  options = {
    appId: environment.agoraKey,
    channel: 'video-call',
  };
  remoteUsers: IUser[] = [];
  updateUserInfo = new BehaviorSubject<any>(null);

  constructor() {  }

  createRTCClient() {
    (this.rtc.client) = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' });
  }

  async localUser(token: any, uuid: any) {
    const uid = await this.rtc.client?.join(
      token,
      this.options.channel,
      this.options.appId,
      uuid
    );
    // Create an audio track from the audio sampled by a microphone.
    this.rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // Create a video track from the video captured by a camera.
    this.rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack({
      encoderConfig: '120p',
    });

    // Publish the local audio and video tracks to the channel.
    this.rtc.localVideoTrack.play('local-player');
    // channel for other users to subscribe to it.
    await this.rtc.client?.publish([
      this.rtc.localAudioTrack,
      this.rtc.localVideoTrack,
    ]);
  }

  agoraServerEvents(rtc: any) {
    rtc.client.on('user-published', async (user: any, mediaType: any) => {
      console.log(user, mediaType, 'user-published');

      await rtc.client.subscribe(user, mediaType);
      if (mediaType === 'video') {
        const remoteVideoTrack = user.videoTrack;
        remoteVideoTrack.play('remote-playerlist' + user.uid);
      }
      if (mediaType === 'audio') {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
      }
    });
    rtc.client.on('user-unpublished', (user: any) => {
      console.log(user, 'user-unpublished');
    });

    rtc.client.on('user-joined', (user: any) => {
      let id = user.uid;
      this.remoteUsers.push({ uid: +id });
      this.updateUserInfo.next(id);
      console.log('user-joined', user, this.remoteUsers, 'event1');
    });
  }

  async leaveCall() {
    this.rtc?.localAudioTrack?.close();
    this.rtc?.localVideoTrack?.close();
    this.rtc?.client?.remoteUsers.forEach((user) => {
      const playerContainer = document.getElementById(
        'remote-playerlist' + user.uid.toString()
      );
      playerContainer && playerContainer.remove();
    });
    console.log(this.remoteUsers,"Leave channel");

    await this.rtc?.client?.leave();
  }

  generateUid() {
    const length = 5;
    const randomNo = Math.floor(
      Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
    );
    return randomNo;
  }
}
