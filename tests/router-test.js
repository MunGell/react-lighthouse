import {test} from 'tape';
import React from 'react';
import {Router} from '../';

const Page1 = () => {
    return <div>Page1</div>
};
const Page2 = () => {
    return <div>Page2</div>
};
const Page3 = () => {
    return <div>Page3</div>
};

test('Router function', t => {
    let routes = {
        route1: Page1,
        route2: Page2,
        route3: Page3
    };

    t.same(<Page1 params={{}}/>, Router(routes, 'route1'), 'identifies correct route');
    t.same(<Page2 params={{}}/>, Router(routes, 'route2'), 'identifies correct route');
    t.same(<Page3 params={{}}/>, Router(routes, 'route3'), 'identifies correct route');

    t.end();
});

test('Router function with wildcard', t => {
    let routes = {
        route1: Page1,
        route2: Page2,
        '*': Page3
    };

    t.same(<Page1 params={{}}/>, Router(routes, 'route1'), 'identifies correct route');
    t.same(<Page2 params={{}}/>, Router(routes, 'route2'), 'identifies correct route');
    t.same(<Page3 params={{}}/>, Router(routes, 'route3'), 'identifies correct route using wildcard');

    t.end();
});

test('Router function with parameters', t => {
    let routes = {
        'route1/:id': Page1,
        'route2': Page2,
        '*': Page3
    };

    t.same(<Page1 params={{id: '10'}}/>, Router(routes, 'route1/10'), 'identifies correct route with parameter');

    t.end();
});

test('Router function when route is not recognised', t => {
    let routes = {
        'route1/:id': Page1,
        'route2': Page2
    };

    t.same(undefined, Router(routes, 'unknown'), 'route is undefined');

    t.end();
});

test('Router function when passing props', t => {
    let routes = {
        'route1/:id': Page1,
        'route2': Page2
    };

    t.same(<Page2 params={{}} visible={true}/>, Router(routes, 'route2', {visible: true}), 'correct route that passes props');

    t.end();
});
