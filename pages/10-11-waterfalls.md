# Waterfalls

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by Sunday night if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.


## 1. Waterfalls

::: problem id=1_1 marks=2
__1.1.__ What is the opposite of a waterfall?

* [ ] Ice fountain
* [ ] Steam spout
* [ ] Rock slide
* [x] Firefly
* [ ] Spider
{.col-5}

---

The opposite of water is fire, and the opposite of to fall is to fly.
:::


## 2. Peaceable Queens

Watch this video, which reveals a mathematics problem based on chess. Don’t worry – you don’t need to play chess to understand this problem. All you need to know is that the Queen can move forwards, backwards, left, right and diagonally one, two or several squares. Watch carefully and answer the questions below.

@[youtube](IN1fPtY9jYg?end=360&rel=0) _(If you have any problem seeing the video then just right-click on the video and open the video in a new window)_

::: problem id=2_1 marks=2
__2.1__ What is the maximum number of black and white peaceable queens that a 3x3 board can support?

* [ ] 0
* [x] 1 of each
* [ ] 2 of each
* [ ] 3 of each
* [ ] 4 of each
{.col-5}
:::

::: problem id=2_2 marks=2
__2.2__ What is the maximum number of black and white peaceable queens that an 8x8 board can support?

* [ ] 5 of each
* [ ] 6 of each
* [ ] 7 of each
* [ ] 8 of each
* [x] 9 of each
{.col-5}
:::

::: problem id=2_3 marks=4
__2.3__ For a 20x20 board, nobody knows for certain the maximum number of black and white peaceable queens that can be supported. Which of these numbers is a possible answer?

* [ ] 20
* [ ] 21
* [ ] 40
* [ ] 41
* [ ] 58
* [x] 59
{.col-3}

---

In the video, Neil Sloane explained that the number of peaceable queens was at least `(7 n^2)/48`, where `n` is the number of squares along one side of the board.  

`(7 × 20^2)/48 = 58.3`.  

We know this is a minimum, so the answer must be 59.
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q3 --->

::: problem id=3_1 marks=3
__3.1__ How many squares have 7 as their units digit?  

* [x] 0
* [ ] 1
* [ ] 2
* [ ] 3
* [ ] 4
{.col-5}

---

The units digit of the square of an integer `n` is the same as that of the square of the units digit of `n`.  

For example, the units digit of `237^2` is the same as that of `7^2`, namely 9.  

Therefore, to find the possible units digits of squares, we need only consider the squares of the one-digit numbers. We have `0^2 = 0`, `1^2 = 1`, `2^2 = 4`, `3^2 = 9`, `4^2 = 16`, `5^2 = 25`, `6^2 = 36`, `7^2 = 49`, `8^2 = 64` and `9^2 = 81`. This shows that the units digit of a square can only be 0, 1, 4, 5, 6 or 9.  

In particular, there are no squares which have 7 as their units digit.
:::


## 4.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2016) Q20 --->

::: problem id=4_1 marks=4
![](/resources/10-11-waterfalls/4-circles.jpg){image align="right"}
__4.1__ Two semicircles are drawn in a rectangle as shown.  

What is the width of the overlap of the two semicircles?

* [ ] 3 cm
* [ ] 4 cm
* [ ] 5 cm
* [x] 6 cm
* [ ] 7 cm

^^^ hint id=4_1 marks=2
![](/resources/10-11-waterfalls/4-circles-answer.jpg){image align="center"}
^^^

---
![](/resources/10-11-waterfalls/4-circles-answer.jpg){image align="right"}
Let `P`, `Q` be the midpoints of the longer sides of the rectangle. Let `R`, `S` be the points where the semicircles meet. Let `T` be the point where `PQ` meets `RS`.  

Each of the semicircles has radius 5 cm. Therefore `PR`, `PS`, `QR` and `QS` all have length 5 cm. Therefore `PSQR` is a rhombus. Hence the diagonals `PQ` and `RS` bisect each other at right angles. It follows that `PT` and `QT` each have length 4 cm. Let the common length of `RT` and `ST` be `x` cm.  

