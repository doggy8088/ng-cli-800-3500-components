import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3413Component } from './page3413.component';

@NgModule({
  declarations: [Page3413Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3413Component }])],
  exports: [Page3413Component]
})
export class Page3413Module {}
