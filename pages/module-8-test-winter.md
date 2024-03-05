# Euclid Module 8 Winter Test

<div class="dictionary">

This is a special euclid test!

</div>

Lorem ipsum

## 1.	
::: problem id=1_1 marks=1
What is the highest common factor of 84 and 126?

<input type="number" solution="42"/>  

---

84 = 2 × 2 × 3 × 7.  
126 = 2 × 3 × 3 × 7.  

So the highest common factor is 2 × 3 × 7 = 42.  
:::


## 2.
::: problem id=2_1 marks=1
What is angle `a`, in degrees?

![](/resources/module-8-test-winter/2-quadrilateral.png){image align="center"}

<input type="number" solution="48"/>  

---

Angles in a quadrilateral sum to 360°, so a = 360 – (117 + 99 + 96) = 48. 
:::


## 3.
::: problem id=3_1 marks=1
If the ratio of boys to girls in a class is 5:3 and there are 15 girls, how many students are there altogether?

* [ ] 20
* [ ] 25
* [ ] 30
* [ ] 35
* [x] 40
{.col-5}

---

15 girls represent `3/(3+5) = 3/8` of the total number of students.  

So the total number of students is `8/3 × 15 = 40`.
:::


## 4.
::: problem id=4_1 marks=1
Which of these is prime?

* [ ] 111
* [x] 113
* [ ] 115
* [ ] 117
* [ ] 119
{.col-5}

---

* 111 = 3 × 37
* 113 is prime  
* 115 = 5 × 23
* 117 = 9 × 13
* 119 = 7 × 17
:::


## 5.
::: problem id=5_1 marks=1
What is the value of each interior angle of a regular octagon, in degrees?

<input type="number" solution="135"/>  

---

The general formula for the internal angle of a regular n-gon is:  

180° × `(n − 2)/n`  

For an octagon, we plug in `n = 8` to get an interior angle of:  

180° × `6/8` = 180° × `3/4` = 135°
:::


## 6.
::: problem id=6_1 marks=1
Which of these is largest?

* [ ] `3^4`
* [x] `2^7`
* [ ] `8^2`
* [ ] `4^3`
* [ ] `9^2`
{.col-5}

---

The values, respectively, are  

* `3^4 = 81`
* `2^7 = 128`
* `8^2 = 64`
* `4^3 = 64`
* `9^2 = 81`
:::


## 7.
::: problem id=7_1 marks=1
What number must be added to the set {3, 4, 5, 6} to give a mean of 6?

* [ ] 4
* [ ] 6
* [ ] 8
* [ ] 10
* [x] 12
{.col-5}

---

The total of all the numbers will be 5 × 6 = 30.  

So the missing number is 30 - (3 + 4 + 5 + 6) = 12.
:::


## 8.
::: problem id=8_1 marks=1
If you flip a fair coin three times, what is the probability that you get the same outcome all three times?

* [ ] `1/8`
* [x] `1/4`
* [ ] `1/2`
* [ ] `3/4`
* [ ] `1`
{.col-5}

---

There are two ways this could happen: three Heads or three Tails.  

p(3 Heads) = `1/2 × 1/2 × 1/2 = 1/8`.  

Similarly, p(3 Tails) = `1/8`.  

So the probability of getting either of these outcomes is `1/8 + 1/8 = 1/4`.  
:::


## 9.
::: problem id=9_1 marks=1
What is the value of this continued fraction?  

![](/resources/module-8-test-winter/9-fraction.png){image align="center"}

* [ ] 2
* [x] 3
* [ ] 4
* [ ] 5
* [ ] 6
{.col-5}

---

Call the continued fraction `x`.  

Then `x = 2 + 3/x`.  

So `x^2 – 2x – 3 = 0`.  

Therefore: `(x – 3)(x + 1)` = 0.  

`x` is clearly positive, so the solution is `x = 3`.   
:::


## 10.
::: problem id=10_1 marks=1
I choose n numbers at random from the set {1, 2, 3, ..., 30}.  

What is the minimum value of n for which I can be certain my numbers contain a pair of numbers such that one is twice the size of the other?  

<input type="number" solution="21"/>  

---

Separate the set into doubling sequences:  

* 1,2,4,8,16,32  
* 3,6,12,24
* 5,10,20
* 7,14,28
* 9,18
* 11,22
* 13,26
* 15,30  

