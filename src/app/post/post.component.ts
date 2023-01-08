import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostPayLoad } from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  post!:PostPayLoad;
  permaLink!: Number;

  constructor(private router: ActivatedRoute, private postService: AddPostService){

  }

  ngOnInit() {
    this.router.params.subscribe({
      next: (params) => {
        this.permaLink = params['id'];
      }
    });
    this.postService.getPost(this.permaLink).subscribe({
      next: (data:PostPayLoad) => {
        this.post = data;
      }
    });
  }

}
