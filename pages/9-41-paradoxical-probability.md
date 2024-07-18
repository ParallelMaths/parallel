# Paradoxical probability

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.


## 1. Intermediate Maths Challenge Problem (UKMT)
<!--- 2019 (4) --->

::: problem id=1_1 marks=2
![](/resources/9-41-paradoxical-probability/1-digital_clock.png){image align="right"}
__1.1__ A 24-hour digital clock shows the time in hourse and minutes.  

How many times in one day will it display all four digits 2, 0, 1, and 9, in some order?

* [ ] 6
* [x] 10
* [ ] 12
* [ ] 18
* [ ] 24
{.col-5}

^^^ hint id=1_1_1 marks=1 
The 9 can only go in the second or fourth place, so list all possibilities for each of those two cases.  
^^^

---  

The ten possible times are:

* 20:19  
* 21:09  
* 12:09  
* 10:29  
* 01:29  
* 02:19  
* 19:20  
* 19:02  
* 09:12  
* 09:21  
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- 2020 (10) --->

::: problem id=2_1 marks=3
__2.1__ What is the value of `(2468 × 2468)/(2468 + 2468)`?
* [ ] 2
* [x] 1,234
* [ ] 2,468
* [ ] 4,936
* [ ] 6,091,024
{.col-5}

^^^ hint id=2_1_1 marks=1 
Let `x` = 2468, then express the calculation in terms of `x`, and simplify.
^^^

---

Let `x = 2468`, then the expression becomes `x^2/(2x) = x/2 = 1234`.
:::

::: problem id=2_2 marks=2
__2.2__ What is the value of `(2468 × 2468 × 2468)/(2468 × 2468 + 2468 × 2468)`? 

<input type="number" solution="1234"/> 

---

Let `x = 2468`, then the expression becomes `x^3/(2x^2) = x/2 = 1234`.
:::


## 3. A paradoxical probability

Probability has the power to surprise, confound and utterly baffle us.  

The idea of randomness, which is at the heart of probability, is one that we can easily take for granted, but needs to be handled with great care.

In this Numberphile video, Grant Sanderson (3blue1brown) explains a thought experiment by Joseph Bertrand, where choosing a chord ‘at random’ in a circle leads to three different values for the same probability!  

Watch the video to see how those values come about, and what this tells us about randomness.

@[youtube](mZBwsm6B280?rel=0) _(If you have problems watching the video, right click to open it in a new window)_  

::: problem id=3_1 marks=2
__3.1__ What is the randomly selected chord being compared to in the calculation of the probability?  

* [ ] The radius of the circle 
* [ ] The circumference of the circle
* [x] The length of each side of an inscribed equilateral triangle 
* [ ] The length of the shorter side of an inscribed isosceles triangle
:::

::: problem id=3_2 marks=2
__3.2__ In the first example, we take any two points on the circumference of the circle.  

What is the probability that the chord length is longer?  

* [ ] `1/4`
* [x] `1/3`
* [ ] `2/3`
* [ ] `1`
{.col-5}

^^^ hint id=3_2_1 marks=1 
![](/resources/9-41-paradoxical-probability/3-2-chord-hint.jpg){image align="right"}
The triangle splits the circumference into three equal segments.  

Imagine a chord that starts at a vertex of the triangle - if the other end of the chord is in the opposite segment, it is longer.  

Otherwise it is shorter.  
^^^
:::

::: problem id=3_3 marks=2
__3.3__ The second method gives a probability of `1/4` by considering a smaller circle inscribed in the triangle.  

What does a longer chord length correspond to in this case?

* [x] The midpoint of the chord lying inside the smaller circle  
* [ ] The midpoint of the chord lying outside the smaller circle  
* [ ] The midpoint of the chord lying on the circumference the smaller circle  
* [ ] The whole chord lying outside the smaller circle  
:::

::: problem id=3_4 marks=2
__3.4__ What happens when Grant runs simulations of each of the three methods?

* [ ] The simulations all give the same probability
* [x] The simulations give 3 different probabilities that agree with Grant’s values
* [ ] The simulations reveal an error in Grant’s methods
* [ ] The simulations crash because they can’t handle the problem
:::

::: problem id=3_5 marks=2
__3.5__ What was Joseph Bertrand’s main conclusion from this thought experiment?

* [ ] There’s no such thing as a probability  
* [ ] Maths is full of logical contradictions  
* [ ] Circles don’t exist  
* [x] We have to be careful when dealing with probabilities involving infinitely many possible outcomes  
:::


## 4. Intermediate Maths Challenge Problem (UKMT)
<!--- 2019 (15) --->

::: problem id=4_1 marks=3
![](/resources/9-41-paradoxical-probability/4-diagram.jpg){image align="right"}
__4.1__ The diagram shows six congruent equilateral triangles, of side-length 2, placed together to form a parallelogram.  

What is the length of `PR`?
* [x] `2sqrt(13)`
* [ ] 7
* [ ] `6sqrt(3)`
* [ ] 9
* [ ] `7sqrt(3)`
{.col-5}

^^^ hint id=4_1_1 marks=1 
![](/resources/9-41-paradoxical-probability/4-diagram-hint.jpg){image align="center"}
Draw in a right-angled triangle and  
apply Pythagoras’ Theorem.
^^^

---
![](/resources/9-41-paradoxical-probability/4-diagram-hint.jpg){image align="right"}
The point `Q` is a vertex of the parallelogram, as shown. We extend the line `PQ` to the point `U` so that `QU` has length 2.  

It can be seen that `RQU` is an equilateral triangle with side length 2.  

We let `T` be the foot of the perpendicular from `R` to `QU`.  

It can be seen that the triangles `RTQ` and `RTU` are congruent.  

It follows that `QT = TU = 1`.  

By Pythagoras’ Theorem, applied to the right-angled triangle `RTQ`, we have `RQ^2 = RT^2 + TQ^2`.  

It follows that RT = sqrt(RQ^2 − TQ^2) = sqrt(2^2 − 1^2) = sqrt(3).  

We see that `PT = 7`.  

By Pythagoras’ Theorem, applied to the right-angled triangle `RTP`, we have `PR^2 = PT^2 + RT^2 = 7^2 + sqrt(3^2) = 49 + 3 = 52`.  

Therefore `PR = sqrt(52)= 2sqrt(13)`.
:::


## 5. Puzzle

::: problem id=5_1 marks=1
__5.1__ Two fathers take their sons fishing in the same boat.  

What is the least number of possible people in the boat?

<input type="number" solution="3"/> 

---

If they were all different people, there would be 4 in total.  

But if one of them is the grandfather, then the father counts as both a father and a son, so there are only 3 in total: a boy, his father, and his grandfather.
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