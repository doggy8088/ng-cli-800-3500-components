import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0723Component } from './page0723.component';

@NgModule({
  declarations: [Page0723Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0723Component }])],
  exports: [Page0723Component]
})
export class Page0723Module {}
