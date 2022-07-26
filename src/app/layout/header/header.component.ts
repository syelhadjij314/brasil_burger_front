import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/produit/shared/models/post';
import { PostService } from 'src/app/produit/shared/services/post.service';
@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  posts$ : Observable<Post[]> | null = null;
  constructor(private serv:PostService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();

  }
}
