import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2088Component } from './page2088.component';

@NgModule({
  declarations: [Page2088Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2088Component }])],
  exports: [Page2088Component]
})
export class Page2088Module {}
