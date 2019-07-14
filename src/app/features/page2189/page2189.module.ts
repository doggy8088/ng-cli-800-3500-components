import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2189Component } from './page2189.component';

@NgModule({
  declarations: [Page2189Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2189Component }])],
  exports: [Page2189Component]
})
export class Page2189Module {}
