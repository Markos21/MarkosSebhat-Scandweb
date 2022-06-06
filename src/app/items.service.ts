import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { Items } from './Items';

import { catchError, retry } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'text/plain '
  })
}



@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  //private baseUrl='http://localhost/php-restapi/api/';

  private apiUrl="http://localhost/php-restapi/api/post/read.php";
  private postapiUrl="http://localhost/php-restapi/api/post/create.php";


  constructor(private http:HttpClient) { }

  getItems():Observable<Items[]>{
return this.http.get<Items[]>(this.apiUrl);
  }

  addItems(item:Items):Observable<Items>{
    return this.http.post<Items>(this.postapiUrl,item,httpOptions) .pipe(
      catchError(this.handleError)
    );
  }


private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));


}
}