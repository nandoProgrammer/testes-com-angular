import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  /*it(`#${LikeWidgetComponent.prototype.like.name} 
    should trigger emission when called`, done => {
     fixture.detectChanges();
     component.liked.subscribe(() => {
        expect(true).toBeTrue();
        done();
     });
     component.like();
  })*/

  it(`#${LikeWidgetComponent.prototype.like.name} 
    should trigger (@Output liked) when called`, done => {
     spyOn(component.liked, 'emit');
     fixture.detectChanges();
     component.like();
     expect(component.liked.emit).toHaveBeenCalled();
  })

});