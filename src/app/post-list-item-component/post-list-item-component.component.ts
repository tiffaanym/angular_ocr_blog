import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() { }

    @Input() title: string;
    @Input() content: string;
    @Input() date: Date;
    @Input() love: number;

  ngOnInit() {
  }

  increaseLoveNumber() {
      this.love++;
  }

  decreaseLoveNumber() {
      this.love--;
  }

}
