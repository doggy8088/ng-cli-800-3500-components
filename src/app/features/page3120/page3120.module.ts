import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3120Component } from './page3120.component';

@NgModule({
  declarations: [Page3120Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3120Component }])],
  exports: [Page3120Component]
})
export class Page3120Module {}
