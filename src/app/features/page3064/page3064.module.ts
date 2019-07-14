import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3064Component } from './page3064.component';

@NgModule({
  declarations: [Page3064Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3064Component }])],
  exports: [Page3064Component]
})
export class Page3064Module {}
