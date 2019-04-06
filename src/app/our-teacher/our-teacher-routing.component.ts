import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurTeacherComponent } from './our-teacher.component';
const teacherroutes: Routes = [{
    path: 'our-teacher', component: OurTeacherComponent
}];

@NgModule({
    imports: [RouterModule.forChild(teacherroutes)],
    exports: [RouterModule]
})
export class OurTeacherRoutingModule { }