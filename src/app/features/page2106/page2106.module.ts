import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2106Component } from './page2106.component';

@NgModule({
  declarations: [Page2106Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2106Component }])],
  exports: [Page2106Component]
})
export class Page2106Module {}
