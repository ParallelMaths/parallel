# Bubble Solution

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


## 1. Shortest roads

::: problem id=1_1 marks=2
__1.1.__ Imagine you have four towns that are positioned as if they are in the four corners of an imaginary square. You want to build some roads to connect every town to every other town (indirectly or directly) – which of the patterns below achieves this by using the minimum amount of road?  

You probably won’t be able to calculate your way towards a correct answer, but you could try and use your mathematical intuition.



* [ ] ![](/resources/9-15-bubble-solution/1-dots-a.jpg)
* [x] ![](/resources/9-15-bubble-solution/1-dots-b.jpg)
* [ ] ![](/resources/9-15-bubble-solution/1-dots-c.jpg)
* [ ] ![](/resources/9-15-bubble-solution/1-dots-d.jpg)
* [ ] ![](/resources/9-15-bubble-solution/1-dots-e.jpg)
{.col-3}
:::


## 2. Bubble solution

This is a fascinating video by James Grime, in which he explores how bubbles can be used to solve maths problems. Watch the video and answer the questions below... and maybe re-answer a previous question.

@[youtube](dAyDi1aa40E?start=0&end=214&rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

::: problem id=2_1 marks=2
__2.1.__ If we revisit the problem with four towns positioned in the corners of a square, and we look at the layout for minimum length of road required to connect them, we see a total of 5 roads meeting at 2 junctions. What is the angle between the roads meeting at each junction?

* [ ] 30 degrees
* [ ] 45 degrees
* [ ] 60 degrees
* [ ] 90 degrees
* [x] 120 degrees
:::

::: problem id=2_2 marks=1
__2.2.__ What is the name given to points where such junctions occur?

* [x] Steiner points
* [ ] Pivotal points
* [ ] Euler points
* [ ] Nodal points
* [ ] Triple points
:::


## 3. Intermediate Maths Challenge Problem (UKMT)
<!--- 2011 (15) --->

::: problem id=3_1 marks=3
![](/resources/9-15-bubble-solution/3-triangles.jpg){image align="right"}
__3.1.__  The equilateral triangle ABC has sides of length 1 and `AB` lies on the line `XY`.  

The triangle is rotated clockwise around `B` until `BC` lies on the line `XY`.  

It is then rotated similarly around `C` and then about `A` as shown in the diagram.

What is the length of the path traced out by point `C` during this sequence of rotations?

* [x] `(4π)/3`
* [ ] `2 sqrt(3)`
* [ ] `(8π)/3`
* [ ] `3`
* [ ] `(2π)/3`
{.col-5}

---

![](/resources/9-15-bubble-solution/3-triangles-answer.jpg){image align="right"}
For convenience we have used `A1`, `A2` etc for the subsequent positions taken up by `A`, `B` and `C`.  

`C` first moves along a circular arc with centre `B`. This arc has radius 1.

Since ∠`CBC1` = 120°, which corresponds to one-third of a complete turn, the length of this arc is `1/3 × 2π = 2/3π`.  

When the triangle is rotated about the point `C1` the vertex `C` does not move at all. Finally, when the triangle is rotated about the point `A2`, `C` again turns through an angle 120°, and so again moves along an arc of length `2/3π`.

Therefore the total length of the path traced out by `C` is `(2π)/3` + `(2π)/3` = `(4π)/3`.
:::


## 4.	Equable triangles

::: problem id=4 marks=3
__4.1__ An “equable triangle” is one whose perimeter equals its area. There are only five equable triangles with integer lengths, i.e., its sides have whole number lengths. And only two of these are right-angled triangles.  

One of them is the right-angled triangle with sides 6, 8 and 10 units. The perimeter is (6 + 8 + 10 = 24 units) and the area is (½ × 6 × 8 = 24 units<sup>2</sup>).  

What is the other equable right-angled triangle with integer length sides? Just type in the length of the hypotenuse, so we know that you have identified the correct triangle.

^^^ hint id=1
There is no easy way to do this, as far as I know, apart from writing the dimensions of some right-angled triangles. You should know or be able to work out the lengths of the smallest right-angled triangles.
^^^

<input type="number" solution="13"/> units.

---

I am not sure if there is another way to approach this, but one way is to start listing some of the simple right-angled triangles and testing them one by one. You should know some of these by heart, namely, the 3-4-5 or the 5-12-13.

Here is a table showing some of the smallest right-angled triangles. The third triangle is indeed equable.

| Side 1 | Side 2 | Hypotenuse | Perimeter | Area |
| ------ | ------ | ---------- | --------- | ---- |
| 3      | 4      | 5          | 12        | 6    |
| 9      | 12     | 15         | 54        | 36   |
| 5      | 12     | 13         | **30**    | **30**   |
:::


## 5. Intermediate Maths Challenge Problem (UKMT)
<!--- 2011 (16) --->

_WARNING: this question is from the 16-25 section of a past paper, so it is trickier._

::: problem id=5 marks=4
![](/resources/9-15-bubble-solution/5-squares.jpg){image align="right"}
__5.1__ The diagram shows an L-shape divided into 1 × 1 squares.  

Gwyn cuts the shape along some of the lines shown to make two pieces neither of which is a square.  

She then uses the pieces to form a 2 × 6 rectangle.  

What is the difference between the areas of the two pieces?

^^^ hint id=2
Ideally, you might want to cut across the diagonal between the two corners of the L-shape, but you are only allowed to cut along the grid lines... so maybe you can cut close to the diagonal along the grid lines.

![](/resources/9-15-bubble-solution/5-squares-hint.png){image align="center"}
^^^

^^^ hint id=3
Once you have cut the shape into two pieces, you might need to flip over one piece.
^^^

* [ ] 0
* [ ] 1
* [x] 2
* [ ] 3
* [ ] 4
{.col-5}

---

![](/resources/9-15-bubble-solution/5-squares-answer.jpg){image align="right"}
The L-shape needs to be divided as shown if Gwyn is to make a 2 × 6 rectangle from two pieces which are not squares.  

Note that one piece must be turned over.  

The pieces have areas 7 and 5, whose difference is 2.

__IMPORTANT NOTE:__ For questions 16 to 25 in the UKMT Intermediate Maths Challenge, you will LOSE marks for circling the wrong answer. Therefore, you might think it is better not to answer a question if you have no idea about the correct answer. However, if you can exclude a couple of the choices, then it is probably worth taking an educated guess from the remaining three answers.   

In this case, if you have an even number of squares to start with and you split the area into two new parts then the difference in the two new areas must be even. In this case we started with 12 squares, and this could be split into 6 + 6 (difference = 0), 7 + 5 (difference = 2), 8 + 4 (difference = 4), etc. This means we can exclude the multiple choices B (1) and D (3). Then you could take a guess from A, C and E, but hopefully you will be able to work out the right answer without guessing.
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
