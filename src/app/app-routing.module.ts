import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonesComponent } from './phones/phones.component';
import { EarbudsComponent } from './earbuds/earbuds.component';
import { WatchComponent } from './watch/watch.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { OffersComponent } from './offers/offers.component';
import { SupportsComponent } from './supports/supports.component';

const routes: Routes = [
  { path: 'phones', component: PhonesComponent },
  { path: 'earbuds', component: EarbudsComponent },
  { path: 'watches', component: WatchComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'support', component: SupportsComponent },

  // Default redirect
  { path: '', redirectTo: '/phones', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/phones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
