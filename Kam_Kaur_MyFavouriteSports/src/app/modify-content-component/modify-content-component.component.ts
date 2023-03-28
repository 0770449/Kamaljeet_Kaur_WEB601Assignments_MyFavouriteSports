import { Component, EventEmitter, Output } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Content } from '../helper-files/content-interface';
import { MyFavouriteSportsService } from '../services/my-favourite-sports.service';
// import { MyFavouriteSportsService } from '../service/my-favourite-sports.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  title: string ="";
  description: string=""
  creater: string ="";
  type: string ="";
  idInput:any;
  constructor(private contentService:MyFavouriteSportsService ,private messageService: MessagesService)
  {
    
  }

  @Output() contentAdded = new EventEmitter<Content>();
  addContent() {
    debugger
    if(this.idInput)
    {
      //update content
      const updatedContent: Content = {
        id: this.idInput,
        title: this.title,
        description: this.description,
        creator: this.creater,
        type:this.type
      };
      this.contentService.updateHero(updatedContent).subscribe(() => {
        this.messageService.addMessage(`Content ${updatedContent.id} updated successfully`);
        // this.clearInputs();
       // this.addUpdateButtonText = 'Add Content';
        this.contentAdded.emit(updatedContent);
      });
    }
    else
    {
      const newContent: Content = {
        title: this.title,
        description: this.description,
        creator: this.creater,
        type: this.type,
        id: 0
      };
         
    this.contentAdded.emit(newContent);
    }
    

    this.title = '';
    this.description = '';
    this.creater = '';
    this.type = '';
  }
}

