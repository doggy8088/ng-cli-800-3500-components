import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2540Component } from './page2540.component';

@NgModule({
  declarations: [Page2540Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2540Component }])],
  exports: [Page2540Component]
})
export class Page2540Module {}
