import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'blog-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input('posts') post : Post|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
