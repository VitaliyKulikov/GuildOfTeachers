import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeacherComponent } from './our-teacher.component';
import { OurTeacherRoutingModule } from './our-teacher-routing.component';
import { FilterSideComponent } from './filter-side/filter-side.component';
import { UserSideComponent } from './user-side/user-side.component';

@NgModule({
  declarations: [OurTeacherComponent, FilterSideComponent, UserSideComponent],
  imports: [
    CommonModule, OurTeacherRoutingModule
  ]
})
export class OurTeacherModule { }
