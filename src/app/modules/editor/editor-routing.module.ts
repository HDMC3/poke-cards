import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeCardComponent } from './pages/customize-card/customize-card.component';
import { PokemonSelectionComponent } from './pages/pokemon-selection/pokemon-selection.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonSelectionComponent
    },
    {
        path: 'customize-card',
        component: CustomizeCardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule { }
