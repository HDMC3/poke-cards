import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSelectionComponent } from './pages/pokemon-selection/pokemon-selection.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonSelectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule { }
