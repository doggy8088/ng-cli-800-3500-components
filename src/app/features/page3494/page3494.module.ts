import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3494Component } from './page3494.component';

@NgModule({
  declarations: [Page3494Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3494Component }])],
  exports: [Page3494Component]
})
export class Page3494Module {}
