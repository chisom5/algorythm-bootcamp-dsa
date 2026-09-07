/**
 * @param {TreeNode | null} root
 * @param {number} val
 * @returns {TreeNode | null}
 */

function searchBST(root, val) {
    if (!root) {
        return null;
    }
    let node = root;

    while (node) {
        if (val == node.val) {
            return node;
        } else if (val < node.val) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return null;
}
