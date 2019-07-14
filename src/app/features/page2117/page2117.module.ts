import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2117Component } from './page2117.component';

@NgModule({
  declarations: [Page2117Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2117Component }])],
  exports: [Page2117Component]
})
export class Page2117Module {}
