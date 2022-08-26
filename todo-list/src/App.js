import React from "react";

import "./App.css";

import colorStar from "./assent/star-color.svg";
import star from "./assent/star.svg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          name: "Task 1",
          complete: true,
          marked: true,
        },
        {
          id: 2,
          name: "Task 2",
          complete: false,
          marked: false,
        },
        {
          id: 3,
          name: "Task 3",
          complete: true,
          marked: true,
        },
        {
          id: 4,
          name: "Task 4",
          complete: false,
          marked: false,
        },
      ],
      value: "",
    };
  }

  addTodo = (event) => {
    event.preventDefault();

    let { todos, value } = this.state;

    if (value) {
      const newTodo = {
        id: new Date().getTime(),
        name: value,
        complete: false,
        marked: false,
      };
      this.setState({ todos: [...todos, newTodo], value: "" });
    }
  };

  deleteTodo = (targetId) => {
    let { todos } = this.state;

    const arr = todos.filter(({ id }) => id !== targetId);

    this.setState({ todos: arr });
  };

  completeTodo = (targetId) => {
    let { todos } = this.state;

    const arr = todos.map((todo) => {
      let { id, complete } = todo;

      if (id === targetId) {
        todo.complete = !complete;
      }
      return todo;
    });

    this.setState({ todos: arr });
  };

  markeTodo = (targetId) => {
    let { todos } = this.state;

    const arr = todos.map((todo) => {
      let { id, marked } = todo;

      if (id === targetId) {
        todo.marked = !marked;
      }
      return todo;
    });

    this.setState({ todos: arr });
  };

  render() {
    let { todos, value } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <h1 className="title">Hello, User!</h1>
          <h2 className="subtitle">
            You have{" "}
            <span className="subtitle-new-tasks">
              {todos.filter(({ complete }) => !complete).length} new tasks
            </span>{" "}
            today
          </h2>
          <form className="todo-form" onSubmit={this.addTodo}>
            <input
              type="text"
              className="todo-input"
              placeholder="Task name..."
              value={value}
              onChange={({ target }) => this.setState({ value: target.value })}
            />
            <button className="button main-button">Add</button>
          </form>
          <ul className="todo-list">
            {todos.map(({ id, name, complete, marked }) => (
              <li className="todo-item" key={id}>
                <div className="item-main">
                  <label className="todo-checkbox">
                    <input
                      type="checkbox"
                      name="todo task complete"
                      className="todo-checkbox-real"
                      checked={complete}
                      onChange={(el) => this.completeTodo(id)}
                    />
                    <div className="todo-checkbox-fake"></div>
                  </label>
                  <h4 className="todo-name">{name}</h4>
                </div>
                <div className="todo-buttons">
                  <button
                    className="button task-button delete-button"
                    onClick={(el) => this.deleteTodo(id)}
                  >
                    <svg
                      className="icon"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="garbage-can">
                        <g id="can">
                          <path
                            id="bg-can"
                            d="M106 153V422C106 436.092 105.779 446.103 106.789 454C107.929 462.915 112 471.5 116.5 476C121 480.5 127.962 485.477 136.5 486.87C142.862 487.909 151.696 488 166 488H345.979C360.283 488 369.117 487.909 375.479 486.87C384.018 485.477 390.979 480.5 395.479 476C399.979 471.5 404.05 462.915 405.19 454C406.2 446.103 405.979 436.092 405.979 422V151.5L106 153Z"
                            fill="#00EFD1"
                          />
                          <g id="vector-can">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M82 132V446C82 476 99 492.5 99 492.5C99 492.5 116.5 512 142 512H366.5C397.5 512 412.5 493 412.5 493C412.5 493 429.5 477.5 429.5 447.5V132H82ZM106 422V153L405.979 151.5V422C405.979 436.092 406.2 446.103 405.19 454C404.05 462.915 399.979 471.5 395.479 476C390.979 480.5 384.018 485.477 375.479 486.87C369.117 487.909 360.283 488 345.979 488H166C151.696 488 142.862 487.909 136.5 486.87C127.962 485.477 121 480.5 116.5 476C112 471.5 107.929 462.915 106.789 454C105.779 446.103 106 436.092 106 422Z"
                              fill="#333333"
                            />
                            <path
                              d="M339 388.5V196.875C339 193.726 337.736 190.705 335.485 188.478C333.235 186.251 330.183 185 327 185C323.817 185 320.765 186.251 318.515 188.478C316.264 190.705 315 193.726 315 196.875V388.5V424.125C315 427.274 316.264 430.295 318.515 432.522C320.765 434.749 323.817 436 327 436C330.183 436 333.235 434.749 335.485 432.522C337.736 430.295 339 427.274 339 424.125V388.5Z"
                              fill="#333333"
                            />
                            <path
                              d="M268 388.5V196.875C268 193.726 266.736 190.705 264.485 188.478C262.235 186.251 259.183 185 256 185C252.817 185 249.765 186.251 247.515 188.478C245.264 190.705 244 193.726 244 196.875V388.5V424.125C244 427.274 245.264 430.295 247.515 432.522C249.765 434.749 252.817 436 256 436C259.183 436 262.235 434.749 264.485 432.522C266.736 430.295 268 427.274 268 424.125V388.5Z"
                              fill="#333333"
                            />
                            <path
                              d="M196.5 388.5V196.875C196.5 193.726 195.236 190.705 192.985 188.478C190.735 186.251 187.683 185 184.5 185C181.317 185 178.265 186.251 176.015 188.478C173.764 190.705 172.5 193.726 172.5 196.875V388.5V424.125C172.5 427.274 173.764 430.295 176.015 432.522C178.265 434.749 181.317 436 184.5 436C187.683 436 190.735 434.749 192.985 432.522C195.236 430.295 196.5 427.274 196.5 424.125V388.5Z"
                              fill="#333333"
                            />
                          </g>
                        </g>
                        <g id="lid">
                          <path
                            id="bg-lid"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M78.487 123.556C74.3335 119.431 72 113.835 72 108C72 102.165 74.3335 96.5695 78.487 92.4436C82.6406 88.3178 88.2741 86 94.1481 86H98H415H418.852C424.726 86 430.359 88.3178 434.513 92.4436C438.667 96.5695 441 102.165 441 108C441 113.835 438.667 119.431 434.513 123.556C430.359 127.682 424.726 130 418.852 130H415H98H94.1481C88.2741 130 82.6406 127.682 78.487 123.556Z"
                            fill="#00ACEA"
                          />
                          <path
                            id="vector-lid"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M49 108C49 120.2 53.8464 131.9 62.4731 140.527C71.0998 149.154 82.8 154 95 154H103H410H418C430.2 154 441.9 149.154 450.527 140.527C459.154 131.9 464 120.2 464 108C464 95.8 459.154 84.0998 450.527 75.4731C441.9 66.8464 430.2 62 418 62H410H356.5V53.5C356.5 24.2758 334.968 0.5 308.5 0.5H203C176.532 0.5 155 24.2758 155 53.5V62H103H95C82.8 62 71.0998 66.8464 62.4731 75.4731C53.8464 84.0998 49 95.8 49 108ZM78.487 123.556C74.3335 119.431 72 113.835 72 108C72 102.165 74.3335 96.5695 78.487 92.4436C82.6406 88.3178 88.2741 86 94.1481 86H98H415H418.852C424.726 86 430.359 88.3178 434.513 92.4436C438.667 96.5695 441 102.165 441 108C441 113.835 438.667 119.431 434.513 123.556C430.359 127.682 424.726 130 418.852 130H415H98H94.1481C88.2741 130 82.6406 127.682 78.487 123.556ZM179 47.5C179 34.8178 187.972 24.5 199 24.5H312.5C323.528 24.5 332.5 34.8178 332.5 47.5V62H179V47.5Z"
                            fill="#333333"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <button
                    className="button task-button"
                    onClick={(el) => this.markeTodo(id)}
                  >
                    <img
                      className="icon"
                      src={marked ? colorStar : star}
                      alt="Star"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
