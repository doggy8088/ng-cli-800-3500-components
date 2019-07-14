import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2855Component } from './page2855.component';

@NgModule({
  declarations: [Page2855Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2855Component }])],
  exports: [Page2855Component]
})
export class Page2855Module {}
