class Node {
    constructor () {
        this.children = {};
    }

    add (child, key) {
        this.children[key] = child;
    }

    fetch (key) {
        if (key in this.children) return this.children[key];

        this.add(new this.constructor(), key);
        return this.children[key];
    }
}

export default Node;
