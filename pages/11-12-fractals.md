# Fractals

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

These challenges are a random walk through the mysteries of mathematics, most of which will be nothing to do with what you are doing at the moment in your classroom. Be prepared to encounter all sorts of weird ideas, including a few questions that appear to have nothing to do with mathematics at all.

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by Sunday night if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.


## 1.	The Case of the Missing Fractals

Watch this mysterious video by science communicator George Zaidan, with animation by TED-ed.

@[youtube](0C75vRVL5lE?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=1_1 marks=1
__1.1__ The Sierpinski Triangle (or Sierpinski Gasket) is the name for the first fractal mentioned by Manny Brot in the video.  

It is made by removing a central triangle from a larger one, and then repeating for the three smaller triangles which are made in the process.  

As you repeat this process indefinitely, what is the area of the shape which is left?

* [ ] The same as the area of the original triangle
* [x] 0
* [ ] Infinity
* [ ] 1
:::

::: problem id=1_2 marks=3
__1.2__ What is the total area of the black space in this Sierpinski triangle given that the area of the largest triangle is 1 unit?

![](/resources/11-12-fractals/1-fractal-triangle.jpg){image align="center"}

* [x] `27/64` units
* [ ] `1/2` units
* [ ] `1/12` units
* [ ] `1/64` units
{.col-5}

^^^ hint id=1_2_1 marks=1
Manny Brot mentioned in the video that each time you remove another set of triangles, a quarter of the area is removed. Therefore, three quarters is left each time.
^^^

^^^ hint id=1_2_1 marks=1
If three quarters is left each time, then we want three quarters of three quarters of three quarters, since the process has been repeated three times.
^^^

---

Manny Brot mentioned in the video that each time you remove another set of triangles, a quarter of the area is removed. Therefore, three quarters is left each time.

If three quarters is left each time, then we want three quarters of three quarters of three quarters, since the process has been repeated three times.  

So the area is `(3 × 3 × 3)/(4 × 4 × 4) = 27/64` units
:::

::: problem id=1_3 marks=3
__1.3__ The Koch Snowflake is the name of the second fractal mentioned by Manny Brot.  

If the first stage has perimeter 81 units (pictured below left), what is the perimeter of the 3rd stage (pictured below right)?

![](/resources/11-12-fractals/1-koch-snowflake.jpg){image align="center"}

<input solution="144"/> units

^^^ hint id=1_3 marks=1
Manny Brot mentioned that ‘pinching’ the sides each time increased the perimeter by a third. This is the same as multiplying the perimeter by `4/3`.
^^^

---

Manny Brot mentioned that ‘pinching’ the sides each time increased the perimeter by a third. This is the same as multiplying the perimeter by `4/3`.  

In the third stage, the sides have been pinched in twice, so the perimeter is `4/3` of `4/3` of 81. So that is `(81 × 4 × 4)/(3 × 3) = 144` units.
:::


## 2.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q5 --->

::: problem id=2_1 marks=3
![](/resources/11-12-fractals/2-diagram.jpg){image align="right"}
__2.1__ In the diagram the lines `PQ` and `SR` are parallel, as are the lines `PS` and `QT`. What is the size of angle `x`?

* [ ] 139°
* [ ] 138°
* [x] 124°
* [ ] 98°
* [ ] 97°

---

Angle PSR = 41° (opposite angles of a parallelogram are equal). Therefore `x = 41 + 83` because the exterior angle of a triangle is equal to the sum of the two interior opposite angles.
:::


## 3.	Chaos Game

In the following Numberphile video, mathematician Ben Sparks demonstrates a game which produces surprising patterns. As you watch, see if you can guess what pattern the computer will make given the rules of the game.

@[youtube](kbKtFN71Lfs?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=3_1 marks=3
__3.1__ Play around with the settings of this chaos game by using the geogebra file which Ben used in the video. You can [find it by clicking here](https://www.geogebra.org/m/yr2XXPms){target="_blank"}.  

Set `n` to 4, and try to create the pattern that you saw in the video (see the picture below). You will need to tweak the value of “proportion”, which controls how far the tracepoint travels towards the randomly chosen dot each time.  

![](/resources/11-12-fractals/3-chaos-game.jpg){image align="center"}

What value of proportion works best to achieve this result?

* [ ] 1
* [ ] 0
* [ ] 0.75
* [x] 0.25
{.col-5}
:::


## 4.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q15 --->

::: problem id=4_1 marks=4
__4.1__ How many of the following numbers are greater than 10?

- `3 sqrt(11)`
- `4 sqrt(7)`
- `5 sqrt(5)`
- `6 sqrt(3)`
- `7 sqrt(2)`

* [ ] 1
* [ ] 2
* [x] 3
* [ ] 4
* [ ] 5
{.col-5}

^^^ hint id=4_1 marks=1
`3 sqrt(11) = sqrt(9) × sqrt(11) = sqrt(9 × 11) = sqrt(99)`
^^^

---

- `3 sqrt(11) = sqrt(9) × sqrt(11) = sqrt(9 × 11) = sqrt(99)`;   
- `4 sqrt(7) = sqrt(16) × sqrt(7) = sqrt(16 × 7) = sqrt(112)`;  
- `5 sqrt(5) = sqrt(25) × sqrt(5) = sqrt(25 × 5) = sqrt(125)`;  
- `6 sqrt(3) = sqrt(36) × sqrt(3) = sqrt(36 × 3) = sqrt(108)`;  
- `7 sqrt(2) = sqrt(49) × sqrt(2) = sqrt(49 × 2) = sqrt(98)`;  

Hence `4 sqrt(7)`, `5 sqrt(5)`, and `6 sqrt(3)` are all greater than 10.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q19 --->

::: problem id=5_1 marks=5
![](/resources/11-12-fractals/5-diagram.jpg){image align="right"}
__5.1__ The diagram shows a large rectangle composed of nine identical smaller rectangles.  

Both the length and breadth of each of these smaller rectangles are whole numbers of centimetres.  

Which of the following could be the area of the large rectangle?

* [ ] 450 cm<sup>2</sup>
* [ ] 630 cm<sup>2</sup>
* [ ] 1260 cm<sup>2</sup>
* [ ] 1440 cm<sup>2</sup>
* [x] 1620 cm<sup>2</sup>
{.col-5}

^^^ hint id=5_1 marks=1
The length:breadth ratio of the smaller rectangles is 5:4, because 5 breadths is equal to 4 lengths. Therefore, let the length and breadth of these rectangles be `5x`cm and `4x`cm respectively. What is the area of the larger rectangle in terms of `x`?
^^^

^^^ hint id=5_2 marks=1
The area of the large rectangle, in cm<sup>2</sup>, is `9 × 20x^2 = 180x^2`. Which of the options are multiples of 180? In each of those cases, what would `x` be?
^^^

^^^ hint id=5_3 marks=1
1260, 1440 and 1620 are the 7th, 8th and 9th multiples of 180 respectively. So, `x^2` would be 7, 8 or 9 respectively. Only one of these is viable.
^^^

---

The length:breadth ratio of the smaller rectangles is 5:4, because 5 breadths is equal to 4 lengths.  

Therefore, let the length and breadth of these rectangles be `5x`cm and `4x`cm respectively.  

The area of the large rectangle, in cm<sup>2</sup>, is `9 × 20x^2 = 180x^2` and the only one of the options which is equal to 180 multiplied by a perfect square is 1620, which corresponds to `x = 3`.
:::


I hope you enjoyed this Parallelogram. There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
