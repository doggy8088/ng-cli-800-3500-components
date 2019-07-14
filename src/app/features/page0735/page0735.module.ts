import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0735Component } from './page0735.component';

@NgModule({
  declarations: [Page0735Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0735Component }])],
  exports: [Page0735Component]
})
export class Page0735Module {}
