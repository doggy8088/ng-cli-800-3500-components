import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2908Component } from './page2908.component';

@NgModule({
  declarations: [Page2908Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2908Component }])],
  exports: [Page2908Component]
})
export class Page2908Module {}
