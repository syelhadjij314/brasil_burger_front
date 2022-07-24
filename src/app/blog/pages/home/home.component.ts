import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  posts$ : Observable<Post[]> | null = null;
  constructor(private serv:PostService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
  }

}
