import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-request-service-page',
	templateUrl: './request-service-page.component.html',
	styleUrls: ['./request-service-page.component.scss']
})
export class RequestServicePageComponent implements OnInit {

	private _pageTitle: string;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
	) { }

	ngOnInit() {
		this._pageTitle = this._route.snapshot.data['title'];
	}

	public get pageTitle(): string {
		return this._pageTitle;
	}

}
