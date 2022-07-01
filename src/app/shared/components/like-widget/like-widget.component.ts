import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.css']
})
export class LikeWidgetComponent implements OnInit {

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  constructor(private uniqueIdService: UniqueIdService) { }

  ngOnInit(): void {
    if(!this.id){
      this.id = this.uniqueIdService.generateUniqIdWithPrefix('like-widget');
    }
  }

  public like():void {
    this.liked.emit();
  }

}