And the single sets of 17; 19; 21; 23; 25; 27; 29.  

The most I can choose without any pairs is 3 from the first sequence; 2 from the second, third, and fourth; and 1 from each of the remaining 11.  

So I can choose at most 20 without any pairs, and therefore the minimum I can choose to be sure of getting a pair is 21.  
:::


## 11.
::: problem id=11_1 marks=1
On the scheduled route from Startington to Endlesbury, the train normally travels at 64 km/h in order to arrive on time.  

But one day, as a result of a derailment on the line, it is delayed at Startington by 50 minutes and then has to take a detour, increasing the length of its journey by 31 km.  

Despite increasing its speed by 6 km/h, it arrives at Endlesbury an hour and 5 minutes late.  

What is the length, in km, of the train’s normal route?

* [ ] 60
* [ ] 100
* [ ] 125
* [x] 144
* [ ] 180
{.col-5}

---

Let `d` km be the normal distance from `S` to `E`. Then the normal time taken is `d/64` hours.  

On the new day, it leaves 50 minutes late and arrives an hour and 5 minutes late, meaning that it took an additional 15 minutes to travel the distance of `d + 31` at 70 km/h.  

Using time = distance/speed, we have:  

`(d + 31)/70 = d/64 + 1/4 = (d + 16)/64`.

Solving this equation gives `d = 144`.  
:::


## 12.
::: problem id=12_1 marks=1
How many ways can I break the word __PARALLEL__ into three parts, without reordering the letters?  

* [ ] 7
* [ ] 14
* [x] 21
* [ ] 28
* [ ] 35
{.col-5}

---

The first substring must start with the `P`, the other two can start with any of the remaining 7 letters.  

Therefore there are 7C2 = `(7 × 6)/2 = 21` possible partitions.  
:::


## 13.
::: problem id=13_1 marks=1
![](/resources/module-8-test-winter/13-pentagon.png){image align="right"}
Find the angle shown in this regular pentagon.  
 
* [ ] 100°
* [x] 108°
* [ ] 120°
* [ ] 128°
* [ ] 135°

---

There are many possible ways to prove this; here’s a simple one.  

![](/resources/module-8-test-winter/13-pentagon-solution.png){image align="center"}

The two isosceles triangles shown here both have the orange angle as a base angle, and so they are similar.  

Therefore the blue angle is equal to the interior angle of the pentagon, which is 108°.
:::


## 14.
::: problem id=14_1 marks=1
What is the value of the following sum?

![](/resources/module-8-test-winter/14-sum.png){image align="center"}

Hint: `(sqrt(𝑎) + sqrt(𝑏))(sqrt(𝑎) − sqrt(𝑏)) ≡ 𝑎 − 𝑏`.  

* [ ] `1/10`
* [ ] `1/(10 - sqrt(2))`
* [ ] `sqrt(99)`
* [x] `9`
* [ ] `10`
{.col-5}

---

Multiply each term on the top and bottom by its conjugate:  

`1/(sqrt(2) + sqrt(3))` = `(sqrt(3) - sqrt(2))/((sqrt(3) + sqrt (2))(sqrt(3) - sqrt(2)))` = `(sqrt(3) - sqrt(2))/(3 - 2)` = `sqrt(3) - sqrt(2)`.  

All the terms have 1 as the denominator, so the series simplifies to:  

`sqrt(2) − 1 + sqrt(3) − sqrt(2) + sqrt(4) − sqrt(3)` + ... + `sqrt(99) − sqrt(98) + sqrt(100) − sqrt(99)`.  

All the middle terms cancel out, so the whole series is equal to `sqrt(100) − 1 = 9`.  
:::


## 15.
::: problem id=15_1 marks=1
![](/resources/module-8-test-winter/15-shape.jpg){image align="right"}
The diagram shows a square with sides of length `a`. The shaded part of the square is bounded by a semicircle and two quarter-circle arcs.  

What is the shaded area?  

* [ ] `πa^2/8`
* [x] `a^2/2`
* [ ] `πa^2/2`
* [ ] `a^2/4`
* [ ] `πa^2/4`

---

If the semicircle is cut into two quarter-cirlces, these can be placed next to the other shaded region to fill up half the square.  

