import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0667Component } from './page0667.component';

@NgModule({
  declarations: [Page0667Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0667Component }])],
  exports: [Page0667Component]
})
export class Page0667Module {}
