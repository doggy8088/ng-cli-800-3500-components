import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2740Component } from './page2740.component';

@NgModule({
  declarations: [Page2740Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2740Component }])],
  exports: [Page2740Component]
})
export class Page2740Module {}
