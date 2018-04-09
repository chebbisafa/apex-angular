import { Routes, RouterModule } from '@angular/router';
import {ContactModule} from "../../Contact/contact.module";

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },

  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsNg2Module'
  },

  {
    path: 'Contact',
    loadChildren: './Contact/contact.module#ContactModule'
  },
  {
    path: 'Users',
    loadChildren: './Users/users.module#UsersModule'
  },
  {
  path: 'devices',
  loadChildren: './Devices/devices.module#DevicesModule'
},

  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },







];
