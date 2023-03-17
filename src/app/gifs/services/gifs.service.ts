import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  constructor( private http: HttpClient ) { }

  private apiKey: string = 'srSFjJfgHxuRrmEzcDJX5e1S3uN62VCt';
  private _history: string[] = [];

  get history (): string [] {
    return [...this._history];
  }

  searchGifs (query: string) {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query) && query.length > 0) {
      this._history.unshift(query);
    }

    if (this._history.length > 10) {
      this._history.pop();
    }
    
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=srSFjJfgHxuRrmEzcDJX5e1S3uN62VCt&q=${query}&limit=10`)
      .subscribe( res => {
        console.log(res);
      });
  }
}
