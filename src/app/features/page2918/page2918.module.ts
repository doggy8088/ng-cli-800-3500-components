import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2918Component } from './page2918.component';

@NgModule({
  declarations: [Page2918Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2918Component }])],
  exports: [Page2918Component]
})
export class Page2918Module {}
