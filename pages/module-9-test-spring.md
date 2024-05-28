# Euclid Module 5 Spring Test 2024


## 1.
::: problem id=1_1 marks=1
What is the lowest common multiple of 12 and 13?  

<input type="number" solution="156"/> 

---

12 and 13 are coprime so we simply multiply the two numbers: 12 × 13 = 156.
:::


## 2.
::: problem id=2_1 marks=1 
The interior angles of a regular polygon sum to 1440°.  

How many sides does the polygon have?  

<input type="number" solution="10"/> 

---

If N is the number of sides, then the internal angles sum to (N – 2) × 180°, which means (N – 2) × 180 = 1440 . Solve this to get N = 10.
:::


## 3.
::: problem id=3_1 marks=1
If the ratio of boys to girls in a class is 3:4 and there are 15 boys, how many students are there altogether?   

* [ ] 20
* [ ] 25
* [ ] 30
* [x] 35
* [ ] 40
{.col-5}

---

15 boys represent `3/(3+4) = 3/7` of the total number of students.  

So the total number of students is 7/3 × 15 = 35.
:::


## 4.
::: problem id=4_1 marks=1
Which of these is prime?

* [ ] 873
* [ ] 879
* [ ] 891
* [x] 887
* [ ] 897
{.col-5}

---

887 is prime. All the others are divisible by 3 (sum the digits and use the divisibility check for 3).
:::


## 5.
::: problem id=5_1 marks=1
Which of these statements follows from the diagram?   

![](/resources/module-9-test-spring/5-diagram.png){image align="right"}


* [ ] X = Y
* [ ] X = Y + Z
* [ ] X + Y + Z = 188°
* [x] X + Y + Z = 172°
* [ ] X = Z

---

Angles at a point sum to 360°, therefore  

X + Y + Z = 360° – 139° – 49° = 172°.
:::


## 6.
::: problem id=6_1 marks=1
Which of these is largest? 

* [x] `4^4`
* [ ] `3^5`
* [ ] `5^3`
* [ ] `6^2`
* [ ] `2^6`
{.col-5}

---

The values, respectively, are  

* `4^4 = 256`
* `3^5 = 243`
* `5^3 = 125`
* `6^2 = 36`
* `2^6 = 64`
:::



## 7.
::: problem id=7_1 marks=1
What number must be removed from the set {4, 6, 12, 15, 23} to leave a mean of 14?   

* [x] 4
* [ ] 6
* [ ] 12
* [ ] 15
* [ ] 23
{.col-5}

---

The total of all five numbers is 60 and, once a number is removed, we are left with four numbers.  

Those four numbers have a mean of 14 if their total is 56. So we must remove the 4.  
:::


## 8.
::: problem id=8_1 marks=1
If you roll a fair six-sided die twice, what is the probability that you get the same number twice?   

* [ ] `1/2`
* [ ] `1/4`
* [x] `1/6`
* [ ] `1/36`
* [ ] `1`
{.col-5}

---

Whatever you roll on the first die, the second die has six possible values, only one of which matches the first roll.  
So the probability of getting a match is `1/6`.
:::



## 9.
::: problem id=9_1 marks=1
I bought 100 chocolates from a wholesaler.  

Aeros cost 35p each; Boost Bites cost 5p each; Caramel Chews cost 40p for three.  

If I spent £10 altogether, what’s the smallest number of Caramels I could have bought?

<input type="number" solution="6"/>

---

Let the number of purchases I made be 𝑎,𝑏,𝑐 (where each 𝑐 is a set of three bars). Then we have:  

* `a + b + 3c = 100`
* `35a + 5b + 40c = 1000`

Dividing the second equation by 5 gives `7a + b + 8c = 200`  

Subtracting gives `6𝑎 + 5𝑐 = 100`  

Setting `a = 5d` gives `6d + c = 20`  

Setting `c = 2e` gives `3d + e = 10`  

This gives three possibilities: d = 1, e = 7; d = 2, e = 4; d = 3, e = 1.  

Which yield three possible sets of bars:  
* 5 Aeros, 53 Boosts, 42 Caramels;  
* 10 Aeros, 66 Boosts, 24 Caramels;  
* 15 Aeros, 79 Boosts, 6 Caramels  
:::



## 10.
::: problem id=10_1 marks=1
What is the remainder when you divide `2^20 + 3^30 + 4^40 + 5^50 + 6^60` by 7?  

(Hint: remember Fermat’s Little Theorem)  

<input type="number" solution="0"/>

---

By Fermat’s Little Theorem, `a^6 ≡ 1` (mod 7) as long as `a ≡ /0` (mod 7)  

So `2^20 + 3^30 + 4^40 + 5^50 + 6^60 ≡ 2^2 + 3^0 + 4^4 + 5^2 + 6^0` (mod 7)  

Since `4^4 = 2^8`, we can simplify this further to  

`2^2 + 3^0 + 2^2 + 5^2 + 6^0 = 4 + 1 + 4 + 25 + 1 = 35`.  

Which is divisible by 7.  
:::


## 11.
::: problem id=11_1 marks=1
What value should appear in the bottom-left cell of this 4x4 Towers game?  

(Reminder: the numbers on the outside tell you how many towers you can see from that position)  

![](/resources/module-9-test-spring/11-grid.png){image align="center"}

* [ ] 1
* [x] 2
* [ ] 3
* [ ] 4
{.col-4}

---

![](/resources/module-9-test-spring/11-grid-answer.png){image align="center"}
:::


## 12.
::: problem id=12_1 marks=1
Bela and Chahaya share out `n` cards between them.  

The cards are numbered in sequence starting from 1.  

