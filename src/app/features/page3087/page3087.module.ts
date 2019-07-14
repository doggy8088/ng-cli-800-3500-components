import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3087Component } from './page3087.component';

@NgModule({
  declarations: [Page3087Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3087Component }])],
  exports: [Page3087Component]
})
export class Page3087Module {}
