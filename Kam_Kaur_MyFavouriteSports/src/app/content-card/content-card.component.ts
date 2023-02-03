import { Component, Input } from '@angular/core';

// import { ContentList } from '../helper-files/content-list';


@Component({
	selector: 'app-content-card',
	templateUrl: './content-card.component.html',
	styleUrls: ['./content-card.component.scss']
  })
export class ContentCardComponent  {
	@Input() item:any ;
	public Onclick(content:any)
	{
	  console.log("Id="+content.id +"  Title="+content.title );    //Clicking on the image displays the Content's id and title in the console
	}
	
}
