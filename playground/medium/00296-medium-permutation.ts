/*
  296 - Permutation
  -------
  by Naoto Ikuno (@pandanoir) #medium #union

  ### Question

  Implement permutation type that transforms union types into the array that includes permutations of unions.

  ```typescript
  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
  ```

  > View on GitHub: https://tsch.js.org/296
*/

/* _____________ Your Code Here _____________ */

type CreateArray<_Union, _Arr extends any[]> = (
    _Union extends never
        ? []
        : CreateArray<Exclude<_Union, _Union>, [..._Arr, string]>
);


type qwe2 = Exclude<'a' | 'b', 'a' | 'b'>

type qwe1 = CreateArray<'A' | 'B', []>;
//   ^?

type Permutation<_Union, _Arr extends any[] = []> = (
    _Union extends infer _Val
        ? Permutation<Exclude<_Union, _Val>, [..._Arr, _Val]>
        : never
);

type qwe = Permutation<'A' | 'B'>;
//    ^?

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/296/answer
  > View solutions: https://tsch.js.org/296/solutions
  > More Challenges: https://tsch.js.org
*/
