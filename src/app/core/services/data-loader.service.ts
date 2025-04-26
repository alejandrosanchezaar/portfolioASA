import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {

  constructor(private http: HttpClient) { }

  public async loadInfo<T>(path: string): Promise<T[]> {
    return firstValueFrom(
      this.http.get<T[]>(path).pipe(
        catchError((err) => {
          console.error(`Error loading from ${path}:`, err);
          return of([] as T[]);
        })
      )
    );
  }
}
