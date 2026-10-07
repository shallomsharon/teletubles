import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}