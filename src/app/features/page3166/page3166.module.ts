import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3166Component } from './page3166.component';

@NgModule({
  declarations: [Page3166Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3166Component }])],
  exports: [Page3166Component]
})
export class Page3166Module {}
