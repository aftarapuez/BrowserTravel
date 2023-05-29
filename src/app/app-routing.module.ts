import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClimaComponent } from './clima/clima.component';

const routes: Routes = [
  {
    path: '',
    component: ClimaComponent,
    data: {
      title: 'clima'
    }
  },
  {
    path: 'clima',
    component: ClimaComponent,
    data: {
      title: 'clima'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
