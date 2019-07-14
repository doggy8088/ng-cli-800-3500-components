import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3427Component } from './page3427.component';

@NgModule({
  declarations: [Page3427Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3427Component }])],
  exports: [Page3427Component]
})
export class Page3427Module {}
