import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3104Component } from './page3104.component';

@NgModule({
  declarations: [Page3104Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3104Component }])],
  exports: [Page3104Component]
})
export class Page3104Module {}
