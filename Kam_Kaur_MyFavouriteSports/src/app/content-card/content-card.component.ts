import { Component, OnInit } from '@angular/core';

// import { ContentList } from '../helper-files/content-list';

import { Content } from '../helper-files/content-interface';
@Component({
	selector: 'app-content-card',
	templateUrl: './content-card.component.html',
	styleUrls: ['./content-card.component.scss']
  })
export class ContentCardComponent implements OnInit {
	
	Content :Content[];
	
	ngOnInit () {
	 
	}
  constructor(){
this.Content = [{
	id: 1,
	 title: 'Kabaddi',
	 description: 'Kabaddi is basically a combative sport, with seven players on each side;',
	 creator: 'Ashish Pachori from India',
	 imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyjf43RIPUVP4Q-jnA3LgHnyz4wg1RUDCFg9ogsyAVw&s',
	 type: 'National level',
 },
 
 {
   id: 2,
	 title: 'Cricket',
	 description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at ...",
	 creator: 'South-east England',
	 imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQdoLcjMeNu_2TJ4eP69TCpBnlYcvd_MNfQ&usqp=CAU',
	 type: 'International',
 },
 
  {
   id: 3,
	 title: 'Hockey',
	 description: "Hockey is a term used to denote a family of various types of both summer and winter team sports which originated on either an outdoor field, sheet of ice, or dry floor such as in a gymnasium.",
	 creator: 'Chelsea Laden ',
	 imgURL: 'data:image/png;base64,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',
	 type: 'International',
}]


 
}

}

