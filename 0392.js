/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

expect(
  isSubsequence('', '')
).toBe(true);

expect(
  isSubsequence('', 's')
).toBe(true);

expect(
  isSubsequence('s', '')
).toBe(false);

var isSubsequence = function(s, t) {
  var lenS = s.length;
  var lenT = t.length;
  var i = 0;
  var j = 0;

  if (lenS > lenT) {
    return false;
  } else if (lenS === lenT) {
    for (i = 0; i < lenS; i++) {
      if (s.charAt(i) !== t.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  var dp = Array(lenS).fill(null);

  for (i = 0; i < lenS; i++) {
    j = i === 0 ? 0 : dp[i - 1] + 1;

    for (; j < lenT; j++) {
      if (s.charAt(i) === t.charAt(j)) {
        dp[i] = j;
        break;
      }
    }
    if (dp[i] === null) {
      return false;
    }
  }

  return true;
}
