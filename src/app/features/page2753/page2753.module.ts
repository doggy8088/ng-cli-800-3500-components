import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2753Component } from './page2753.component';

@NgModule({
  declarations: [Page2753Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2753Component }])],
  exports: [Page2753Component]
})
export class Page2753Module {}
