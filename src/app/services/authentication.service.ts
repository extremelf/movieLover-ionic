import { AfterViewChecked, Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, EMPTY, from, Observable } from 'rxjs';
import { map, tap, switchMap} from 'rxjs/operators';
import { MovieService } from './movie.service';
const TOKEN_KEY = 'my-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  user: any;
  constructor(private http: HttpClient, private movieServ: MovieService) {
    this.loadToken();
  }
  ngOnInit(){
    this.movieServ.getUser().subscribe(infoUser => {
      this.user = infoUser;
    })
  }
  
  async loadToken(){
    const token = await Storage.get({ key: TOKEN_KEY });
    if(token && token.value){
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else{
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: {email, password},user): Observable<any> {
      
    return this.http.post('https://reqres.in/api/login', credentials).pipe(
    map((data: any) => data.token),
    switchMap(token => {
      return from(Storage.set({key: TOKEN_KEY, value: token}));
    }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
    )
  }

  logout(): Promise<void>{
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }
}
