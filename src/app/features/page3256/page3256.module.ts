import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3256Component } from './page3256.component';

@NgModule({
  declarations: [Page3256Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3256Component }])],
  exports: [Page3256Component]
})
export class Page3256Module {}
