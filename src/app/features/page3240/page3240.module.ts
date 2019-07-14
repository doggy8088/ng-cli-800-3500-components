import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3240Component } from './page3240.component';

@NgModule({
  declarations: [Page3240Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3240Component }])],
  exports: [Page3240Component]
})
export class Page3240Module {}
