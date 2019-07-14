import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3154Component } from './page3154.component';

@NgModule({
  declarations: [Page3154Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3154Component }])],
  exports: [Page3154Component]
})
export class Page3154Module {}
