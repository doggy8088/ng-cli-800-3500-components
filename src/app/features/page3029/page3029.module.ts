import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3029Component } from './page3029.component';

@NgModule({
  declarations: [Page3029Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3029Component }])],
  exports: [Page3029Component]
})
export class Page3029Module {}
