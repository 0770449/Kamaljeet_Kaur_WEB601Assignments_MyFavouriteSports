import { Component, EventEmitter, Output } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Content } from '../helper-files/content-interface';
import { MyFavouriteSportsService } from '../services/my-favourite-sports.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { MyFavouriteSportsService } from '../service/

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  title: string ="";
  description: string=""
  creater: string ="";
  type: string ="";
  idInput:any;
  dialogRef: any;



  constructor(private contentService:MyFavouriteSportsService ,private messageService: MessagesService,private dialog: MatDialogRef<DialogComponent>)
  {
  
  }
  
    addContent() {
      debugger
      if(this.idInput>0)
      {
        //update content
        const updatedContent: Content = {
          id: this.idInput,
          title: this.title,
          description: this.description,
          creator: this.creater,
          type:this.type
        };
          this.contentService.updateSports(updatedContent).subscribe(() => {
          this.messageService.addMessageService(`Content ${updatedContent.id} updated successfully`);
          
          this.dialogRef.close(updatedContent);
        });
      }
      else
      {
        const newContent: Content = {
          id: null,
          title: this.title,
          description: this.description,
          creator: this.creater,
          type:this.type
        };
        this.dialogRef.close(newContent);
     
      }
      
     // clear input fields
      this.title = '';
      this.description = '';
      this.creater = '';
      this.type = '';
    }
    
}
