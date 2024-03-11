import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowsListComponent } from './pages/shows-list/shows-list.component'
import { GenresComponent } from './pages/genres/genres.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:type', component: ShowsListComponent },
  { path: 'detail/:id/:type', component: ShowDetailComponent },
  { path: 'genres', component: GenresComponent },
] // here we are creating/ accessing the different routes but now we are going to specify the paths itself
// that is id and type whether it is tv series or movies whatever it is accordingly we will go through it
//here in the above route for detail we are specifying the parameter itself that is the id itself which helps in redirecting to another file
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// import { NgModule } from '@angular/core';: This line imports the NgModule decorator from the @angular/core module. The NgModule decorator is used to define Angular modules.

// import { RouterModule, Routes } from '@angular/router';: This line imports the RouterModule and Routes types from the @angular/router module. The RouterModule provides routing functionality for Angular applications, while Routes is a type used to define routes.

// const routes: Routes = [];: This line declares a constant variable routes and initializes it as an empty array of type Routes. In Angular, routes are defined using an array of Route objects. However, in this case, the routes array is empty, indicating that there are currently no defined routes.

// @NgModule({ ... }): This is the NgModule decorator, which is used to define Angular modules. It takes a metadata object as an argument, containing various configuration options.

// imports: [RouterModule.forRoot(routes)]: This property of the metadata object specifies the Angular modules that are imported into this module. In this case, it imports the RouterModule module and calls its forRoot() method with the routes array as an argument. The forRoot() method initializes the router with the provided routes.

// exports: [RouterModule]: This property specifies which components, directives, and pipes are exported from this module and can be used in other modules. Here, it exports the RouterModule, allowing other modules in the application to access the router-related functionality provided by RouterModule.

// export class AppRoutingModule { }: This line defines a TypeScript class named AppRoutingModule and exports it. This class represents the Angular module for routing in the application. By exporting the class, other modules can import it and use its routing configuration.
