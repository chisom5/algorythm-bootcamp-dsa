/**
 * @param {TreeNode | null} portfolio
 * @returns {TreeNode | null}
 */
function mirrorLedger(portfolio) {
  if(!portfolio){
    return null;
  }
  
  let t = portfolio.left;
  portfolio.left = portfolio.right;
  portfolio.right = t;

  mirrorLedger(portfolio.left);
  mirrorLedger(portfolio.right);

  return portfolio;

}
