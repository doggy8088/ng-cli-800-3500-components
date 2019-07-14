import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1334Component } from './page1334.component';

@NgModule({
  declarations: [Page1334Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1334Component }])],
  exports: [Page1334Component]
})
export class Page1334Module {}
