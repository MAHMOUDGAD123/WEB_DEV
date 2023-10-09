#include <iostream>

struct obj final {
  int x = 0, y = 0;

  friend std::ostream &operator<<(std::ostream &out, const obj &O) {
    out << O.x << " - " << O.y;
    return out;
  }
};

int main(void)
{
  std::cout << "\n\n";

  std::cout << obj();

  std::cout << "\n\n\n";
}