# The Ham Sandwich Problem

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


## 1. Quick trick

::: problem id=1_1 marks=2
__1.1__ Think of any 3-digit number, but make sure that the first digit is the biggest and the third digit is the smallest. So, for example, you could pick 531, but not 536 or 555.  

Next, reverse your 3-digit number to create a new number.  

Next, subtract this new (smaller) number from the original number to create what we will call the core number.  

Next, reverse the core number to create the eroc number.  

Finally, add the core number and the eroc number and enter the result below.  

When you receive your answers and solutions, make sure that you check them properly, as there is a nice explanation of how I knew what your answer would be.

<input solution="1089"/>

---

You can present this as a magic trick, where you ask someone to pick a 3-digit number and follow the instructions that you give them. The results will always be 1089. Why?  

If we let a, b, c represent the three digits of the original number, then the three-digit number is abc or 100a + 10b + c.  

The reversed number is 100c + 10b + a.  

When you subtract the new number from the original number, the result is (100a + 10b + c) – (100c + 10b + a), which equals 99(a - c).  

Since the digits in the original number were decreasing, (a - c) is at least 2 and no greater than 9, so the result must be 198, 297, 396, 495, 594, 693, 792, or 891.  

When you add any one of those numbers to the reverse of itself, the sum is always 1089.
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- 2014 (6) --->

::: problem id=2 marks=2
![](/resources/9-37-ham-sandwich-problem/2-squares.png){image align="right"}
__2.1__ The shape shown on the right was assembled from three identical copies of one of the smaller shapes below, without gaps or overlaps.  

Which smaller shape was used?

* [ ] A: ![](/resources/9-37-ham-sandwich-problem/2-squares-a.png)
* [ ] B: ![](/resources/9-37-ham-sandwich-problem/2-squares-b.png)
* [ ] C: ![](/resources/9-37-ham-sandwich-problem/2-squares-c.png)
* [ ] D: ![](/resources/9-37-ham-sandwich-problem/2-squares-d.png)
* [x] E: ![](/resources/9-37-ham-sandwich-problem/2-squares-e.png)
{.col-3}

---

![](/resources/9-37-ham-sandwich-problem/2-squares-answer.png){image align="right"}
The large shape is made up of 21 small squares and so can only be assembled by using three copies of a shape made up of 7 squares. This rules out options A and C. The diagram on the left below shows how the large shape may be assembled from three copies of shape E.  

In the IMC we are entitled to assume that only one of the given options is correct. So we could stop here.  

![](/resources/9-37-ham-sandwich-problem/2-squares-answer2.png){image align="right"}
However, it is worth considering how we might show convincingly that neither option B nor D can be used. It is easier to think of trying to fit three copies of these shapes into the larger shape without gaps or overlaps, than of assembling the larger shape out of them. If we concentrate on the 2 × 2 block of squares on the left of the larger shape, we can easily see that there is no way that copies of the shape of option B can be fitted into the larger shape to cover these 4 squares. The only way that the shape of option D can do this is shown on the left. It is easy to see that it is not possible to fit two more copies of the shape into the remaining squares without overlaps.  

So neither option B nor option D will work. We therefore conclude that the shape of option E is the only one that we can use to make the larger shape.
:::


## 3. The ham sandwich problem

This is an interesting video by the mathematician Hannah Fry, made for the Numberphile YouTube channel. Take a look at the video and answer the question below.  

WARNING: this video explains how to cut one slice of bread, then a slice of ham and then another slice of bread. The first two cuts are fairly easy to follow, but don’t worry if you can’t quite grasp how the third cut is always possible.

@[youtube](YCXmUi56rao?end=297&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=3_1 marks=2
__3.1__  When you imagine cutting the first slice of bread in half, how many ways can you do this?

* [ ] 0
* [ ] 1
* [ ] 2
* [ ] 4
* [ ] 8
* [x] ∞
{.col-3}
:::


## 4. Intermediate Maths Challenge Problem (UKMT)
<!--- 2014 (20) --->

::: problem id=4_1 marks=4
![](/resources/9-37-ham-sandwich-problem/4-pentagon.png){image align="right"}
__4.1__ The diagram shows a regular pentagon and five circular arcs.  

The sides of the pentagon have length 4.  

The centre of each arc is a vertex of the pentagon, and the ends of the arc are the midpoints of the two adjacent edges.  

What is the total shaded area?

* [ ] `8π`
* [ ] `10π`
* [ ] `12π`
* [x] `14π`
* [ ] `16π`
{.col-5}

^^^ hint id=4_1_1
The radius of each incomplete circle is 2.
^^^

^^^ hint id=4_1_2
The interior angles of the pentagon are 108 degrees.
^^^

^^^ hint id=4_1_3
Each shaded circle sector is [(360 – 108)/360] x (arc of the complete circle)
^^^

---

![](/resources/9-37-ham-sandwich-problem/4-pentagon-answer.png){image align="right"}
The shaded area is made up of 5 sectors of circles each of whose radius is half the side length of the pentagon, that is, 2. From the formula `πr^2` for the area of a circle with radius 2, we see that each of the complete circles has area `4π`.  

The interior angle of a regular pentagon is 108°. Therefore each of the sectors of the circles subtends an angle `360° − 108° = 252°` at the centre of the circle. So the area of each sector is `252/360 = 7/10` of the area of the circle. It follows that the total shaded area is `5 × (7/10 × 4π) = 14π`.
:::


## 5. Which letter?

::: problem id=5_1 marks=2
![](/resources/9-37-ham-sandwich-problem/5-letter.png){image align="right"}
__5.1__ This terrific "funny fold" puzzle is by Martin Gardner & Scott Kim.

The figure on the right is a letter of the alphabet that has been cut out of paper and folded just once.  

It is __NOT__ the letter __L__.   

What letter is it?

<input solution="F"/>
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
