import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2792Component } from './page2792.component';

@NgModule({
  declarations: [Page2792Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2792Component }])],
  exports: [Page2792Component]
})
export class Page2792Module {}
