import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3495Component } from './page3495.component';

@NgModule({
  declarations: [Page3495Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3495Component }])],
  exports: [Page3495Component]
})
export class Page3495Module {}
