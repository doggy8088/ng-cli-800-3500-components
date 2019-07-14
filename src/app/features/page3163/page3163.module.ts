import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3163Component } from './page3163.component';

@NgModule({
  declarations: [Page3163Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3163Component }])],
  exports: [Page3163Component]
})
export class Page3163Module {}
