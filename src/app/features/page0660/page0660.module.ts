import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0660Component } from './page0660.component';

@NgModule({
  declarations: [Page0660Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0660Component }])],
  exports: [Page0660Component]
})
export class Page0660Module {}
