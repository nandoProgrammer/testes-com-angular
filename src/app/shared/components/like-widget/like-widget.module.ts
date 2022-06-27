import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';


@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeWidgetComponent]
})
export class LikeWidgetModule { }
