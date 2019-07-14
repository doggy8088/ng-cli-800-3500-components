import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2075Component } from './page2075.component';

@NgModule({
  declarations: [Page2075Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2075Component }])],
  exports: [Page2075Component]
})
export class Page2075Module {}
