import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2087Component } from './page2087.component';

@NgModule({
  declarations: [Page2087Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2087Component }])],
  exports: [Page2087Component]
})
export class Page2087Module {}
