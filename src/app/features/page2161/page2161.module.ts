import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2161Component } from './page2161.component';

@NgModule({
  declarations: [Page2161Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2161Component }])],
  exports: [Page2161Component]
})
export class Page2161Module {}
