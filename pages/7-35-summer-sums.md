# Summer Sums

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.

It’s summer and the school year is over (or maybe it’s nearly over), but that doesn’t mean that it’s the end of mathematics. If you are taking mathematics seriously and if you are having fun with it (being serious and having fun can go together), then it is important that you keep the numbers and geometry parts of your brain at least a little bit busy over the summer. I am hoping that your teacher will have set you some holiday work, but on top of that here is a longer than usual Parallelogram.  

Most of the questions are from past Junior Maths Challenge papers that you have seen before, but I have also added a sprinkling of other things to make the Parallelogram (even) more interesting.  

It will take you an hour or two to complete this Parallelogram, so maybe tackle it across three or four sessions... but don’t forget to complete it before term starts.  

And... if you have missed any earlier Parallelograms then the summer is a great time to do some catching up.


## 1.
<!--- 2011 (1) --->
::: problem id=1_1 marks=1
__1.1.__ What is the value of `2 × 0 × 1 + 1`?

* [ ] 0
* [x] 1
* [ ] 2
* [ ] 3
* [ ] 4
{.col-5}

---

This is simply a matter of doing the sum... and remembering the order of
operations. So, multiplications take priority over addition, so
`2 × 0 × 1 + 1 = (2 × 0 × 1) + 1 = (0) + 1 = 1`.
:::


## 2.
<!--- 2011 (2) --->
::: problem id=2_1 marks=1
__2.1.__ How many of the integers 123, 234, 345, 456, 567 are multiples of 3?

* [ ] 1
* [ ] 2
* [ ] 3
* [ ] 4
* [x] 5
{.col-5}

---
We could simply divide each of the given numbers by 3, and check that there is no
remainder in each case. However, it is quicker to use the fact that an integer is
divisible by 3 if and only if the sum of its digits is a multiple of 3.

123:	1 + 2 + 3 = 6  
234:	2 + 3 + 4 = 9  
345:	3 + 4 + 5 = 12  
456:	4 + 5 + 6 = 15  
567:	5 + 6 + 7 = 18  

These are all multiples of 3, so all five numbers are multiples of 3, so the
answer is 5.

In fact, the sum of any 3 consecutive numbers is a multiple of 3, as one of those numbers will already be a multiple of 3, one will be exactly 1 less than a multiple of 3, and one will be exactly one more than a multiple of 3. So, when added together the +1 and –1 will cancel, and give us a multiple of three.

We can show this algebraically for the three consecutive numbers `n - 1`, `n`, and `n + 1`: `(n - 1) + n + (n + 1) = 3n`.
:::


## 3.
<!--- 2012 (1) --->
::: problem id=3_1 marks=1
__3.1__ What is the smallest four-digit positive integer which has four different digits?

* [ ] 1032
* [ ] 2012
* [ ] 1021
* [ ] 1234
* [x] 1023
{.col-5}

---

Here it is easy just to check the options that are given. A, D and E are the only options in which all four digits are different. Of these, clearly, E is the smallest.

For a complete solution we need to give an argument to show that 1023 really is the smallest four digit positive integer with four different digits. It is easy to do this.

To get the smallest possible number we must use the four smallest digits, 0, 1, 2 and 3. A four digit number cannot begin with a 0. So we must put the next smallest digit, 1, in the thousands place, as a four-digit number beginning with 2 or 3 is larger than one beginning with a 1. For similar reason the
hundreds digit must be the smallest remaining digit, 0. Similarly the tens digit must be 2 and the units digit must be 3.

So the required number is 1023.
:::


## 4.
<!--- 2012 (2) --->
::: problem id=4_1 marks=1
__4.1__ What is half of 1.01?

* [ ] 5.5
* [ ] 0.55
* [x] 0.505
* [ ] 0.5005
* [ ] 0.055
{.col-5}

---

We obtain half of 1.01 by dividing 1.01 by 2. We can do this as a long division sum, or alternatively, we can use fractions:

`1.01 = 1 + 1/100`. So half of `1.01` is `1/2 + 1/200 = 0.5 + 0.005 = 0.505`
:::


## 5. QI : Curious Sporting Loopholes

Mathematics is about rules (e.g., odd plus odd equals even), but it is also about understanding the rules in such detail that you know how to gain an advantage in solving problems. In that spirit, here is a clip from the BBC show “QI” about taking advantage of loopholes in sporting rules.

