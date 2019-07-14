import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2716Component } from './page2716.component';

@NgModule({
  declarations: [Page2716Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2716Component }])],
  exports: [Page2716Component]
})
export class Page2716Module {}
