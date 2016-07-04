# React Lighthouse [![Build Status](https://travis-ci.org/MunGell/react-lighthouse.svg?branch=master)](https://travis-ci.org/MunGell/react-lighthouse)

Simple React Router

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, RoutableMixin} from 'react-lighthouse';
import ShowPage from './components/ShowPage';
import ListPage from './components/ListPage';

const routes = {
    'show/:id': ShowPage,
    'list': ListPage,
    '*': ListPage
}

const App = React.createClass({
    mixins: [
        RoutableMixin
    ],

    render: function () {
        return (
            <div>
                {Router(routes, this.state.route, this.state)}
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
```
