import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2226Component } from './page2226.component';

@NgModule({
  declarations: [Page2226Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2226Component }])],
  exports: [Page2226Component]
})
export class Page2226Module {}
