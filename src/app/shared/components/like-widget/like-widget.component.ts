import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.css']
})
export class LikeWidgetComponent implements OnInit {

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  constructor() { }

  ngOnInit(): void {
  }

}
