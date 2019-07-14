import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2687Component } from './page2687.component';

@NgModule({
  declarations: [Page2687Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2687Component }])],
  exports: [Page2687Component]
})
export class Page2687Module {}
