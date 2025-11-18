import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { Form } from './form/form';
import { LIST } from './list/list';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule,Form,LIST],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('myapp');
  name = 'puli';
  imageUrl = 'https://picsum.photos/200/300';
  text = 'good evening';

  user: any = null;

  ngOnInit() {
    this.user = {
      name: 'akash',
    };
  }

  clicklist = 0;

  clickMe() {
    this.clicklist++;
  }

  count = signal(0);

  doublecount: Signal<number> = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }

  animes = ['one piece', 'naruto', 'bleach', 'demon slayer', 'fairy tail'];

  fruits = ['apple', 'banna', 'cherry', 'date'];

  showMe= true;

  applyColor= true;


  toDate= new Date();

  pal='Hello World';



}