We now apply Pythagoras’ Theorem to the right-angled triangle `PTR`. This gives `4^2 + x^2 = 5^2`, and hence `x^2 = 5^2 − 4^2 = 25 − 16 = 9`. Therefore `x = 3`. It follows that both `RT` and `ST` have length 3 cm. Hence the length of `RS` is 6 cm. Therefore the width of the overlap of the two semicircles is 6 cm.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2016) Q23 --->

::: problem id=5_1 marks=5
![](/resources/10-11-waterfalls/5-shape.jpg){image align="right"}
__5.1__ A Saxon silver penny, from the reign of Ethelbert II in the eighth century, was sold in 2014 for £78 000.  

A design on the coin depicts a circle surrounded by four equal arcs, each a quarter of a circle, as shown.  

The width of the design is 2 cm.  

What is the radius of the small circle, in centimetres?

* [ ] `1/2`
* [x] `2 - sqrt(2)`
* [ ] `1/2 sqrt(2)`
* [ ] `5 - 3 sqrt(2)`
* [ ] `2 sqrt(2) - 2`

^^^ hint id=5_1 marks=1
![](/resources/10-11-waterfalls/5-shape-answer.jpg){image align="center"}
^^^

^^^ hint id=5_2 marks=2
We see from the diagram in the previous hint that the quarter circles touch each other tangentially. Let the points where they touch be `K`, `L`, `M` and `N`. Let the centres of the quarter circles be `P`, `Q`, `R` and `S`, arranged as shown in the diagram.  

Because the circles touch, `PKQ`, `QLR`, `RMS` and `SNP` are straight lines.  

Since `S` is the centre of the quarter circle that goes through `M` and `N`, we have `SM = SN` and `∠MSN = 90°`. Therefore `MSN` is a right-angled isosceles triangle. The length of the hypotenuse NM of this triangle is the width of the design, that is, 2 cm.

Therefore, by Pythagoras’ Theorem applied to the triangle `SMN`, we see that `SM` and `SN` each have length `sqrt(2)` cm.  
^^^

---
![](/resources/10-11-waterfalls/5-shape-answer.jpg){image align="right"}
We see from the diagram that the quarter circles touch each other tangentially. Let the points where they touch be `K`, `L`, `M` and `N`. Let the centres of the quarter circles be `P`, `Q`, `R` and `S`, arranged as shown in the diagram.  

Because the circles touch, `PKQ`, `QLR`, `RMS` and `SNP` are straight lines.  

Since `S` is the centre of the quarter circle that goes through `M` and `N`, we have `SM = SN` and `∠MSN = 90°`. Therefore `MSN` is a right-angled isosceles triangle. The length of the hypotenuse NM of this triangle is the width of the design, that is, 2 cm.

Therefore, by Pythagoras’ Theorem applied to the triangle `SMN`, we see that `SM` and `SN` each have length `sqrt(2)` cm.  

Similarly `MR` and `NP` both have length `sqrt(2)` cm. Therefore `SPR` is a right-angled isosceles triangle in which both `SR` and `SP` have length `2 sqrt(2)` cm. Therefore, by Pythagoras’ Theorem applied to the triangle `SPR`, the hypotenuse `PR` of this triangle has length 4 cm.  

[Alternatively, we could argue that `SNM` and `SPR` are similar triangles in which `SP` is twice the length of `SN`. Therefore `PR` is twice the length of `NM`.]  

The line segment `PR` is made up of two radii of the quarter circles with centres `P` and `R`, which have total length `2 sqrt(2)` cm, and the diameter of the small circle. It follows that the diameter of the small circle has length `4` cm `− 2 sqrt(2)` cm. The radius of the small circle is half of this, that is, `(2 − sqrt(2))` cm.
:::


There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
