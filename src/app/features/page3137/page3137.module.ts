import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3137Component } from './page3137.component';

@NgModule({
  declarations: [Page3137Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3137Component }])],
  exports: [Page3137Component]
})
export class Page3137Module {}
