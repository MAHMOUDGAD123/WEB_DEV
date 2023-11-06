#include <iostream>
#include <string>

static bool isPalindrome(const std::string &S, uint16_t from, uint16_t to) {
  while (from < to) if (S[from++] != S[to--]) return false;
  return true;
}

static std::string left_mirror(const std::string &S, int from) {
  while (S[from] == S[0]) ++from;
  int end(S.size());
  std::string mirror;
  mirror.reserve(2 * end-- - from);
  while (end >= from) mirror += S[end--];
  mirror += S;
  return isPalindrome(mirror, 0, mirror.size() - 1) ? mirror : left_mirror(S, 1);
}
static std::string right_mirror(const std::string &S, const int to) {
  int end(S.size() - 1);
  std::string mirror;
  mirror.reserve(2 * end - to);
  while (end > to) mirror += S[end--];
  mirror += S;
  return isPalindrome(mirror, 0, mirror.size() - 1) ? mirror : left_mirror(S, 1);
}

static std::string _shortestPalindrome(const std::string &S) {
  if (!S.size()) return {};
  const int end(S.size() - 1);
  if (isPalindrome(S, 0, end)) return S; // if S is already palindrome
  for (int first(1), last(end - 1); first < end || last; ++first, --last) {
    if (last) if (isPalindrome(S, 0, last)) return right_mirror(S, last);
    if (first < end) if (isPalindrome(S, first, end)) return left_mirror(S, first);
  }
  return left_mirror(S, 1);
}

static std::string shortestPalindrome(const std::string &S) {
  if (!S.size()) return {};
  std::string SP; SP.reserve(2 * S.size()); // reserve enough mem
  int f(S[0] == S[S.size() - 1] ? 1 : 0), l(S.size() - 1);
  for (; f < l; SP += S[l--])
    if (S[f] == S[l])
      ++f;
  int S_i = f ? f - 1 : 0, SP_i = SP.size() - 1; // save the indexes
  while (l >= 0)
    SP += S[l--]; // add the rest characters
  bool equal(true);
  const uint16_t S_len(S.size()), SP_len(SP.size());
  for (f = S_i, l = SP_i; l < SP_len; ++f, ++l) { // chech equality
    if (f >= S_len || S[f] != SP[l]) {
      equal = false; break;
    }
  }
  if (equal) {
    while (f < S_len)
      SP += S[f++];
  } else {
    while (S[S_i] == SP[SP_len - 1])
      ++S_i;
    while (S_i < S_len)
      SP += S[S_i++];
  }
  return SP;
}

int main(void) {
  std::cout << "\n\n";

  const std::string test[] {
    "aacecaaa", "aaceca", "aacec", "abcd", "abcda", "aabba", "ababba", "baabba", "ababa", "dfgrdgfdhdh",
    "nllynrwlxijbpxtrtwnxxaetdtwzcbljckitulbfurcxlcnlpbp"
  };

  for (const std::string &S : test) {
    const std::string res(shortestPalindrome(S));
    printf("%s  =>  %s (%d)\n", S.c_str(), res.c_str(), isPalindrome(res, 0, res.size() - 1));
  }
  
  // const std::string S(test[6]);
  // const std::string res(shortestPalindrome(S));
  // printf("%s  =>  %s\n", S.c_str(), res.c_str());
  // std::cout << std::boolalpha << isPalindrome(res, 0, res.size() - 1) << std::endl;

  std::cout << "\n\n";
}