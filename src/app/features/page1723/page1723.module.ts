import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1723Component } from './page1723.component';

@NgModule({
  declarations: [Page1723Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1723Component }])],
  exports: [Page1723Component]
})
export class Page1723Module {}
