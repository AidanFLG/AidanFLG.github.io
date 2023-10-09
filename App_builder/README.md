# BlocklyLambda


A compiler from a blockly lambda calculus to JavaScript. 

[lc-with-arithmetic](https://alexhkurz.github.io/BlocklyLambdaCalculus/lc-with-arithmetic) is the basic version and consists of the (pure, untyped) lambda calculus plus some arithmetic. 

The compiler uses JavaScript variables and functions to implement lambda calculus variables and functions. **WARNING**: The JavaScript machine has an operational semantics that is different from the standard rewriting machine semantics of lambda calculus. For example, evaluate the following expressions pen-and-paper and in JavaScript.

- `(\x.\y.x+y) 3`
- `(\f.\x.f(f(x))) (\f.\x.(f(f(f x))))`

[lc-with-definitions](https://alexhkurz.github.io/BlocklyLambdaCalculus/lc-with-definitions/) adds function definitions to make it easier to create slightly larger examples such as Church numerals.
