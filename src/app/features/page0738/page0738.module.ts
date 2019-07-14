import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0738Component } from './page0738.component';

@NgModule({
  declarations: [Page0738Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0738Component }])],
  exports: [Page0738Component]
})
export class Page0738Module {}
