# Teacher’s Pets

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


## 1. Some riddles

::: problem id=1_1 marks=2
__1.1__ Which word in the dictionary has 11 letters and is spelled incorrectly?  

<input type="text" solution="incorrectly"/>  

---

The word is "incorrectly".
:::

::: problem id=1_2 marks=2
__1.2__ Which of the following statements is correct?

* [ ] The yolk of the egg is white
* [ ] The yolk of the egg are white
* [x] Neither

---

Neither, because the yolk of the eggs is yellow.
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- 2013 (8) --->

::: problem id=2_1 marks=3
__2.1__ Jim rolled some dice and was surprised that the sum of the scores on the dice was equal to the product of the scores on the dice. One of the dice showed a score of 2, one showed 3 and one showed 5. The rest showed a score of 1. How many dice did Jim roll?

* [ ] 10
* [ ] 13
* [ ] 17
* [x] 23
* [ ] 30
{.col-5}

---

Suppose there were n dice which showed a score of 1. Then the sum of the scores on the dice was `n × 1 + 2 + 3 + 5 = n + 10`. The product of the scores was `1^n × 2 × 3 × 5 = 1 × 2 × 3 × 5 = 30`.  

Therefore, `n + 10 = 30` and hence `n = 20`.  

So, including the three dice which showed the scores of 2, 3 and 5, there were 23 dice altogether.
:::


## 3. Teacher’s pets

A teacher tells her class that she has some pets at home. She explains that all except two of the pets are cats, all except two are dogs, and all except two are rabbits.

::: problem id=3_1 marks=1
__3.1__ How many of cats does she have at home?

<input type="number" solution="1"/>  
:::

::: problem id=3_2 marks=1
__3.2__ How many of dogs does she have at home?

<input type="number" solution="1"/>  
:::

::: problem id=3_3 marks=1
__3.3__ How many of rabbits does she have at home?

<input type="number" solution="1"/>  

---

If C, D and R represent the number of cats, dogs and rabbits, then we can summarise the information in the questions as:

(a)	D + R = 2  ->  “all except two of the pets are cats”  
(b)	C + R = 2  ->  “all except two of the pets are dogs”  
(c)	C + D = 2  ->  “all except two of the pets are rabbits”  

Substituting (b) into (a) tells us that [D + (2 – c) = 2] or D = C.  

And (c) tells us C + D = 2, so C = 1, D = 1... and therefore R = 1.
:::


## 4. Space science

A couple of videos to stretch your brain in the direction of science. Just watch these short videos and answer the questions that follow.

__Is there life on Mars?__

@[youtube](SIkvVQrOpMM?rel=0)  

::: problem id=4_1 marks=1
__4.1.__ Which musician is mentioned in the video? 	

* [ ] Bruno Mars
* [x] David Bowie
:::

__Dark side of the Moon__

@[youtube](46-m4Y4Adto?rel=0)  

::: problem id=4_2 marks=2
__4.2.__ Which band recorded the album “Dark side of the Moon”? The answer is not in the video.

* [x] Pink Floyd
* [ ] Red Hot Chili Peppers
* [ ] The White Stripes
* [ ] Deep Purple
* [ ] The Moody Blues
{.col-3}
:::


## 5. Intermediate Maths Challenge Problem (UKMT)
<!--- 2013 (20) --->

::: problem id=5_1 marks=6
__5.1.__ Jack’s teacher asked him to draw a triangle of area 7cm<sup>2</sup>. Two sides are to be of length 6cm and 8cm.  

How many possibilities are there for the length of the third side of the triangle?

* [ ] 1
* [x] 2
* [ ] 3
* [ ] 4
* [ ] more than 4
{.col-4}

---

This problem could be tackled in several different ways.  

![](/resources/9-24-teachers-pets/5-triangle-angle.png){image align="right"}
_Method 1:_ This is based on the fact that if a triangle has sides of lengths `a` and `b` and the angle between the sides is `θ`, then the area of the triangle is given by `1/2 ab sin θ`. If you are not familiar with this, ask your teacher.  

Let the angle between the sides of length 8 cm and 6 cm be `θ`. Then the area of the triangle is `1/2 (8 × 6) sin θ = 24 sin θ cm^2`. So we need to have `24 sin θ = 7`, and hence `sin θ = 7/24`. This equation has two solutions in the range `0 < θ < 180`, say `φ` and `ψ` as we see from the graph. Note that `φ + ψ = 180`, and so we can represent the two resulting triangles as shown in the diagram on the right below (for clarity, this is not drawn to scale).

![](/resources/9-24-teachers-pets/5-triangle-graph.png){image align="center"}

In the diagram above on the right `PQ` = `QR` = 8 cm and `QS` = 6 cm. So `PQS` and `QRS` are the two triangles with sides of lengths 6 cm and 8 cm, and area 7 cm<sup>2</sup>. It is evident that the third sides of these triangles, `PS` and `RS` have different lengths. So there are two possibilities for the length of the third side.

_Method 2:_ Here we use the formula `1/2` (base `×` height) for the area of a triangle. We consider triangles which have a base, say `PQ`, of length 8 cm, and where the third vertex, `R`, is such that `PR` has length 6 cm. By symmetry we need only consider triangles where `R` lies above `PQ`.

![](/resources/9-24-teachers-pets/5-triangle-curve.png){image align="right"}
The third vertex `R` lies on a semicircle with centre `P` and radius 6 cm. The area of the triangle `PQR` is determined by the vertical height of `R` above `PQ`. So the largest area is when `R` is at the point `S` vertically above `P`, and the area is then `1/2 (8 × 6) = 24 `cm<sup>2</sup>. The minimum area is when the height is zero. This occurs when `R` coincides with either the point `T` or the point `U` which are the endpoints of the diameter of the semicircle. In these cases the area of the triangle is 0 cm<sup>2</sup>.  

Since the area drops as the height drops, as `R` moves clockwise around the semicircle from `S` to `U` there will be exactly one point, say R<sub>1</sub>, where the area becomes 7 cm<sup>2</sup>, and when `R` moves anticlockwise from `S` to `T` there will be exactly one point, say R<sub>2</sub>, where the area becomes 7 cm<sup>2</sup>. So there are precisely two values for the length of `QR`.
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
