import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0363Component } from './page0363.component';

@NgModule({
  declarations: [Page0363Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0363Component }])],
  exports: [Page0363Component]
})
export class Page0363Module {}
