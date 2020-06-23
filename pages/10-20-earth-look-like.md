# What does the Earth look like?

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by Sunday night if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.


## 1. Spot the pattern

As soon as you start learning mathematics, you start learning about patterns and sequences.  

1, 2, 3, 4, then 5  
2, 4, 6, 8, then 10  

But what comes next in the following sequences? WARNING – the answer is NOT the obvious answer.  

::: problem id=1_1 marks=2
__1.1__ 1, 2, 4, 8, 16, ... ?  

Imagine taking a circle with some dots around the edge and then join every dot to every other dot with a straight line, and then count the number of areas.

![](/resources/10-20-earth-look-like/1-pattern.gif){image align="center"}

- The 1st number is the number of areas within a circle with 1 dot, which is 1.  
- The 2nd number is the number of areas within a circle with 2 dots, which is 2.
- The 3rd number is the number of areas within a circle with 3 dots, which is 4.
- The 4th number is 8, the 5th number is 16, but what is the 6th number?

<input solution="31"/>

---

31 areas.  

![](/resources/10-20-earth-look-like/1-pattern-answer.jpg){image align="center"}
:::

::: problem id=1_2 marks=3
__1.2__ 2, 3, 5, 7, 11, 13, ... ?  

This is the Farey sequence, which is the number of distinct fractions that exist as the denominator increases  

- If the denominator is 1, then there are only 2 fractions, (0/1,  1/1).
- If the denominator is 1 or 2, then there are only 3 fractions, (0/1,  1/2,  1/1).
- If the denominator is 1 or 2 or 3, then there are only 5 fractions, (0/1,  1/3,  1/2,  2/3,  1/1).
- If the denominator is 1 or 2 or 3 or 4, then there are only 7 fractions, (0/1,  1/4,  1/3,  1/2,  2/3,  3/4,  1/1).  

If the denominator can also be 5, then there are 11 fractions, and if the denominator can also be 6, then there are 13 fractions, but how many fractions are there if the denominator can go up to 7?

<input solution="19"/>

---

19, because we have `0/1, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 2/5, 3/7, 1/2, 4/7, 3/5, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 1/1`.  
:::

::: problem id=1_3 marks=3
__1.3__ 1, 2, 3, 4, ... ?  

This sequence is all about perfect numbers, and the number of digits in a perfect number.  

- The 1st perfect number is 6 with 1 digit.
- The 2nd perfect number is 28 with 2 digit.
- The 3rd perfect number is 496 with 3 digit.
- The 4th perfect number is 8,128 with 4 digit.  

So, how many digits are in the 5th perfect number?

<input solution="8"/>

---

8, because the 5th perfect number is 33,550,336.
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- (2003) Q1 --->

::: problem id=2_1 marks=3
__2.1__ What is the value of 3 divided by `1/2`?

* [ ] `1/6`
* [ ] `2/3`
* [ ] `1 1/2`
* [ ] `4 1/2`
* [x] `6`
{.col-5}

---

`3 ÷ 1/2 = 3 × 2 = 6`.
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2003) Q11 --->

::: problem id=3_1 marks=4
__3.1__ Which of the following fractions is in the middle when they are written in ascending numerical order?

* [ ] `4/7`
* [x] `5/8`
* [ ] `3/4`
* [ ] `7/11`
* [ ] `8/13`
{.col-5}

^^^ hint id=3_1 marks=1
You really should be able to work this out using your fractions skillset. However, if you are struggling then (a) try turning each fraction into a decimal and (b) then go away and do some fractions practice.
^^^

---

The fractions exceed `1/2` by `1/14`, `1/8`, `1/4`, `3/22` and `3/26` respectively, i.e. by `3/42`, `3/24`, `3/12`, `3/22` and `3/26`. Thus the fraction in the middle will be that which exceeds `1/2` by `3/24`.
:::


## 4.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2003) Q21 --->

::: problem id=4_1 marks=5
![](/resources/10-20-earth-look-like/4-park.jpg){image align="right"}
__4.1__ In a leisure park there are three running tracks, all with the same Start and Finish, and all made from either one or two semicircles with centres on the same line.  

Three runners, `P`, `Q` and `R` start together at the Start and run at the same constant speed along the tracks as shown.  

In what order do they reach the Finish?  

* [ ] `P` then `Q` then `R`
* [ ] `R` first then `P` and `Q` together
* [ ] `R` then `Q` then `P`
* [x] All three together
* [ ] More information needed

---

Let the radius of R's track be r and let the radius of the first semicircle of P's track be p; then the radius of the second semicircle of this track is r - p. The total length of P's track is πp + π(r - p) = πr, the same as the length of R's track. By a similar argument, the length of Q's track is also πr, so all three runners finish at the same time.
:::


## 5.	What Does Earth Look Like?

Here’s a video from Michael Stevens, the man behind the Vsauce YouTube channel, all about the Earth, what it looks like, the physics of vision and the mathematics of maps. Take a look and answer the questions below.  

@[youtube](2lR7s1Y6Zig?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=5_1 marks=2
__5.1__ No map is perfect, but what are the pros and cons of the Mercator projection map?

* [x] It preserves shape, but not area.
* [ ] It preserves area, but not shape.
* [ ] It makes countries far from the equator look small.
* [ ] It distorts the shape of countries near the equator.
:::

::: problem id=5_2 marks=2
__5.2__ Which map has the following properties: “Landmasses are the right relative size, but shape is sacrificed”?

* [ ] A globe
* [ ] Winkel-Tripel
* [x] Gall-Peters
* [ ] Dymaxion
* [ ] Van der Grinton
:::

::: problem id=5_3 marks=2
__5.3__ The [xkcd comic strip appears online](https://xkcd.com/){target="_blank"}, written and drawn by the incredibly brilliant Randall Munroe. Knock yourself out and explore his comic strips. If there is an ounce of nerd in you, then you will have a blast.  

[Take a look at his comic strip about map projections](https://xkcd.com/977/){target="_blank"}. Which map is for people who are not complicated, who love the Mercator projection, but prefer circles to squares?

* [ ] A globe
* [ ] Winkel-Tripel
* [ ] Gall-Peters
* [ ] Dymaxion
* [x] Van der Grinton
:::



There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.  

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