@[youtube](89o7PIjDyFI?rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

::: problem id=5_1 marks=3
__5.1__ Because of cricketer Thomas White, cricket bats can no longer be infinitely wide. Today, what is the maximum permitted width of a cricket bat in first class cricket?
(You might have to googly this.)

* [ ] 4.25 mm
* [ ] 38 mm
* [x] 108 mm  
* [ ] 965 mm
{.col-5}
:::

::: problem id=5_2 marks=2
__5.2__ In the previous question, why did I write that you might have to “googly” the answer, rather than writing “google” the answer?

* [ ] Googly was a typo
* [x] Googly is a way of bowling a cricket ball
* [ ] Thomas Googly invented cricket
* [ ] Googly is the Indian word for Google
:::


## 6.
<!--- 2011 (3) --->

::: problem id=6_1 marks=2
__6.1__ ![](/resources/7-35-summer-sums/3-lightsquestion.png){image align="right"}

A train display shows letters by lighting cells in a grid, such as the letter
‘o’ shown. A letter is made bold by also lighting any unlit cell immediately to
the right of one in the normal letter.

How many cells are lit in a bold ‘o’?

* [ ] 22
* [x] 24
* [ ] 26
* [ ] 28
* [ ] 30
{.col-5}

---

![](/resources/7-35-summer-sums/3-lightssolution.png){image align="right"}

The only thing to do here is to draw (or imagine) the figure corresponding to a
bold ‘o’, and to count the number of cells that are lit.  

We see that the extra cells that need to be lit are the 10 cells shown in
black.  

This makes 24 lit cells altogether.
:::


## 7.
<!--- 2011 (4) --->
::: problem id=7_1 marks=2
__7.1.__ In 2007, the world record for the largest coin was broken by the Royal Canadian Mint. The coin is 99.999% pure gold and has a mass of 100 kg. A standard British £1 coin has mass of 10g.

What sum of money in £1 coins would weigh the same as the record-breaking coin?

* [ ] £100
* [ ] £1,000
* [x] £10,000
* [ ] £100,000
* [ ] £1,000,000
{.col-5}

---

We have to work out how many £1 coins, each weighing 10 g, we need to get a total
weight of 100kg. Now 1kg = 1000g, and so 100kg = 100,000g. So we need
100,000/10 = 10,000 of these coins. That is, £10,000 in money.

(In fact, the current (2019) record for the world's biggest coin is held by the Perth Mint. The coin weighs one tonne and is made of 99.99% pure gold.)
:::


## 8.
<!--- 2012 (3) --->
::: problem id=8_1 marks=2
__8.1__ Which of the following has exactly one factor other than 1 and itself?
* [ ] 6
* [ ] 8
* [ ] 13
* [ ] 19
* [x] 25
{.col-5}

---

The factors of 6 are 1, 2, 3 and 6; the factors of 8 are 1, 2, 4 and 8; the factors of 13 are 1 and 13; the factors of 19 are 1 and 19; and the factors of 25 are 1, 5 and 25. We see from this that, of the numbers we are given as options, only 25 has exactly one factor other than 1 and itself. It is worth noticing that 25 is the only square number.
:::


## 9.
<!--- 2012 (4) --->
::: problem id=9_1 marks=2
__9.1__ Beatrix looks at the word __JUNIOR__ in a mirror. How many of the reflected letters never look the same as the original, no matter how Beatrix
holds the mirror?

* [ ] 1
* [ ] 2
* [x] 3
* [ ] 4
* [ ] 5
{.col-5}

---

The letters J, N and R do not have an axis of symmetry. So these letters cannot look the same when reflected in a mirror, however the mirror is held. The letters U, I and O all have at least one axis of symmetry. So each may look the same when reflected in a mirror.
:::


## 10. Bananas

Here is a tweet that caught my eye recently:

_It turns out a major new study recently found that humans eat more bananas than monkeys._  

_I can't remember the last time I ate a monkey._  

_(from Charina91)_

::: problem id=10_1 marks=3
__10.1__ How many bananas do humans eat each year?  

* [ ] 100 thousand
* [ ] 100 million
* [x] 100 billion
* [ ] 100 trillion
{.col-5}
:::


## 11.
<!--- 2013 (6) --->
::: problem id=11_1 marks=3
__11.1__ What is the value of ((1−1) −1) − (1− (1−1))?

* [x] -2
* [ ] -1
* [ ] 0
* [ ] 1
* [ ] 2
{.col-5}

---

We have ((1−1) −1) − ((1− (1−1)) = (0 −1) − (1− 0) = (−1) − (1) = −2 .
:::


## 12.
<!--- 2013 (7) --->
::: problem id=12_1 marks=3
__12.1.__ After tennis training, Andy collects twice as many balls as Roger and five more than
Maria. They collect 35 balls in total. How many balls does Andy collect?

* [ ] 20
* [ ] 19
* [ ] 18
* [x] 16
* [ ] 8
{.col-5}

---

Suppose that Andy collects `x` balls. Since Andy collects twice as many balls as Roger, Roger collects `1/2 x` balls. Andy collects five more balls than Maria, so Maria collects `x − 5` balls. So between them, Andy, Roger and Maria collect `x + 1/2 x + (x - 5) = 35` balls in total.

Multiplying this equation by 2 gives `2x + x + 2x - 10 = 70`

This is equivalent to `5x = 80`.

It follows that `x = 16`.

_Note:_ As we are asked for the number of balls that Andy collects, it is natural to begin the problem by letting `x` be this number. However, we see then see that this leads to an equation which includes a fraction. If you look ahead, you might prefer to let the number of balls that Roger collects be `x`.

Then Andy collects `2x` balls and Maria collects `2x − 5` balls.

We then obtain the equation: `2x + x + (2x - 5) = 35` with no fractions in it.

This equation is equivalent to `5x = 40`, from which we deduce that `x = 8`.

This calculation is easier that the one we gave above, but, if you use this method, you need to remember that the answer we are asked for is `2x` and not just `x`.
:::


## 13.
<!--- 2013 (8) --->
::: problem id=13_1 marks=3
__13.1.__ Two identical rulers are placed together, as shown (not to scale).

![](/resources/7-35-summer-sums/5-rulers-question.jpg){image align="center"}

Each ruler is exactly 10 cm long and is marked in centimetres from 0 to 10. The 3 cm
mark on each ruler is aligned with the 4 cm mark on the other.

The overall length is `L` cm. What is the value of `L`?

* [x] 13
* [ ] 14
* [ ] 15
* [ ] 16
* [ ] 17
{.col-5}

---

The distance between the 4 cm mark and the 10 cm mark at the end of the ruler is (10 - 4) cm = 6 cm.

The overall length is made up of the length on each ruler from the 4 cm mark to the 10 cm mark, plus the length from the 3 cm mark to the 4 cm mark. This latter distance is 1 cm.

So, `L = 6 + 6 + 1 = 13`.
:::


## 14.
<!--- 2013 (9) --->
::: problem id=14_1 marks=3
__14.1.__ Peter has three times as many sisters as brothers. His sister Louise has twice as many sisters as brothers. How many children are there in the family?

* [ ] 15
* [x] 13
* [ ] 11
* [ ] 9
* [ ] 5
{.col-5}

---

Suppose Peter has `b` brothers and hence `3b` sisters. So, including Peter, there are `b + 1` boys and `3b` girls in the family. So Louise has `b + 1` brothers and `3b − 1` sisters. Since Louise has twice as many sisters as brothers, `3b − 1 = 2(b + 1)`. This equation is equivalent to `3b − 1 = 2b + 2`. So `b = 3` and there are 4 boys and 9 girls in the family, making 13 children altogether.
:::


## 15. Can you light a match with water?

Watch the video below - there will be a question to follow it:

@[youtube](JkRAaZIZaAQ?end=211rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

::: problem id=15_1 marks=3
__15.1__ The Statue of Liberty is coated in...

* [ ] copper oxide
* [ ] chlorophyll
* [x] malachite
* [ ] shredded Shrek
* [ ] jade
{.col-5}
:::


## 16.
<!--- 2011 (10) --->
::: problem id=16_1 marks=4
![](/resources/7-35-summer-sums/4-pentagon-question.jpg){image align="right"}
__16.1.__ You want to draw the shape on the right without taking your pen off the paper and without going over any line more than once?  

Where should you start?

* [ ] Only at `T` or `Q`
* [ ] Only at `P`
* [x] Only at `S` or `R`
* [ ] At any point
* [ ] The task is impossible

---

The nodes (sometimes called vertices) have the following degrees or numbers of connected lines (sometimes called edges):

* P = 4  
* Q = 2  
* R = 3  
* S = 3  
* T = 2  

We know that a network can only be drawn with a single line if every node has an even number of connected lines... unless there are exactly two nodes with an odd number of lines. The two nodes with an odd number of lines must be the start and end nodes, because otherwise the lines come in pairs (in and then out). Please refer back to the previous section and the video if this does not make sense.

There are several ways to draw the diagram starting at `R` without taking the pen off the paper or going over a line more than once. Here is one example of such a path:

`R` → `P` → `S` → `R` → `Q` → `P` → `T` → `S`.
{.text-center}  

If we reverse this path, we have a way to draw the diagram starting at `S`.  
:::


## 17.
<!--- 2011 (11) --->
::: problem id=17 marks=4
![](/resources/7-35-summer-sums/3-angle-question.png){image align="right"}
__17.1.__  The diagram shows an equilateral triangle, drawn inside of a rectangle. Angles `x` and `y` have been labelled.   

What is the value of `x + y`?

* [ ] 30
* [ ] 45
* [x] 60
* [ ] 75
* [ ] 90
{.col-5}

^^^ hint id=17_1
![](/resources/7-35-summer-sums/3-angles-hint.png){image align="right"}
Notice that `x` and `y` are two of the internal angles of a pentagon.

We have highlighted that pentagon in this graphic.

Consider how this information can help you solve the problem.
^^^

^^^ hint id=17_2
What do the internal angles of pentagon add up to? The formula for calculating the sum of the interior angles of a regular polygon is: `(n - 2) × 180°` where `n` is the number of sides of the polygon.
^^^

^^^ hint id=17_3
Remember that the triangle is equilateral. What is the value of the biggest angle in the pentagon, above angle `x` and below angle `y`?
^^^

^^^ hint id=17_4
You know that two of the angles in the pentagon are right angles.
^^^

---

![](/resources/7-35-summer-sums/3-angle-answer.png){image align="right"}
This is tough question. Well done if you did it without hints. There are a couple
of ways to find the value of `x + y` degrees, but here is the neatest method.

The marked angles are two angles of the pentagon `PRSTQ`.

The angles `Q` and `T` are both 90°. The interior angles of the equilateral triangle
are all 60°. Hence the angle in the pentagon at `R` is 300°. The sum of the angles
in a pentagon is 540°.  

So `x + y + 300 + 90 + 90 = 540`.  

Therefore `x + y = 60°`.

Alternatively, if you imagine a line drawn parallel to the top of and bottom of the rectangle, which intersects the triangle at point `R`, you can use alternate angles to find that angle `PRS = x + y`, and as it is an equilateral triangle, this must be 60°.
:::


## 18.
<!--- 2012 (10) --->
::: problem id=18_1 marks=4
![](/resources/7-35-summer-sums/5-arrows-question.jpg){image align="right"}
__18.1__ The diagram shows two arrows drawn on separate 4 cm × 4 cm grids.
One arrow points North and the other points West.

When the two arrows are drawn on the same 4 cm × 4 cm grid (still
pointing North and West) they overlap. What is the area of overlap?

* [ ] 4 cm<sup>2</sup>
* [ ] 4 `1/2` cm<sup>2</sup>
* [ ] 5 cm<sup>2</sup>
* [ ] 5 `1/2` cm<sup>2</sup>
* [x] 6 cm<sup>2</sup>
{.col-5}

---

![](/resources/7-35-summer-sums/5-arrows-answer.jpg){image align="right"}
By drawing one arrow on top of the other, as shown, we see that the region
of overlap covers the whole of 4 of the 1 cm × 1 cm squares into which the
grid is divided, and 4 halves of these squares.  

So the area of the overlapping region is 4 + 4 (`1/2`) = 6 cm<sup>2</sup>.
:::


## 19.
<!--- 2012 (11) --->
::: problem id=19_1 marks=4
__19.1__ In the following expression each ▲ is to be replaced with either + or - in such a way that the result of the calculation is 100.

123 ▲ 45 ▲ 67 ▲ 89  
{.text-center}

The number of + signs used is `p` and the number of - signs used is `m`. What is the value of `p` - `m` ?

* [ ] -3
* [x] -1
* [ ] 0
* [ ] 1
* [ ] 3
{.col-5}

---

One approach is trial and error, as there are only a few combinations. For example, if it is (+ 45) then it is hard to see how we obtain a result of 100. So, we can then explore (- 45). Following this approach quickly leads you to the correct answer, but there is also a more rigorous and mathematical approach.

The sum is made up of 123 and ± 45, ± 67and ± 89. Suppose that the total of the positive terms in the calculation is `x` and the total of the negative terms is `y`. So `x > 0` and `y < 0`. We need to have that:

`x + y = 100`.
{.text-center}

We also have that:

`x - y = 123 + 45 + 67 + 89 = 324`.
{.text-center}

Adding these equations, we obtain `2x = 424`. So `x = 212` and hence `y = -112`. It is readily seen that `45 + 67 = 112` and that no other combination of 45, 67 and 89 gives a total of 112. So the correct calculation must be `123 - 45 - 67 + 89 = 100` with 1 plus sign and 2 minus signs. So `p = 1` and
`m = 2`, giving `p - m = -1`.
:::


## 20. Remainder riddle

::: problem id=20_1 marks=3
__20.1__ What is the remainder when you divide `2^100` by `10`?

<input solution="6"/>

---

`2^1 = 2`, therefore the last digit = 2  
`2^2 = 4`, therefore the last digit = 4  
`2^3 = 8`, therefore the last digit = 8  
`2^4 = 16`, therefore the last digit = 6  
`2^5 = 32`, therefore the last digit = 2  
`2^6 = 64`, therefore the last digit = 4  

The pattern for the last digit (which is also the remainder when dividing by 10) is 2, 4, 8, 6, ... repeated.  

Every 4th remainder is 6.  

As 100 is a multiple of 4, then the remainder for `2^100` will be 6.
:::


## 21.
<!--- 2013 (12) --->
::: problem id=21_1 marks=5
![](/resources/7-35-summer-sums/6-hexagons-answer.jpg){image align="right"}
__21.1.__ How many hexagons are there in the diagram?

* [ ] 3
* [ ] 6
* [ ] 9
* [x] 12
{.col-4}

---

The twelve different hexagons are shown shaded in the diagram below.

![](/resources/7-35-summer-sums/6-hexagons-solution.jpg){image align="centre"}
:::


## 22.
<!--- 2013 (13) --->
::: problem id=22_1 marks=5
__22.1__ When painting the lounge, I used half of a 3 litre can to complete the first coat of paint. I then used two thirds of what was left to complete the second coat.

How much paint was left after both coats were complete?

* [ ] 150 ml
* [ ] 200 ml
* [ ] 250 ml
* [x] 500 ml
* [ ] 600 ml
{.col-5}

---

The first coat uses half the paint, so half remains. Two thirds of this is then used so one third of one half, that is one sixth remains.

So the volume remaining is `1/6 × 3` litres. So there remains 0.5 litres, that is, 500 ml of paint.
:::


## 23.
<!--- 2013 (14) --->
::: problem id=23_1 marks=5
__23.1__ Each side of an isosceles triangle is a whole number of centimetres. Its perimeter has length 20 cm. How many possibilities are there for the lengths of its sides?

* [ ] 3
* [x] 4
* [ ] 5
* [ ] 6
* [ ] 7
{.col-5}

---
Let the length of the two equal sides of the isosceles triangle be `a` cm. Since the triangle has perimeter 20cm, the third side will have length `20 − 2a` cm. Since this must be a positive length, `20 − 2a > 0` and so `a < 10`.

In a triangle, the length of one side must be less than the sum of the lengths of the other two sides. So `20 − 2a < 2a`.

This gives `20 < 4a` and hence `5 < a`. So, we have `5 < a < 10`.

Therefore, as `a` is a whole number, there are just four possible values for `a`, namely 6, 7, 8 and 9.

So there are four possibilities for the side lengths of the triangle:

* 6, 6, 8;
* 7, 7, 6;
* 8, 8, 4; and
* 9, 9, 2.
:::


## 24.
<!--- 2013 (15) --->
::: problem id=24_1 marks=5
__24.1__ The Grand Old Duke of York had 10 000 men. He lost 10% of them on the way to the top of the hill, and he lost 15% of the rest as he marched them back down the hill.

What percentage of the 10 000 men were still there when they reached the bottom of the hill?

* [x] `76 1/2%`
* [ ] `75%`
* [ ] `73 1/2%`
* [ ] `66 2/3%`
* [ ] `25%`
{.col-5}

---

After losing 10% of the men, the Grand Old Duke of York was left with 90% of them. After losing 15% of these, he was left with 85% of the remaining 90% men. So he is left with `85/100` × `90/100` = `7650/10000` = `76.5/100` of the men he started, that is, `76 1/2`% of the original number of men.
:::


## 25. How to See Without Glasses

The video channel “minutephysics” has some great short explanations of scientific mysteries. Take a look at this one about a simple way to fix your eyesight without glasses.

@[youtube](OydqR_7_DjI?end=150rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

::: problem id=25_1 marks=3
__25.1__ What is the disadvantage of a pinhole when trying to see clearly?

* [ ] You need to have a pin
* [ ] You need to have a hole
* [x] The image is relatively dark
* [ ] The image is stripy
* [ ] The image seems further away
:::

::: problem id=25_2 marks=3
__25.2__ What is another word for a hole?

* [x] Aperture
* [ ] Apparition
* [ ] Apartment
* [ ] Aperitif
* [ ] Appendicitis
:::


Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	Finally, if you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelograms.

Cheerio,
Simon.
