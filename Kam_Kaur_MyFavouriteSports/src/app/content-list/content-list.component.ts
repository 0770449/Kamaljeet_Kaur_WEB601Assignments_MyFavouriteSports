import { Component, Input, OnInit } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';

import { Content } from '../helper-files/content-interface';
import { MessagesService } from '../services/messages.service';
import { MyFavouriteSportsService } from '../services/my-favourite-sports.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
	
	content :Content[]=[];
	
	ngOnInit(): void {
		this.contentService.getSports().subscribe((content: Content[]) => {
		  this.content = content;
		});
	  }
	 
	  constructor(private contentService: MyFavouriteSportsService)
	  {
		
	  }
	searchTitle:string | undefined;
	exist=false;
	message:string | undefined
	mysearch()
	{
	 const FilterSearch= this.content.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
	 this.exist=!!FilterSearch;
	 this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
	}

}

