import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: 'white', // Set the background color of the card to white
    color: backgroundColor, // Set the text color to match the background color of the page
    maxWidth: '600px', // Set the maximum width of the card
  };

  const iconStyle = {
    color: backgroundColor, // Set the color of the Twitter and Facebook icons to match the background color of the page
    marginRight: '8px', // Add some space between the icons
  };

  const authorStyle = {
    textAlign: 'right', // Align the author text to the right
    fontSize: '16px', // Set the font size to 16px
    fontWeight: 'normal', // Set the font weight to normal
  };

  const signatureStyle = {
    marginTop: '16px', // Add some space above the signature
    color: 'white', // Set the text color of the signature to white
    textAlign: 'center', // Align the signature text to the center
  };

  return (
    <div>
      <Card style={cardStyle}>
        <CardContent>
          <Typography id="text" style={{ fontSize: '36px' }}>
            {"“" + selectedQuote.quote + "”"}
          </Typography>
          <Typography id="author" style={{ ...authorStyle, color: backgroundColor }}>
            - {selectedQuote.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button id="new-quote" size="small" onClick={assignNewQuoteIndex} style={{ color: backgroundColor }}>Next Quote</Button>
          <IconButton
            id="tweet-quote"
            target="_blank"
            href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`)}
          >
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
          </IconButton>
          <IconButton
            id="facebook-share"
            target="_blank"
            href={encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)}
          >
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
          </IconButton>
        </CardActions>
      </Card>
      <Typography variant="subtitle2" style={signatureStyle}>
        by Aseela Ali
      </Typography>
    </div>
  );
};

export default QuoteMachine;
