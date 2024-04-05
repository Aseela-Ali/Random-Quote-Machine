import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import { Grid } from '@material-ui/core';
import QuoteMachine from './Components/QuoteMachine';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Set the height of the container to 100% of the viewport height
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      backgroundColor: '',
    };
    this.selectedQuoteIndex = this.selectedQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateRandomColor = this.generateRandomColor.bind(this);
  }

  componentDidMount() {
    this.generateRandomColor();
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotesData => {
        this.setState({
          quotes: quotesData,
          selectedQuoteIndex: Math.floor(Math.random() * quotesData.length)
        });
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }

  selectedQuoteIndex() {
    if (!this.state.quotes.length) {
      return null;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectedQuoteIndex() }, () => {
      this.generateRandomColor();
    });
  }

  generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.setState({
      backgroundColor: randomColor,
    });
  }

  render() {
    const { quotes, selectedQuoteIndex, backgroundColor } = this.state;
    const selectedQuote = quotes[selectedQuoteIndex];
    
    return (
      <div style={{...centerStyle, backgroundColor}}>
        <Grid id="quote-box">
          {selectedQuote && (
            <QuoteMachine
              selectedQuote={selectedQuote}
              assignNewQuoteIndex={this.assignNewQuoteIndex}
              backgroundColor={backgroundColor} // Pass background color to QuoteMachine
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default App;
