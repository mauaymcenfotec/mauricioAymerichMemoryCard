export const div = function (parent, attributes) {
    return createElement('div', parent, attributes);
}

export const p = function (parent, attributes) {
    return createElement('p', parent, attributes);
}

export const img = function (parent, attributes) {
    return createElement('img', parent, attributes);
}

const createElement = function (type, parent, attributes) {
    let element = document.createElement(type);
    parent;
};