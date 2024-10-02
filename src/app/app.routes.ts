import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./features/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./features/events/events.module').then((m) => m.EventsModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./features/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
