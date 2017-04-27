import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

class Button extends React.Component {
  props: {
    children: string,
    onClick: Function,
  }

  propTypes = {
    children: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
  }

  render() {
    const { children, onClick } = this.props
    return (
      <button
        style={buttonStyles}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}

export default Button;
