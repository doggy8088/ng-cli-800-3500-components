import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3054Component } from './page3054.component';

@NgModule({
  declarations: [Page3054Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3054Component }])],
  exports: [Page3054Component]
})
export class Page3054Module {}