They end up in such a way that Bela has exactly one card with a multiple of the prime `p` and Chahaya has exactly one card with a multiple of the prime `q`.  

In terms of `p` and `q`, what is the largest possible value of `n`?   

* [ ] `pq − 1`, `pq`,
* [ ] `2pq − 1`
* [ ] `2pq`,
* [x] `3pq - 1`
* [ ] `3pq`  

---

There can be at most two cards that are multiples of both `p` and `q`, otherwise both Bela and Chahaya must take one of each, and then neither of them can take the third. 

So `n ≤ 3pq − 1`.  
:::


## 13.
::: problem id=13_1 marks=1
![](/resources/module-9-test-spring/13-diagram.png){image align="right"}
I have a set of seven cylindrical pencils, each of which has a diameter of 2.  

I hold them together tightly with a rubber band as shown.  

What is the area enclosed by the band? 

* [ ] `7π + 2`
* [ ] `6(π + sqrt(3))`
* [ ] `π + 24`
* [x] `π + 12 + 6sqrt(3)`
* [ ] `8π − 6sqrt(3)`  

---

The area consists of 6 sectors that make a full circle of radius 1; six rectangles each 2 by 1, and a hexagon made of six equilateral triangles of side 2.  

![](/resources/module-9-test-spring/13-diagram-answer.png){image align="center"} 

This gives a total area of π + 12 + 6sqrt(3).
:::


## 14.
::: problem id=14_1 marks=1
![](/resources/module-9-test-spring/14-diagram.png){image align="right"}
I have a set of seven cylindrical pencils, each of which has a diameter of 2.  

I hold them together tightly with a rubber band as shown.  

What is the area enclosed by the band? 

* [ ] 120°
* [ ] 122.5°
* [x] 135°
* [ ] 150°
* [ ] 165°

---

Since the squares meet the circle, the angle in a semicircle theorem says that you can extend one side to the other end of the diameter as shown.  

![](/resources/module-9-test-spring/14-diagram-answer.png){image align="center"}

As this is the diagonal of the other square, the given angle must be 180° - 45° = 135°.  
:::


## 15.
::: problem id=15_1 marks=1
Four of these points lie on the same circle.  

Which point does not lie on that circle?  

* [ ] (-6, 8)
* [ ] (-10, 0)
* [ ] (0, 10)
* [x] (5, 5)
* [ ] (8, 6)
{.col-5}

---

For points A, B, C and E, the `x` and `y` co-ordinates satisfy.  

`x^2 + y^2 = 100`,  

which means they lie on a circle with centre (0, 0) and radius 10.  

For the point (5, 5), `x^2 + y^2 = 50`, so it does not lie on this circle.
:::


## 16.
::: problem id=16_1 marks=1
When I increase a number by 10% I get twice as much as when I decrease 7 less the number by 10%.  

What is that number?  

<input type="number" solution="18"/>

---

Let `a` be the number, then  

`1.1a = 2 × 0.9(a – 7)`

Rearrange this equation to get `0.7a = 1.8 × 7`, which can be solved to get `a = 18`.  
:::


## 17.
::: problem id=17_1 marks=1
What is the remainder when 1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10! is divided by 6?

<input type="number" solution="3"/>

---

Every term from 6! onwards is obviously divisible by 6 and leaves no remainder.  

5! also has a factor of 6 (as it has factors of 2 and 3) and likewise for 3!  

So the only terms left to consider are 1! + 2! + 4! = 27, and this leaves a remainder of 3 when divided by 6.
:::


## 18.
::: problem id=18_1 marks=1
In the grid shown the three non-zero numbers in each row, each column and each diagonal multiply to give the same product.  

What is the value of `x`?  

![](/resources/module-7-test-spring/18-grid.png){image align="center"}

<input type="number" solution="50"/>

---

Let the missing value on the bottom row be `n` and the value above the 10 be `m`.  

Then `10mn = 10n`, therefore `m = 1`.  

Let the value in the top right be `y`.  

Then `xy = 50y`, so `x = 50`.  
:::


## 19.
::: problem id=19_1 marks=1
A shop sign says, “T-shirts. Four for the price of three. Equivalent to a saving of £7.50 on each T-shirt.”  

Using this special offer, what is the cost of four T-shirts?  

* [ ] £30
* [ ] £45
* [ ] £60
* [x] £90 
* [ ] £120
{.col-5}

---

As buying four T-shirts for the price of three is equivalent to a saving of £7.50 on each T-shirt, the money saved using this offer is 4 × £7.50 = £30.  

The money saved is the cost of one T-shirt so this cost is £30.  

So, using the offer, the cost of three T-shirts is 3 × £30 = £90.
:::



## 20.
::: problem id=20_1 marks=1
![](/resources/module-7-test-spring/20-semicircle.png){image align="right"}
A circle is inscribed in a semicircle with centre O and diameter AB.  

The centre of the circle is the point P, where PA = PO.  

What is the ratio of the area of the circle to the area of the semicircle?  

* [ ] 3:8
* [ ] 4:9
* [x] 9:64
* [ ] 4:25
* [ ] 1:4

---

Let the radii of the semicircle and circle be R and r respectively.  

Applying Pythagoras’ Theorem to triangle OCP gives:  

`(R – r)^2 = (R/2)^2 + r^2`  

which can be rearranged to give `r = 3𝑅/8`.  

![](/resources/module-7-test-spring/20-semicircle-answer.png){image align="center"}

So the ratio of the two areas is `𝜋r^2:𝜋R^2` and since `r^2/𝑅^2 = 9/64`, this simplifies to 9:64.  
:::