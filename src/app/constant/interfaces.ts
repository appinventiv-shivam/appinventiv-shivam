import { IAgoraRTCClient, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-sdk-ng";

export interface IUser {
  uid: number;
  name?: string;
}
export interface IRtc {
  client: IAgoraRTCClient | null;
  localAudioTrack: IMicrophoneAudioTrack| null;
  localVideoTrack: ICameraVideoTrack| null;
}
