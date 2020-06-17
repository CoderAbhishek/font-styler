import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feature = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onClicked(data: string){
    this.feature.emit(data);
  }
}
