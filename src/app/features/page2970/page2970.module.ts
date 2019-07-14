import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2970Component } from './page2970.component';

@NgModule({
  declarations: [Page2970Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2970Component }])],
  exports: [Page2970Component]
})
export class Page2970Module {}
