import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1413Component } from './page1413.component';

@NgModule({
  declarations: [Page1413Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1413Component }])],
  exports: [Page1413Component]
})
export class Page1413Module {}
