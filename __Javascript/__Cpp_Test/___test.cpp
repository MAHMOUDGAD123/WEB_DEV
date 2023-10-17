#include <iostream>
#include <functional>

auto returnFun() {
  // return []() -> std::string { return "Mahmoud Gad"; };
  // return []() { return "Mahmoud Gad"; };
  return []() -> const char* { return "Mahmoud Gad"; };
}

int main(void)
{
  std::cout << "\n\n";

  auto fun = returnFun();

  std::cout << fun();

  std::cout << "\n\n\n";
}