Hence the shaded area is half of the area of the square, namely `1/2a^2`.
:::


## 16.
::: problem id=16_1 marks=1
One-eights of the guests at a wedding were children.  

Three-sevents of the adult guests were men.  

What fraction of the wedding guests were adult women?  

* [x] `1/2`
* [ ] `1/3`
* [ ] `1/5`
* [ ] `1/7`
* [ ] `3/7`
{.col-5}

---

Seven-eights of all the guests were adults, of which three-sevenths were men, so the fraction of guests who were adult women equals `7/8 × 4/7 = 1/2`.  
:::


## 17.
::: problem id=17_1 marks=1
Three inhabitants of the planet Zog met in a crater and counted each other's ears.  

Imi said, "I can see exactly 8 ears"; Dimi said, "I can see exactly 7 ears"; Timi said, "I can see exactly 5 ears".  

None of them could see their own ears.  

How many ears does Timi have?  

* [ ] 2
* [ ] 4
* [x] 5
* [ ] 6
* [ ] 7
{.col-5}

---

The aliens say they can see 8, 7, 5 ears respectively, but each ear has been seen by two aliens, so is counted twice.  

Hence the total number of ears is `1/2 (8 + 7 + 5) = 10` ears.  

Each alien can see all ten ears except its own.  

Timi sees 5 ears, so has 10 - 5 = 5 ears.  
:::


## 18.
::: problem id=18_1 marks=1
Four brothers have different heights.  

Tobias is shorter than Victor by the same amount by which he is taller than Peter.   

Oscar is shorter than Peter by the same amount as well.  

Tobias is 184 cm tall, and the average height of all four brothers is 178 cm.  

How tall is Oscar?

* [x] 160 cm
* [ ] 166 cm
* [ ] 172 cm
* [ ] 184 cm
* [ ] 190 cm
{.col-5}

---

Let `k` cm be the different between the heights.  

Then the heights in cm are: Tobias 184, Victor 184 + `k`, Peter 184 - `k`, and Oscar 184 - `2k`.  

The mean is 178, so `1/4 (184 + 184 + k + 184 - k + 184 - 2k) = 178`.  

Hence `4 × 184 - 2k = 4 × 178`, giving `2k = 4 × 184 - 4 × 178 = 4 × 6 = 24`. Hence `k = 12`.  

Therefore Oscar's height in cm is 184 - 2 × 12 = 160 cm.  
:::


## 19.
::: problem id=19_1 marks=1
![](/resources/module-8-test-winter/19-grid.jpg){image align="right"}
Maja decided to enter numbers into the cells of a 3 × 3 grid.  

She wanted to do this in such a way that the numbers in each of the four 2 × 2 grids that form part of the 3 × 3 grid have the same totals.  

She has already written numbers in three of the corner cells, as shown in the diagram.  

Which number does she need to write in the bottom right corner?  

* [x] 0
* [ ] 1
* [ ] 4
* [ ] 5
* [ ] Impossible to determine 
{.col-5} 

---

![](/resources/module-8-test-winter/19-grid-solutions.jpg){image align="right"}
Let the numbers around the top left cell be `a`, `b`, and `c` as shown.  

Then the sum of the top left 2 × 2 squre (and hence _all_ the 2 × 2 squares) is `a + b + c + 3`.  

The top right 2 × 2 square already contains `a` and `b` and 1, so the middle right cell must contain `c + 2`.  

The bottom left 2 × 2 square contains `b + c + 2`, so the bottom middle cell is `a + 1`.  

The bottom right 2 × 2 square already contains `a + b + c + 3`, so the missing value is zero.  

There are many ways to complete the grid; one way is shown here.  
:::


## 20.
::: problem id=20_1 marks=1
Maria chooses two digits, `a` and `b`, and uses them to make a six-digit number `ababab`.  

Which of the following is always a factor of numbers formed in this way?  

* [ ] 2
* [ ] 5
* [x] 7
* [ ] 9
* [ ] 11
{.col-5}

---

Let `ab` be the 2-digit number with digits `a` and `b`, then the 6-digit number `ababab` = `ab × 10101 = ab × 3 × 7 × 13 × 37`, so is always divisible by 3, 7, 13 and 37.  

But it is only divisible by 2, 5, 9 or 11, if `ab` is. 
:::

