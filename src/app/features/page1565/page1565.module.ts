import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1565Component } from './page1565.component';

@NgModule({
  declarations: [Page1565Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1565Component }])],
  exports: [Page1565Component]
})
export class Page1565Module {}
