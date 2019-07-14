import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3175Component } from './page3175.component';

@NgModule({
  declarations: [Page3175Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3175Component }])],
  exports: [Page3175Component]
})
export class Page3175Module {}
