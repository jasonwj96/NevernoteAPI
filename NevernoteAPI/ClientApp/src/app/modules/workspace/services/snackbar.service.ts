import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  snackBarDuration = 3000; // miliseconds
  snackBarAction = `ok`; // the text on the confirmation message in the snackbar

  constructor(private snackBar: MatSnackBar) {}

  newMessage(message: string) {
    this.snackBar.dismiss();
    this.snackBar.open(message, this.snackBarAction, {
      duration: this.snackBarDuration,
      panelClass: ['mat-simple-snackbar', 'mat-simple-snackbar-action']
    });
  }
}
