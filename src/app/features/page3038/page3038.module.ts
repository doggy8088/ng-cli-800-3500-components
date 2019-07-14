import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3038Component } from './page3038.component';

@NgModule({
  declarations: [Page3038Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3038Component }])],
  exports: [Page3038Component]
})
export class Page3038Module {}
