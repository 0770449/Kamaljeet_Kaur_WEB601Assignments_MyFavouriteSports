import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { MyFavouriteSportsService } from './services/my-favourite-sports.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kam_Kaur_MyFavouriteSports';
  name: string="Kamal";
  contentCard: any;
  errorMessage: any;
  id: any;

  constructor(private contentService: MyFavouriteSportsService,
    private messageService: MessagesService) { }



  onRetrieveContentCard(): void {
    // Reset the error message
    this.errorMessage = '';

    // Attempt to parse the ID as a number
    const idNumber = parseInt(this.id);

    // Check if the parsed ID is a number and within the bounds of the content array
    if (isNaN(idNumber) || idNumber < 1) {
      this.errorMessage = 'Invalid ID number entered';
      this.messageService.addMessageService(this.errorMessage);
      return;
    }
    debugger
   /* this.contentService.getSports().subscribe((content: string | any[]) => {
      if (idNumber > content.length) {
        this.errorMessage = 'Invalid ID number entered';
        this.messageService.addMessageService(this.errorMessage);
       
      }
      else{
        this.contentService.getSportsById(idNumber).subscribe(
          (contentCard: any) => {
            this.contentCard = contentCard;
            this.messageService.addMessageService(`Content Card at ID ${idNumber} retrieved`);
          },
          (error: any) => {
            this.errorMessage = 'Error retrieving content card';
            this.messageService.addMessageService(this.errorMessage);
          }
        );
      }
    });

    // Use the content service to retrieve the content card with the given ID
    
  }*/
  }

}

  
