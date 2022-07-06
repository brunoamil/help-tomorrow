import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BpostService {
  // 'https://track.bpost.cloud/track/items?itemIdentifier=96254275&postalCode=03132020'
  constructor(private httpClient: HttpClient) {}

  getBpost(barCode: string, postalCode: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://track.bpost.cloud/track/items?itemIdentifier=${barCode}&postalCode=${postalCode}`
    );
  }
}
