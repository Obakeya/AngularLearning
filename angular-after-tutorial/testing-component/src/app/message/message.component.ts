import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent  {

  private language: 'en' | 'ja' = 'en';

  get message() {
    return this.language === 'en' ? 'Hello' : 'こんにちは';
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'ja' : 'en';
  }


}
