import './App.css';
import React from 'react'
import logo from './images/Magic-Kebab.png'
import Bread from './components/Bread'
import Meat from './components/Meat'
import STO from './components/STO'
import Sauces from './components/Sauces'
import Checkout from './components/Checkout'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breadPage: true,
      meatPage: false,
      stoPage: false,
      saucePage: false,
      checkout: false,
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
        stoPage: true,
        meatPage: false,
        kebab: {
          ...this.state.kebab,
          meatType: e.currentTarget.textContent
        }
      })
    }
    else if (this.state.stoPage) {
      this.setState({
        stoPage: false,
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

  addSTO = (e) => {
    this.setState({
      STOchoice: [...this.state.STOchoice, e.currentTarget.textContent]
    })
  }

  addSauce = (e) => {
    this.setState({
      sauces: [...this.state.sauces, e.currentTarget.textContent]
    })
  }

  render() {
    return (
      <div className='app-container'>
        {this.state.checkout && <Checkout kebabs={this.state.kebabs} />}
        <div>
          <img src={logo} alt='logo' width='200px' />
          {this.state.breadPage && <Bread handler={this.handler} />}
          {this.state.meatPage && <Meat handler={this.handler} />}
          {this.state.stoPage && <STO handler={this.handler} addSTO={this.addSTO} />}
          {this.state.saucePage && <Sauces handler={this.handler} addSauce={this.addSauce} />}
        </div>
      </div>
    )
  }
}

export default App;
