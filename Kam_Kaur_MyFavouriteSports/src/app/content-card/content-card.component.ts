import { Component, OnInit } from '@angular/core';

import { ContentList } from '../helper-files/content-list';

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
	 imgURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F47%2F148847-050-C4FB5341%2FCricket-bat-ball.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fsports%2Fcricket-sport%2FPlay-of-the-game&tbnid=iXXBR43lMvH2JM&vet=12ahUKEwiUyYGLmuH8AhWNn3IEHcRJCs8QMygNegUIARD9AQ..i&docid=yRr60t928QYcuM&w=1600&h=1127&q=images%20cricket%20game&ved=2ahUKEwiUyYGLmuH8AhWNn3IEHcRJCs8QMygNegUIARD9AQ',
	 type: 'International',
 },
 
  {
   id: 3,
	 title: 'Hockey',
	 description: "Hockey is a term used to denote a family of various types of both summer and winter team sports which originated on either an outdoor field, sheet of ice, or dry floor such as in a gymnasium.",
	 creator: 'Chelsea Laden ',
	 imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffield-hockey&psig=AOvVaw3VziM3Sa8EdbZ0IQ9a-_kI&ust=1674684313533000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNilu66b4fwCFQAAAAAdAAAAABAE',
	 type: 'International',
}]


 
}

}
