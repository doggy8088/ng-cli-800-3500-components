import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0553Component } from './page0553.component';

@NgModule({
  declarations: [Page0553Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0553Component }])],
  exports: [Page0553Component]
})
export class Page0553Module {}
