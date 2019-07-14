import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2860Component } from './page2860.component';

@NgModule({
  declarations: [Page2860Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2860Component }])],
  exports: [Page2860Component]
})
export class Page2860Module {}
