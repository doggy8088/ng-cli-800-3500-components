import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3114Component } from './page3114.component';

@NgModule({
  declarations: [Page3114Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3114Component }])],
  exports: [Page3114Component]
})
export class Page3114Module {}
