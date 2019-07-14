import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2945Component } from './page2945.component';

@NgModule({
  declarations: [Page2945Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2945Component }])],
  exports: [Page2945Component]
})
export class Page2945Module {}
