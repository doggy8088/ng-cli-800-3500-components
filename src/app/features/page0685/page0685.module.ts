import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0685Component } from './page0685.component';

@NgModule({
  declarations: [Page0685Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0685Component }])],
  exports: [Page0685Component]
})
export class Page0685Module {}
