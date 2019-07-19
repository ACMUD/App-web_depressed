import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topnews-tarjeta',
  templateUrl: './topnews-tarjeta.component.html',
  styleUrls: ['./topnews-tarjeta.component.css']
})
export class TopnewsTarjetaComponent implements OnInit {

  @Input() topnews: any = {};

  constructor( ) { }

  ngOnInit() {
  }

}
