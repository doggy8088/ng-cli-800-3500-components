import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1685Component } from './page1685.component';

@NgModule({
  declarations: [Page1685Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1685Component }])],
  exports: [Page1685Component]
})
export class Page1685Module {}
