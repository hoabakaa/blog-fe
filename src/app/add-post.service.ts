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

  getAllPost(): Observable<Array<PostPayLoad>> {
    return this.httpClient.get<Array<PostPayLoad>>('http://localhost:8080/api/posts/all');
  }

  getPost(permaLink: Number): Observable<PostPayLoad> {
    return this.httpClient.get<PostPayLoad>('http://localhost:8080/api/posts/get/' + permaLink);
  }
}
