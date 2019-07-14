import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3483Component } from './page3483.component';

@NgModule({
  declarations: [Page3483Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3483Component }])],
  exports: [Page3483Component]
})
export class Page3483Module {}
