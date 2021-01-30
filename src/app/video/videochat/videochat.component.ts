import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.scss'],
})
export class VideochatComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement: any;
  @ViewChild('screenElement') screenElement: any;
  loadControls = false;

  video: any;
  screen: any;
  config = { audio: true, video: true };
  toggleVideo = false;
  toggleAudio = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.video = this.videoElement.nativeElement;
    this.screen = this.screenElement.nativeElement;

    this.initCamera();
  }

  initCamera() {
    var browser = navigator;
    browser.mediaDevices.getUserMedia(this.config).then((stream) => {
      this.video.srcObject = stream;
      this.screen.srcObject = stream;
      this.video.onloadedmetadata = (e: any) => {
        this.loadControls = true;
        this.video.play();
      };
      this.screen.onloadedmetadata = (e: any) => {
        this.screen.play();
      };
    });
  }

  showScreenPoster() {
    if (this.screen && this.toggleVideo) {
      this.screen.srcObject = null;
      return 'assets/images/avator.jpg';
    } else if (!this.toggleVideo && !this.screen) {
      navigator.mediaDevices.getUserMedia(this.config).then((stream) => {
        this.screen.srcObject = stream;
        this.screen.onloadedmetadata = (e: any) => {
          this.screen.play();
        };
      });
    }

    return;
  }
}
