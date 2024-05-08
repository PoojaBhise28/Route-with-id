import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';
// Assuming TestComponent is defined in a separate file

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    {
        path: 'child',
        component: ChildComponent,
        data: { title: 'Child' }
    },
     {
        path : 'test',
        component : TestComponent,
        title : "Test"
    },
    {
        path : 'test/:id',
        component : TestComponent,
        title : "Test"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
