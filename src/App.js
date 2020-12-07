import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login, Comidas, Perfil, Explorar, Bebidas, ReceitasFeitas,
  ReceitasFavoritas, ExplorarComidas, ExplorarBebidas,
  ExplorarBebidasIngredientes, ExplorarComidasIngredientes,
  ExplorarComidasPorLocalOrigem, ReceitaDetalhada } from './pages';
import NotFound from './pages/NotFound';

import ReceitasProvider from './context/ReceitasProvider';
import './App.css';
import './stylesCSS/Card.css';
import './stylesCSS/Login.css';
import './stylesCSS/Profile.css';
import './stylesCSS/Recomended.css';
import './stylesCSS/InitialPages.css';
import './stylesCSS/PageDetalhada.css';
import './stylesCSS/ExplorarPages.css';
import './stylesCSS/ResponsiveApp.css';
import './stylesCSS/ReceitasDoneFav.css';
import './stylesCSS/DetalhesResponsive.css';
import './stylesCSS/RecomendedResponsive.css';
import ReceitaEmProgresso from './pages/ReceitaEmProgresso';

function App() {
  return (
    <ReceitasProvider>
      <Switch>
        <Route exact path="/app-receitas/" component={ Login } />
        <Route exact path="/app-receitas/comidas" component={ Comidas } />
        <Route exact path="/app-receitas/bebidas" component={ Bebidas } />
        <Route exact path="/app-receitas/comidas/:id" component={ ReceitaDetalhada } />
        <Route exact path="/app-receitas/bebidas/:id" component={ ReceitaDetalhada } />
        <Route
          exact
          path="/app-receitas/bebidas/:id/in-progress"
          component={ ReceitaEmProgresso }
        />
        <Route
          exact
          path="/app-receitas/comidas/:id/in-progress"
          component={ ReceitaEmProgresso }
        />
        <Route
          exact
          path="/app-receitas/explorar/comidas"
          component={ ExplorarComidas }
        />
        <Route
          exact
          path="/app-receitas/explorar/bebidas"
          component={ ExplorarBebidas }
        />
        <Route
          exact
          path="/app-receitas/explorar/comidas/ingredientes"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/app-receitas/explorar/bebidas/ingredientes"
          component={ ExplorarBebidasIngredientes }
        />
        <Route
          exact
          path="/app-receitas/explorar/comidas/area"
          component={ ExplorarComidasPorLocalOrigem }
        />
        <Route
          exact
          path="/app-receitas/explorar/bebidas/area"
          component={ NotFound }
        />
        <Route
          exact
          path="/app-receitas/receitas-favoritas"
          component={ ReceitasFavoritas }
        />
        <Route exact path="/app-receitas/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/app-receitas/perfil" component={ Perfil } />
        <Route exact path="/app-receitas/explorar" component={ Explorar } />
      </Switch>
    </ReceitasProvider>
  );
}

export default App;
