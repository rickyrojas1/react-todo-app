import PropTypes from "prop-types";
import React from "react";

const noop = () => {};

/**
 * TodoForm component
 * @class
 */
class TodoForm extends React.Component {
  /**
   * Base CSS class
   *
   */
  baseCls = "todo-form";

  /**
   * Prop Types
   * @static
   */
  static propTypes = {
    onSubmit: PropTypes.func,
    updateTodos: PropTypes.func
  };

  static defaultProps = {
    onSubmit: noop,
    onSubmit: noop
  };

  /**
   * Constructor
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = { input: "" };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * On change handler for input field
   * @param  {object} e - Event object
   */
  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  /**
   * On submit handler for submitting form
   * @param  {object} e - Event object
   */
  onSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.input);

    this.setState({ input: "" });
  }

  /**
   * Render
   * @returns {ReactElement}
   */
  render() {
    return (
      <form className={this.baseCls} onSubmit={this.onSubmit}>
        <input
          className={`${this.baseCls}__input`}
          onChange={this.onChange}
          placeholder="Add new todo..."
          value={this.state.input}
        />
      </form>
    );
  }
}

export default TodoForm;
