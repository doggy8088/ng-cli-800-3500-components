import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2419Component } from './page2419.component';

@NgModule({
  declarations: [Page2419Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2419Component }])],
  exports: [Page2419Component]
})
export class Page2419Module {}
