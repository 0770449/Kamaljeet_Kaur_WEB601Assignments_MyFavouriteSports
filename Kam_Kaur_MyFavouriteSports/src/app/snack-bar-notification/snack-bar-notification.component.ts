import { Component } from '@angular/core';
import { SnackbarnotifyservicesService } from '../services/snackbarnotifyservices.service';

@Component({
  selector: 'app-snack-bar-notification',
  templateUrl: './snack-bar-notification.component.html',
  styleUrls: ['./snack-bar-notification.component.scss']
})
export class SnackBarNotificationComponent {
  constructor(private snackBarService: SnackbarnotifyservicesService) {}

	openSnackBar(message: string, action: string) {
		this.snackBarService.openSnackBar(message, action);
	}
}
