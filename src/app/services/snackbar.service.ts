import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string, duration: number = 2): void {
    this._snackBar.open(message, action, {
      duration: duration * 1000,
      horizontalPosition: 'end',
    });
  }
}
