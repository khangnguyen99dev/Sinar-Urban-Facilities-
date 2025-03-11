import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), 
    data: {
      layout: 'app',
    }
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'service-details',
    loadChildren: () => import('./pages/service-detail/service-detail.module').then(m => m.ServiceDetailModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'portfolio-details',
    loadChildren: () => import('./pages/portfolio-detail/portfolio-detail.module').then(m => m.PortfolioDetailModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'team-details',
    loadChildren: () => import('./pages/team-detail/team-detail.module').then(m => m.TeamDetailModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'blog-grid',
    loadChildren: () => import('./pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'blog-stander',
    loadChildren: () => import('./pages/blog-stander/blog-stander.module').then(m => m.BlogStanderModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'blog-details',
    loadChildren: () => import('./pages/blog-detail/blog-detail.module').then(m => m.BlogDetailModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
    data: {
      layout: 'app',
    }
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
