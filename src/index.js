import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";
import CounterButton from "./components/common/CounterButton";
import DisplayCounter from "./components/counter/displayCounter";
import { useFetchCounter } from "./apollo/hooks";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  clientState: {
    defaults: {
      counter: 0,
    },
  },
});

const App = () => {
  const { data, client } = useFetchCounter();
  return (
    <React.StrictMode>
      <DisplayCounter counter={data.counter} />
      <CounterButton
        text="Increment Counter"
        color="primary"
        onAction={() =>
          client.writeData({
            data: {
              counter: data.counter + 1,
            },
          })
        }
      />
      <CounterButton
        text="Decrement Counter"
        color="secondary"
        counter={data.counter}
        onAction={() =>
          client.writeData({
            data: {
              counter: data.counter - 1,
            },
          })
        }
      />
      <CounterButton
        text="Reset Counter"
        counter={data.counter}
        onAction={() =>
          client.writeData({
            data: {
              counter: 0,
            },
          })
        }
      />
    </React.StrictMode>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
