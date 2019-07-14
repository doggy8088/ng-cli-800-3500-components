import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2565Component } from './page2565.component';

@NgModule({
  declarations: [Page2565Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2565Component }])],
  exports: [Page2565Component]
})
export class Page2565Module {}
