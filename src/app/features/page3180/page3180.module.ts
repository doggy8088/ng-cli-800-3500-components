import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3180Component } from './page3180.component';

@NgModule({
  declarations: [Page3180Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3180Component }])],
  exports: [Page3180Component]
})
export class Page3180Module {}
