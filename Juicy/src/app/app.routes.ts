import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { StartersComponent } from './pages/starters/starters.component';
import { MainsComponent } from './pages/mains/mains.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'starters', component: StartersComponent, canActivate: [authGuard] },
    { path: 'mains', component: MainsComponent, canActivate: [authGuard] },
    { path: 'desserts', component: DessertsComponent, canActivate: [authGuard] },
    { path: 'recipe/:id', component: RecipeComponent },
];
