import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2413Component } from './page2413.component';

@NgModule({
  declarations: [Page2413Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2413Component }])],
  exports: [Page2413Component]
})
export class Page2413Module {}
