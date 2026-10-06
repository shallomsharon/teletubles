import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.animateProfileCard();
  }

  animateProfileCard() {
    const cardElement = document.querySelector('#myProfileCard');
    if (!cardElement) return;

   
    const fadeInAnimation = this.animationCtrl
      .create()
      .addElement(cardElement)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translateY(40px)' },
        { offset: 1, opacity: '1', transform: 'translateY(0)' },
      ]);

    fadeInAnimation.play();
  }
}
