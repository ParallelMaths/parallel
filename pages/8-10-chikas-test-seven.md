# Chika’s Test for Seven

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.


## 1. Drew’s puzzle #1

Here is the first of two puzzles via maths specialist teacher and former headteacher Drew Foster (@drewfoster0 on Twitter). If you can’t solve them, blame him, not me.

::: problem id=1_1 marks=5
__1.1__ This is a tough problem, which is why it is worth so many marks. What is the value of A?

![](/resources/8-10-chikas-test-seven/1-puzzle-question.jpg){image align="center"}

<input type="number" solution="3"/>

^^^ hint id=1
(A + A = B), and there is no carry, as there is no fourth digit in the answer to the sum, so A must be 1, 2 , 3 or 4.
^^^

^^^ hint id=2
At first sight, (C + C = A) and (B + C = A) for the middle and right columns, but B and C are different. This can only be possible if (B + C) is bigger than 10, so there is a carry into the middle column, so (C + C + 1 = A). This means (B + C = 11, 12, 13 or 14), in order to have a carry over.
^^^

^^^ hint id=3
We know that (C + C + 1 = B + C = A). So, B is equal to (C + 1).  And we know (B + C = 11, 12, 13 or 14). So we have B = 6, C = 5 … or B = 7, C = 6).
^^^

---

(A + A = B), and there is no carry, as there is no fourth digit in the answer to the sum, so A must be 1, 2 , 3 or 4.

At first sight, (C + C = A) and (B + C = A) for the middle and right columns, but B and C are different. This can only be possible if (B + C) is bigger than 10, so there is a carry into the middle column, so (C + C + 1 = A). This means (B + C = 11, 12, 13 or 14), in order to have a carry over.

We know that (C + C + 1 = B + C = A). So, B is equal to (C + 1).  And we know (B + C = 11, 12, 13 or 14). So we have B = 6, C = 5 … or B = 7, C = 6).

From here, we can use trial and error to deduce that A = 3.
:::


## 2.	Drew’s puzzle #2

A 5 x 5 x 5 cube consisting of 125 smaller cubes (known as cubelets) is completely painted.

![](/resources/8-10-chikas-test-seven/2-puzzle-question.png){image align="center"}

::: problem id=2_1 marks=1
__2.1__ How many cubelets have 4 faces painted yellow?

<input type="number" solution="0"/>

---

None of the smaller cubes have more than 3 faces showing.
:::

::: problem id=2_2 marks=1
__2.2__ How many cubelets have 3 faces painted yellow?

<input type="number" solution="8"/>

---

Only the 8 corner cubelets (4 at the top, and 4 at the bottom) have 3 yellow faces.
:::

::: problem id=2_3 marks=2
__2.3__ How many cubelets have 2 faces painted yellow?

<input type="number" solution="36"/>

---

The edge cubelets have two yellow faces. There are three cubelets per edge, and twelve edges, and 3 × 12 = 36.
:::

::: problem id=2_4 marks=2
__2.4__ How many cubelets have 1 faces painted yellow?

<input type="number" solution="54"/>

---

The face cubelets have one yellow face. There are (3 × 3 = 9) cubelets per face, and six faces. So the answer is 9 × 6 = 54.

Another way to arrive at this answer is that the big cube has 6 big faces. There are 25 small yellow faces per big face, so 6 × 25 = 150 small yellow faces in total.

Earlier, we calculated:  
* 8 cubelets have 3 yellow faces = 24 small yellow faces.  
* 36 cubelets have 2 yellow faces = 72 small yellow faces.  

The number cubelets with 1 yellow face must be 150 – 24 – 72 = 54.
:::

::: problem id=2_5 marks=1
__2.5__ How many cubelets have 0 faces painted yellow?

<input type="number" solution="27"/>

---

Inside the big cube we can imagine a 3 × 3 × 3 cube with no faces exposed to the outside. And 3 × 3 × 3 = 27.  

Alternatively, the 5 × 5 × 5 cube consists of 125 cubelets. Our previous answers have counted 8, 36 and 54 cubelets with at least one yellow face, so the number of remaining unpainted cubelets must be (125 – 8 – 36 – 54 = 27).
:::


## 3. Chika’s Test for Seven

As you will know, there are various tests for deciding whether or not a number is divisible by 1, 2, 3, 4, 5, 6, 8, 9, 10, 11 and 12.

