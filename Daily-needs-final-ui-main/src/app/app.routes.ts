import { Routes } from '@angular/router';
import { AddNewCityComponent } from './Pages/add-new-city/add-new-city.component';
import { GetAllCitiesComponent } from './Pages/get-all-cities/get-all-cities.component';
import { GetAllUsersComponent } from './Pages/get-all-users/get-all-users.component';
import { AddNewUserComponent } from './Pages/add-new-user/add-new-user.component';
import { UserByIdComponent } from './Pages/user-by-id/user-by-id.component';
import { AddNewRoleComponent } from './Pages/add-new-role/add-new-role.component';
import { GetAllRolesComponent } from './Pages/get-all-roles/get-all-roles.component';
import { AddNewProductComponent } from './Pages/add-new-product/add-new-product.component';
import { GetAllProductsComponent } from './Pages/get-all-products/get-all-products.component';
import { ProductByIdComponent } from './Pages/product-by-id/product-by-id.component';
import { AddNewCartComponent } from './Pages/add-new-cart/add-new-cart.component';
import { GetAllCartsComponent } from './Pages/get-all-carts/get-all-carts.component';
import { CartByIdComponent } from './Pages/cart-by-id/cart-by-id.component';
import { AddNewLocationComponent } from './Pages/add-new-location/add-new-location.component';
import { GetAllLocationsComponent } from './Pages/get-all-locations/get-all-locations.component';
import { AddNewLoginComponent } from './Pages/add-new-login/add-new-login.component';
import { GetAllLoginsComponent } from './Pages/get-all-logins/get-all-logins.component';
import { AddNewCategoryComponent } from './Pages/add-new-category/add-new-category.component';
import { GetAllCategoriesComponent } from './Pages/get-all-categories/get-all-categories.component';
import { AddNewOfferComponent } from './Pages/add-new-offer/add-new-offer.component';
import { GetAllOffersComponent } from './Pages/get-all-offers/get-all-offers.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Pages/customer-dashboard/customer-dashboard.component';
import { UserComponent } from './Pages/user/user.component';
import { CustomerCityLocationComponent } from './Pages/customer-city-location/customer-city-location.component';
import { SupplierDashboardComponent } from './Pages/supplier-dashboard/supplier-dashboard.component';
import { GetAllSupplierProductsComponent } from './Pages/get-all-supplier-products/get-all-supplier-products.component';
import { PaymentPageComponent } from './Pages/payment-page/payment-page.component';
import { UploadImageComponent } from './Pages/upload-image/upload-image.component';

export const routes: Routes = [
    // {path:'add-new-city',component:AddNewCityComponent},
    // {path:'get-all-cities',component:GetAllCitiesComponent},
    // {path:'get-all-users',component:GetAllUsersComponent},
    // {path:'add-new-user',component:AddNewUserComponent},
    // {path:'search/:mid',component:UserByIdComponent},
    // {path:'add-new-role',component:AddNewRoleComponent},
    // {path:'get-all-roles',component:GetAllRolesComponent},
    // {path:'add-new-product',component:AddNewProductComponent},
    // {path:'get-all-products',component:GetAllProductsComponent},
    // {path:'search1/:pid',component:ProductByIdComponent},
    // {path:'add-new-cart',component:AddNewCartComponent},
    // {path:'get-all-carts',component:GetAllCartsComponent},
    // {path:'search3/:cid',component:CartByIdComponent},
    // {path:'add-new-location',component:AddNewLocationComponent},
    // {path:'get-all-locations',component:GetAllLocationsComponent},
    // {path:'add-new-login',component:AddNewLoginComponent},
    // {path:'get-all-logins',component:GetAllLoginsComponent},
    // {path:'add-new-category',component:AddNewCategoryComponent},
    // {path:'get-all-categories',component:GetAllCategoriesComponent},
    // {path:'add-new-offer',component:AddNewOfferComponent},
    // {path:'get-all-offers',component:GetAllOffersComponent},
    // { path: 'login', component:LoginComponent },
    // {path:'admin-dashboard',component:AdminDashboardComponent}

    {path:'upload-image',component:UploadImageComponent},
    {
        path: 'customer-dashboard',
        component: CustomerDashboardComponent,
        children: [
          //{ path: 'search', component: SearchComponent },
          { path: 'login', component: LoginComponent },
          {path:'get-all-locations',component:GetAllLocationsComponent},
          {path:'customer-city-location',component:CustomerCityLocationComponent},
          // {path:''}
          {path:'add-new-cart',component:AddNewCartComponent},
          {path:'get-all-carts',component:GetAllCartsComponent},
          {path:'payment-page',component:PaymentPageComponent}
        ],
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        children: [
            {path:'add-new-city',component:AddNewCityComponent},
            {path:'get-all-cities',component:GetAllCitiesComponent},
            {path:'login', component: LoginComponent },
            {path:'add-new-location',component:AddNewLocationComponent},
            {path:'get-all-locations',component:GetAllLocationsComponent},
            {path:'get-all-products',component:GetAllProductsComponent},
            // {path:'add-new-product',component:AddNewProductComponent},
            // {path:'get-all-offers',component:GetAllOffersComponent},
            // {path:'get-all-categories',component:GetAllCategoriesComponent},
            
            

        ],
      },
      {
        path: 'supplier-dashboard',
        component: SupplierDashboardComponent,
        children: [
          //{ path: 'search', component: SearchComponent },
          { path: 'login', component: LoginComponent },
          
          {path:'get-all-supplier-products',component:GetAllSupplierProductsComponent},
          {path:'add-new-product',component:AddNewProductComponent,},
          {path:'get-all-offers',component:GetAllOffersComponent},
          {path:'get-all-categories',component:GetAllCategoriesComponent},
          {path:'get-all-locations',component:GetAllLocationsComponent},
          //{path:'product-by-id',component:ProductByIdComponent},
          {path:'search/:pid',component:ProductByIdComponent},
          // {path:'search1/:pid',component:ProductByIdComponent},
          {path:'add-new-offer',component:AddNewOfferComponent},
          {path:'add-new-category',component:AddNewCategoryComponent},
          // {path:'upload-image',component:UploadImageComponent}
          {path:'upload-image',component:UploadImageComponent},
        ],
      },
      { path: '', component: LoginComponent },
      {path:'user',component:UserComponent},
      {path:'login', component: LoginComponent },
      // {path:'upload-image',component:UploadImageComponent}
]
