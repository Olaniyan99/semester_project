import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  login(args: { username: string; password: string }) {
    const reqUri = `${environment.API}/users/login`;
    return this.http.post(reqUri, { info: args });
  }

  createAccount(args: {
    username: string;
    password: string;
    Address1: string;
    address2: string;
    email: string;
    role: string;
    associations?: string[];
  }) {
    const reqUri = `${environment.API}/users/create_account`;
    return this.http.post(reqUri, { info: args });
  }

  searchUsers(text?: string) {
    let query = '';
    query = text ? `text=${text}` : '';
    const reqUri = `${environment.API}/users/search?${query}`;

    return this.http.get(reqUri);
  }

  donate(args: {
    amount: string;
    name: string;
    address: string;
    apartment?: string;
    creditCardNum: string;
    ccv: string;
    expDate: string;
    zipCode: string;
    city: string;
    state: string;
  }) {
    const reqUri = `${environment.API}/donate`;

    return this.http.post(reqUri, { donationInfo: args });
  }

  fetchDonations() {
    const reqUri = `${environment.API}/donate`;
    return this.http.get(reqUri);
  }

  recordStats(
    args: {
      score: string;
      game: string;
      date: string;
    },
    username: string
  ) {
    const reqUri = `${environment.API}/stats/${username}`;

    this.http.post(reqUri, { info: args });
  }

  fetchStats(username?: string, game?: string) {
    const query = '';

    username ? query.concat(`username=${username}`) : '';
    game ? query.concat(`game=${game}`) : '';

    const reqUri = `${environment.API}/stats?${query}`;

    return this.http.get(reqUri);
  }
}