![](/resources/8-10-chikas-test-seven/3-chika-table.jpg){image align="center"}

A divisibility test for 7 is trickier, but they do exist.  

One of them was rediscovered this summer by Chika Ofili (Westminster Under School) – his maths teacher Mary Ellis takes recounts the story:  

__“Something very exciting happened last Friday when one of my pupils, Chika Ofili, popped into the classroom and asked if he could tell me something he had thought of over the summer holidays. He realised that if you take the last digit of any whole number, multiply it by 5 and then add this to the remaining part of the number, you will get a new number. And it turns out that if this new number is divisible by 7, then the original number is divisible by 7. What an easy test!”__  

For example, take the number 532  

53 + 2 x 5 = 63  
63 is a multiple of 7, so 532 is a multiple of 7 (and therefore divisible by 7)  

Or take the number 987  

98 + 7 x 5 = 133  
13 + 3 x 5 = 28  
28 is a multiple of 7, so both 133 and 987 are multiples of 7  

In fact, if you actually keep going, you will always end up with either 7 or 49, if the original number is divisible by 7.

![](/resources/8-10-chikas-test-seven/3-chika.jpg){image align="center"}

::: problem id=3_1 marks=1
__3.1__ Is 167 divisible by 1?

* [x] Yes
* [ ] No
{.col-2}
:::

::: problem id=3_2 marks=1
__3.2__ Is 167 divisible by 2?

* [ ] Yes
* [x] No
{.col-2}
:::

::: problem id=3_3 marks=1
__3.3__ Is 167 divisible by 3?

* [ ] Yes
* [x] No
{.col-2}
:::

::: problem id=3_4 marks=1
__3.4__ Is 167 divisible by 4?

* [ ] Yes
* [x] No
{.col-2}
:::

::: problem id=3_5 marks=1
__3.5__ Is 167 divisible by 5?

* [ ] Yes
* [x] No
{.col-2}
:::

::: problem id=3_6 marks=1
__3.6__ Is 168 divisible by 6?

* [x] Yes
* [ ] No
{.col-2}
:::

::: problem id=3_7 marks=3
__3.7__ Is 2,401 divisible by 7?

* [x] Yes
* [ ] No
{.col-2}
:::

::: problem id=3_8 marks=4
__3.8__ There is also a little know test for whether a number is divisible by 11. You just add and subtract alternate numbers, then see if the result is divisible by 11. For example, if we want to test the divisibility of 14,641, we work out 1 – 4 + 6 – 4 + 1 = 0, which is indeed divisible by 11, so the whole number is divisible by 11.  

Is 1,581,228 divisible by 11?

* [x] Yes
* [ ] No
{.col-2}
:::



## 4.	Junior Maths Challenge Problem (UKMT)
<!--- (2014) Q17 --->

::: problem id=4_1 marks=3
![](/resources/8-10-chikas-test-seven/4-map-question.jpg){image align="right"}
__4.1__ The diagram is a “map” of Jo’s local rail network, where the dots represent stations and the lines are routes. Jo wants to visit all the stations, travelling only by train, starting at any station and ending at any station, with no restrictions on which routes are taken.  

What is the smallest number of stations that Jo must go to more than once?

* [ ] 1
* [ ] 2
* [x] 3
* [ ] 4
* [ ] 5
{.col-5}

---
![](/resources/8-10-chikas-test-seven/4-map-answer.jpg){image align="right"}
We label the stations as shown in the diagram on the right so that we can refer to them. Jo can visit the stations in the order:

`O, P, Q, R, S, R, T, X, Y, Z, Y, X, W, V, U`

In this way she visits all the stations and goes through just three of them, R, Y and X more than once.

It remains only to show that Jo cannot visit all the stations without going through at least three of them more than once.

Jo must go through the junction stations R and X more than once. If Jo does not start or finish at `O`, she will have to go through `P` more than once. If she does not start or finish at `U` she will have to go through `V` more than once. If she starts at `O` and finishes at `U`, or vice versa, she will have to go through `Y` more than once. It follows that Jo has to go through at least three stations more than once.  

So this is the smallest number of stations Jo must go through more than once.
:::


Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	The next Parallelogram is next week, at 3pm on Thursday.
*	Finally, if you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelograms.

Cheerio,
Simon.
