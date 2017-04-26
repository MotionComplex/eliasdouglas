import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {
  baseUrl = 'https://api.spotify.com'
  tracksUrl = '/v1/tracks'
  constructor(private http: Http) { }

  public loadTrack(id: string) : Observable<any> {
    return this.http.get(`${this.baseUrl}${this.tracksUrl}/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(err: any) {
    console.log(err);
    return err.json();
  }
}
