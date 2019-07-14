import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3052Component } from './page3052.component';

@NgModule({
  declarations: [Page3052Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3052Component }])],
  exports: [Page3052Component]
})
export class Page3052Module {}
