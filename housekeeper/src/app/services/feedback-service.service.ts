import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:7081';
@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private http:HttpClient) { }

  
  public addFeedback(feedback:any)
  {
    const baseUrl = 'http://localhost:7081';
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(`${baseUrl}/feedback/saveFeedback`,feedback, { headers });

  }
 
}
