import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayLoad } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) { }

  addPost (postPayLoad: PostPayLoad) {
    return this.httpClient.post('http://localhost:8080/api/posts', postPayLoad);
  }
}
