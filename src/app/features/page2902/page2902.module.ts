import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2902Component } from './page2902.component';

@NgModule({
  declarations: [Page2902Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2902Component }])],
  exports: [Page2902Component]
})
export class Page2902Module {}
