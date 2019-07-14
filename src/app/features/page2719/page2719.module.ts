import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2719Component } from './page2719.component';

@NgModule({
  declarations: [Page2719Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2719Component }])],
  exports: [Page2719Component]
})
export class Page2719Module {}
