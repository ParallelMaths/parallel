## 6. An easy puzzle

::: problem id=6 marks=3.5
__6.1__ I saw this in a newspaper – it was a puzzle for adults, fully grown humans, but
I think you will find it easy. All the digits from 1 to 9 are used in this grid,
but only once. Can you work out their positions in the grid so that each of the
six different sums work? Two of the numbers have been inserted in order to get
you started. Just identify the other seven numbers.

(NOTE: perform operations in the order they appear, e.g., `3 + 4 × 5 = 35` (not 23))

![](/resources/7-01-parallelogram/6-1-puzzle.png){style="width:400px"}

a = <input type="text" solution="6"/>  
b = <input type="text" solution="8"/>  
c = <input type="text" solution="7"/>  
d = <input type="text" solution="9"/>  
e = <input type="text" solution="3"/>  
f = <input type="text" solution="2"/>  
g = <input type="text" solution="4"/>

---

The easiest number to pin down is `d`, which has to be 9.

`5 ÷ 1 × 9 = 45`.

You may have followed a different route, but I then worked `c` and `g`. We know that
`9c + g` must equal 67, and `c` and `g` are single digits, so then `c = 7` and `g = 4`.

Now we know `c = 7`, then we also know that `a × b = 48`.

This means that a = 6 and b = 8 or a = 8 and b = 6.

We know that b + 1 is factor of 18 from the middle column, so `b = 8`.

We also know that `a × 5` is a factor of 90 from the 1st column, so `a = 6`.

And the rest is easy.

![](/resources/7-01-parallelogram/6-1-puzzle-solution.png){style="width:400px"}
:::
