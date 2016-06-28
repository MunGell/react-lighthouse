import React from 'react';
import RoutePattern from 'route-pattern';

/**
 * Routing function
 * @param {Object} routes
 * @param {String} route
 * @param {Object} props
 * @returns {React.Component}
 */
export function Router(routes, route, props) {
    props = props || {};
    for (let r in routes) {
        let matchedRoute = RoutePattern.fromString(r).match(route);
        if (matchedRoute !== null) {
            const Component = routes[r];
            return <Component params={matchedRoute.namedParams} {...props}/>;
        }
    }
}

/**
 * React mixin for routable component.
 * Basically makes component route-aware.
 * @type {Object}
 */
export const RoutableMixin = {
    /**
     * Makes sure component is aware of the current route
     * in the very beginning
     * @returns {Object}
     */
    getInitialState: function () {
        return {
            route: getRoute()
        };
    },

    /**
     * Sets listener for route change event
     * (hash change)
     */
    componentWillMount: function () {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: getRoute()
            });
        });
    }
};

/**
 * Returns current route
 * @returns {string}
 */
export function getRoute() {
    return window.location.hash.replace('#', '');
}
