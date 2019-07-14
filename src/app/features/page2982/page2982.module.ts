import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2982Component } from './page2982.component';

@NgModule({
  declarations: [Page2982Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2982Component }])],
  exports: [Page2982Component]
})
export class Page2982Module {}
