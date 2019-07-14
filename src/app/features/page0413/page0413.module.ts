import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0413Component } from './page0413.component';

@NgModule({
  declarations: [Page0413Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0413Component }])],
  exports: [Page0413Component]
})
export class Page0413Module {}
