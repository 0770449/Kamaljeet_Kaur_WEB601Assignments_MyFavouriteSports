import { Component, EventEmitter, Output } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Content } from '../helper-files/content-interface';
import { MyFavouriteSportsService } from '../services/my-favourite-sports.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
// import { MyFavouriteSportsService } from '../service/my-favourite-sports.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
 
  constructor(private contentService:MyFavouriteSportsService ,private messageService: MessagesService,private dialog: MatDialog)
  {
    
  }

  // @Output() contentAdded = new EventEmitter<Content>();
  @Output() contentAdded = new EventEmitter<Content>();


  openDialog()
  {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      height: '650px',
      data: {}
        
    });
    dialogRef.afterClosed().subscribe(result=> {
      debugger
      console.log(`Dialog result: ${result}`);
      this.addContent(result)
    });
  }

  addContent(content: { id: null; title: any; description: any; creater: any; type: any; tags: any; }) {
    console.log(content)
    debugger
    if(content.id!=null)
    {
      //update content
      const updatedContent: Content = {
        id: content.id,
        title: content.title,
        description: content.description,
        creator: content.creater,
        type: content.type,
        tags: content.tags,
        
      };
      this.contentService.updateSports(updatedContent).subscribe(() => {
        this.messageService.addMessageService(`Content ${updatedContent.id} updated successfully`);
        this.contentAdded.emit(updatedContent);
      });
    }
    else
    {
      const newContent: Content = {
        
        id: null,
        title: content.title,
        description: content.description,
        creator: content.creater,
        type: content.type,
       
        tags:content.tags
      };
         this.contentAdded.emit(newContent);
    }
    

  //   this.title = '';
  //   this.description = '';
  //   this.creater = '';
  //   this.type = '';
  //   this.tags='';
  // }
}


}
function closeDialog() {
  throw new Error('Function can not be implememnted.');
}