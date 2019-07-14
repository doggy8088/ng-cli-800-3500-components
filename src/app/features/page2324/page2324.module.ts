import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2324Component } from './page2324.component';

@NgModule({
  declarations: [Page2324Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2324Component }])],
  exports: [Page2324Component]
})
export class Page2324Module {}
