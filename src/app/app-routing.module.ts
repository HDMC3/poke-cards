import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/editor',
        pathMatch: 'full'
    },
    {
        path: 'editor',
        loadChildren: () => import('./modules/editor/editor.module').then(m => m.EditorModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
