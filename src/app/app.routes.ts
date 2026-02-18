import { Routes } from '@angular/router';
import { FormularioContato } from './componentes/paginas/formulario-contato/formulario-contato';
import { ListaContatos } from './componentes/paginas/lista-contatos/lista-contatos';
import { Login } from './componentes/paginas/login/login';
import { PerfilContato } from './componentes/paginas/perfil-contato/perfil-contato';


export const routes: Routes = [

     {
     path: 'login',
     component: Login

    },

    {
        path: 'perfil-contato',
        component: PerfilContato
    },
    {
        path: 'formulario',
        component: FormularioContato
    },

    {
        path: 'lista-contatos',
        component: ListaContatos
    },
    {
        path:"",
        redirectTo: '/lista-contatos',
        pathMatch: 'full'
        
    },

    


   
     


];


