import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'blog-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  posts$ : Observable <Post[]> | null = null;
  constructor(private serv:PostService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
  }

}
