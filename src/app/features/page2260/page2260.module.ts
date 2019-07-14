import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2260Component } from './page2260.component';

@NgModule({
  declarations: [Page2260Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2260Component }])],
  exports: [Page2260Component]
})
export class Page2260Module {}
