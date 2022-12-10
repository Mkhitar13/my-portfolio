import React from 'react';

class MenuButton extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  open: this.props.open ? this.props.open : false,
                  color: this.props.color ? this.props.color : 'black',
                  width: this.props.width,
            }
      }

      componentWillReceiveProps(nextProps) {
            if (nextProps.open !== this.state.open) {
                  this.setState({ open: nextProps.open });
            }
      }

      handleClick() {
            this.setState({ open: !this.state.open });
      }

      render() {
            const styles = {
                  container: {
                        height: '42px',
                        width: '42px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'start',
                        cursor: 'pointer',
                        padding: '4px',
                  },
                  line: {
                        height: '3px',
                        // width: '20px',
                        transition: 'all 0.2s ease',
                        background: "white",
                  },
                  lineTop: {
                        width: !this.state.open ? this.state.width = '40px' : '25px',
                        transform: this.state.open ? 'rotate(45deg)' : 'none',
                        transformOrigin: 'top left',
                        marginBottom: '5px',
                  },
                  lineBottom: {
                        width: '25px',
                        transform: this.state.open ? 'translateX(1px) rotate(45deg)' : 'none',
                        transformOrigin: 'top left',
                        marginTop: '10px',
                        color: "white"
                  },
            }
            return (
                  <div style={styles.container}
                        onClick={this.props.onClick ? this.props.onClick :
                              () => { this.handleClick(); }}>

                        <div style={{ ...styles.line, ...styles.lineTop }} />
                        <div style={{ ...styles.line, ...styles.lineBottom }} />
                  </div>
            )
      }
}
export default MenuButton;