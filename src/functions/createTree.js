import Node from "../classes/node";

const createTree = (data) => {
    const rootNode = new Node();

    data.forEach(repo => {
        let lastNode = rootNode;

        for (let i = 0; i < repo.tree.length; i++) {
            if (i === repo.tree.length - 1) {
                lastNode.add(repo, repo.tree[i]);
            }

            lastNode = lastNode.fetch(repo.tree[i]);
        }
    });

    return rootNode;
}

export default createTree;