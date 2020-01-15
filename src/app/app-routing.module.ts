import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { APICallDemoComponent } from './apicall-demo/apicall-demo.component';


const routes: Routes = [ {path:'',component:APICallDemoComponent},
{path:'home',component:ObservableDemoComponent},
{path:'customer',loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
{path:'aboutUs',component:UseDataServiceComponent},
{path:'contactUs',component:ProductComponent,
  children:[{path:'productDetails/:pid',component:ProductDetailComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
