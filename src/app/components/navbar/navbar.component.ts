import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private clipboard: Clipboard, private snackBarService: SnackbarService) { }
  supported = false;

  ngOnInit(): void {
  }
  copyToClipBoard(): void {
    this.clipboard.copy('https://wdd330-weatherapp.herokuapp.com/');
    console.log(this.supported)
    if (this.supported) {
      this.snackBarService.openSnackBar('Thanks fo the support !!!!', 'close', 2);
    } else {
      this.snackBarService.openSnackBar('Link copied to the clipboard !!!!', 'close', 2);
    }
    this.supported = !this.supported;
  }

}
