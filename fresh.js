// PURE FUNCTIONS
// - behave like math functions
// - dont manipulate input arrays

/**
 * Gets prefix of desired length.
 * @param {Array} x array
 * @param {number} n prefix length
 * @returns {Array} prefix
 */
function take(x, n) {
  return x.slice(0, n);
}

/**
 * Gets elements after prefix.
 * @param {Array} x array
 * @param {number} n prefix length
 * @returns {Array} suffix
 */
function drop(x, n) {
  return x.slice(n);
}

/**
 * Gets longest prefix that satisfies filter.
 * @param {Array} x array
 * @param {function} fn filter function (elem, index, array)
 * @param {object?} ths this argument
 * @returns {Array} prefix
 */
function takeWhile(x, fn, ths=null) {
  return x.slice(0, findFailIndex(x, fn, ths));
}

/**
 * Get suffix remaining after takeWhile().
 * @param {Array} x array
 * @param {function} fn filter function (elem, index, array)
 * @param {object?} ths this argument
 * @returns {Array} suffix
 */
function dropWhile(x, fn, ths=null) {
  return x.slice(findFailIndex(x, fn, ths));
}

function findFailIndex(x, fn, ths=null) {
  var i = -1;
  for(var e of x)
    if(!fn.call(ths, e, ++i, x)) break;
  return i;
}




// IMPURE FUNCTIONS
// - dont behave like math functions
// - manipulate input arrays

function cons() {

}

function uncons() {
  
}

// zip?
function transpose() {

}

function splitAt(x, i) {
  return [x.slice(0, i), x.slice(i)];
}

// concat$
function dropWhileEnd(x, fn, ths=null) {
  var i = x.findLastNotIndex(x, fn, ths);
  return x.slice(0, i+1);
}

// splitAt / breka?
function span(x, fn, ths=null) {
  var i = x.findNotIndex(x, fn, ths);
  return [x.slice(0, i), x.slice(i)];
}

function breaks(x, fn, ths=null) {
  var i = x.findIndex(x, fn, ths);
  return [x.slice(0, i), x.slice(i)];
}

function stripPrefix(x, y) {
  if(!isPrefixOf(x, y)) return null;
  return x.slice(y.length);
}

function group(x) {
  var a = [], b = [];
  for(var e of x) {
    if(e===last(b)) b.push(e);
    else { a.push(b); b = []; }
  }
  if(b.length) a.push(b);
  return a;
}





exports.head = head;
exports.last = last;
exports.init = init;
exports.tail = tail;
exports.inits = inits;
exports.tails = tails;
exports.permutations = permutations;
exports.subsequences = subsequences;
exports.max = max;
exports.min = min;
exports.take = take;
exports.drop = drop;
exports.takeWhile = takeWhile;
exports.dropWhile = dropWhile;
exports.partition = partition;
exports.zip = zip;
exports.append = append;
