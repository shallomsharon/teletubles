import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  isDarkMode: boolean = false;
  notificationsEnabled: boolean = true;
  selectedLanguage: string = 'id';

  @ViewChild('aboutContent', { read: ElementRef })
  private pageContent!: ElementRef<HTMLElement>;
  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.animatePageSlide();
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