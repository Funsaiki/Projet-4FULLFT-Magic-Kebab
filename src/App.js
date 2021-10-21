import './App.css';
import React from 'react'
import logo from './images/Magic-Kebab.png'
import Bread from './components/Bread'
import Meat from './components/Meat'
import Ingredients from './components/Ingredients'
import Sauces from './components/Sauces'
import Checkout from './components/Checkout'
import Waiting from './components/Waiting'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breadPage: true,
      meatPage: false,
      ingredientsPage: false,
      saucePage: false,
      checkout: false,
      waitingPage: false,
      sauces: [],
      STOchoice: [],
      kebab: {},
      kebabs: [],
    }
  }

  handler = (e) => {
    if (this.state.breadPage) {
      this.setState({
        breadPage: false,
        meatPage: true,
        kebab: {
          breadType: e.currentTarget.textContent
        }
      })
    } else if (this.state.meatPage) {
      this.setState({
        ingredientsPage: true,
        meatPage: false,
        kebab: {
          ...this.state.kebab,
          meatType: e.currentTarget.textContent
        }
      })
    }
    else if (this.state.ingredientsPage) {
      this.setState({
        ingredientsPage: false,
        saucePage: true,
        kebab: {
          ...this.state.kebab,
          ingredients: this.state.STOchoice
        }
      })
    }
    else if (this.state.saucePage) {
      this.setState({
        breadPage: true,
        saucePage: false,
        kebab: {
          ...this.state.kebab,
          sauces: this.state.sauces
        },
      }, () => {
        this.setState({
          kebabs: [...this.state.kebabs, this.state.kebab],
          checkout: true,
          sauces: [],
          STOchoice: [],
        })
      })
    }
  }

  addIngredients = (e) => {
    this.setState({
      STOchoice: [...this.state.STOchoice, e.currentTarget.textContent]
    })
  }

  addSauce = (e) => {
    if (this.state.sauces.length < 2) {
      this.setState({
        sauces: [...this.state.sauces, e.currentTarget.textContent]
      })
    }
  }

  checkout = () => {
    this.setState({
      breadPage: false,
      meatPage: false,
      ingredientsPage: false,
      saucePage: false,
      checkout: false,
      waitingPage: true,
      sauces: [],
      STOchoice: [],
      kebab: {},
      kebabs: [],
    })
  }

  render() {
    return (
      <div className='app-container'>
        {this.state.checkout && <Checkout kebabs={this.state.kebabs} orderKebab={this.checkout}/>}
        <div>
          <img src={logo} alt='logo' width='200px' />
          {this.state.breadPage && <Bread handler={this.handler} />}
          {this.state.meatPage && <Meat handler={this.handler} />}
          {this.state.ingredientsPage && <Ingredients handler={this.handler} addIngredients={this.addIngredients} />}
          {this.state.saucePage && <Sauces handler={this.handler} addSauce={this.addSauce} nbSauces={this.state.sauces.length}/>}
          {this.state.waitingPage && <Waiting/>}
        </div>
      </div>
    )
  }
}

export default App;
