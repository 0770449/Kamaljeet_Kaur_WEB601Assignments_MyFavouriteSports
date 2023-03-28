import { Component, Input, OnInit } from '@angular/core';

import { ContentList } from '../helper-files/content-list';

import { Content } from '../helper-files/content-interface';
@Component({
	selector: 'app-content-card',
	templateUrl: './content-card.component.html',
	styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
	@Input() isFirst: boolean = false;
    @Input() isLast: boolean = false; 
	Default:string='assets/img/download.jpeg'
	@Input() item: any;
	
	public Onclick(content: any) {
		console.log("Id=" + content.id + "  Title=" + content.title);
	}
	ngOnInit() {

	}
	

}
