import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2606Component } from './page2606.component';

@NgModule({
  declarations: [Page2606Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2606Component }])],
  exports: [Page2606Component]
})
export class Page2606Module {}
