import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import  {Card} from './component/Cards';


class App extends Component {

  state = {
    autor: '',
    background : '',
    quote: ''
  }
  // primeiro método  componente
 async componentDidMount() {
  console.log(this.props);
    const responseApi = await axios.get('https://quotes.rest/qod')
    .then((res) =>{
      return res.data;
    })
    .catch((error)=>{
      return error;
    })

    const autor = responseApi.contents.quotes[0].author;
    const background = responseApi.contents.quotes[0].background;
    const quote = responseApi.contents.quotes[0].quote;

    this.setState({autor});
    this.setState({background});
    this.setState({quote});
    console.log(responseApi);
  }


  render(){
      return (
        <div className="App">
          <header className="App-header">
            <div>
              <Card
                autor = {this.state.autor}
                quote = {this.state.quote}
                background = {this.state.background}
              />
            </div>
          </header>
        </div>
      );
    } // fechando o render
  
  } // fim da classe App

export default App;
