import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [ {path:'',component:DataBindingComponent},
{path:'home',component:DataBindingComponent},
{path:'aboutUs',component:UseDataServiceComponent},
{path:'contactUs',component:ProductComponent,
  children:[{path:'productDetails/:pid',component:ProductDetailComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
