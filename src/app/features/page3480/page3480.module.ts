import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3480Component } from './page3480.component';

@NgModule({
  declarations: [Page3480Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3480Component }])],
  exports: [Page3480Component]
})
export class Page3480Module {}
