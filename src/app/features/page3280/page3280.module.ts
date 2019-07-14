import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3280Component } from './page3280.component';

@NgModule({
  declarations: [Page3280Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3280Component }])],
  exports: [Page3280Component]
})
export class Page3280Module {}
