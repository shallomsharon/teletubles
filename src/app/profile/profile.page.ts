import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  @ViewChild('aboutContent', { read: ElementRef })
  private pageContent!: ElementRef<HTMLElement>;

  @ViewChild('myProfileCard', { read: ElementRef })
  private profileCard!: ElementRef<HTMLElement>;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.animateProfileCard();
    this.animatePageSlide();
  }

  animateProfileCard() {
    const fadeInAnimation = this.animationCtrl
      .create()
      .addElement(this.profileCard.nativeElement)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translateY(40px)' },
        { offset: 1, opacity: '1', transform: 'translateY(0)' },
      ]);

    fadeInAnimation.play();
  }
  animatePageSlide() {
    this.animationCtrl
      .create()
      .addElement(this.pageContent.nativeElement)
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(80px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1')
      .play();
  }
}
