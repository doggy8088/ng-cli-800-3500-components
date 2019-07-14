import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0382Component } from './page0382.component';

@NgModule({
  declarations: [Page0382Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0382Component }])],
  exports: [Page0382Component]
})
export class Page0382Module {}
