import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Router é o roteador, Route é a rota que eu quero
// o que renderizar de acordo com a rota
// importa todos components
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import LiveLecture from '../pages/LiveLecture';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import NotFound from '../pages/NotFound';
import Solution from '../pages/Solution';

class Content extends React.Component {
  // rotaParaComparar: '/' => urlAual: http://localhost:3000/calendar/dia13.2
  constructor (){
    super();
    this.state = { // define estado para compor Rota Alinhada 
      solutions: [
        {id: 'test', name: 'Aplicando rotas alinhadas'},
        {id: '11.1', name: 'Hello World no React'},
        {id: '11.2', name: 'Components React'},
      ],
    }
  }
// definiçao de rota mais interna apos acessar Gabarito (ROTAS ALINHADAS)

  render() {
    const { solutions } = this.state
    return (
      <main className="Content">
       <span> Main content </span>
       <p> Filhos do Route </p>
        <Switch>
          <Route path="/calendar/dia13.2">
            <TrybeTalks />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>

          <Route path="/solutions/:solutionID"  
          render= { (props) => <Solution {...props } allSolutions= {solutions}/>}/>

          <Route path="/live-lecture">
            <LiveLecture />
          </Route>
          <Route path="/solutions" 
          render= {(propsRouterDom)=> <Solutions
            match={propsRouterDom.match}
            allSolutions= {solutions} />}
          />

          <Route path="/trybe-talks">
            <TrybeTalks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Content;
// <Route path="/pageLocal">
// < PageImported />
// <Route /> 
// * como path not found = qualquer rota que nao foi mapeada
// <Switch>
// Renders the first child <Route> or <Redirect> that matches the location.
// <Switch> is unique in that it renders a route exclusively.
// In contrast, every <Route> that matches the location renders inclusively.
// Route recebe o caminho criado em Link to em SideBar.js 
// Switch leitura de cima pra baixo
// Switch -> rota mais especifica
// Content é modificado conforme troca a rota
// Route com render: permite passar outras propriedades
// Rotas alinhas de Solutions, altera arquivo