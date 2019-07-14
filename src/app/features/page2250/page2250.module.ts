import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2250Component } from './page2250.component';

@NgModule({
  declarations: [Page2250Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2250Component }])],
  exports: [Page2250Component]
})
export class Page2250Module {}
