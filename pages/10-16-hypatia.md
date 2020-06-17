# Hypatia

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


## 1. Assumptions

Take a look at this mind-blowing 43 second video from the psychologist Professor Richard Wiseman. If you like it, then take a look at the [Prof’s YouTube channel](https://www.youtube.com/user/Quirkology){target="_blank"} afterwards.

@[youtube](zNbF006Y5x4?rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_


## 2. The letter A in numbers

::: problem id=2_1 marks=2
__2.1__ What is the first number that is less than 200 and which contains the letter A when it is spelt out? Write the answer as a number.

<input solution="101"/>
:::

::: problem id=2_2 marks=2
__2.2__ What is the first number that contains the letter A when it is spelt out? In this case the word AND does NOT count. Write the answer as a number.  

<input solution="1,000"/>
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q7 --->

::: problem id=3_1 marks=3
__3.1__ Four different positive integers are to be chosen so that they have a mean of 2017.  

What is the smallest possible range of the chosen integers?

* [ ] 2
* [ ] 3
* [x] 4
* [ ] 5
* [ ] 6
{.col-5}

---
We recall that the _range_ of a set of numbers is the difference between the largest and smallest numbers in the set.  

The smallest range of a set of four different positive integers is 3. This occurs when the integers are consecutive, and only in this case. We first show that we cannot have four consecutive integers with a mean of 2017.  

Assume, to the contrary, that n is a positive integer such that the consecutive integers `n`, `n + 1`, `n + 2` and `n + 3` have 2017 as their mean.  

Then `1/4 (n + (n + 1) + (n + 2) + (n + 3)) = 2017`,  

and hence `n + (n + 1) + (n + 2) + (n + 3) = 4 × 2017`.  

It follows that `4n + 6 = 4 × 2017`,  

and hence `4n = 4 × 2017 − 6`.  

Therefore `n = 2017 − 3/2`, contradicting our assumption that `n` is an integer. This contradiction shows that there do not exist four consecutive integers whose mean is 2017. So the smallest possible range is not 3.  

On the other hand, we see that the four integers 2015, 2016, 2018 and 2019 have mean 2017, because  

`2015 + 2016 + 2018 + 2019 = (2015 + 2019) + (2016 + 2018)`  
`= 2 × 2017 + 2 × 2017`  
`= 4 × 2017`.  

The range of these numbers is 2019 − 2015, that is, 4. We deduce that the smallest possible range is 4.
:::


## 4.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q14 --->

::: problem id=4_1 marks=4
__4.1__ For what value of `x` is `64^x` equal to `512^5`?

* [ ] 6
* [x] 7.5
* [ ] 8
* [ ] 16
* [ ] 40
{.col-5}

^^^ hint id=4_1 marks=1
Convert everything into powers of 2.
^^^

^^^ hint id=4_2 marks=1
`64^x = (2^6) ^x = 2^(6x)`
^^^

---

We note first that `64 = 2^6` and `512 = 2^9`. Therefore `64^x = (2^6) ^x = 2^(6x)` and `512^5 = (2^9) ^5 = 2^(9 × 5) = 2^45`.  

It follows that the equation `64^x = 512^5` is equivalent to the equation `2^(6x) = 2^45`. We deduce from this that `6x = 45`. Hence  

`x = 45/6 = 15/2 = 7.5`.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q22 --->

::: problem id=5_1 marks=5
![](/resources/10-16-hypatia/5-shape.jpg){image align="right"}
__5.1__ The diagram shows an arc `PQ` of a circle with centre `O` and radius 8.  

Angle `QOP` is a right angle, the point `M` is the midpoint of `OP` and `N` lies on the arc `PQ` so that `MN` is perpendicular to `OP`.  

Which of the following is closest to the length of the perimeter of triangle `PNM`?

* [ ] 17
* [ ] 18
* [x] 19
* [ ] 20
* [ ] 21
{.col-5}

^^^ hint id=5_1 marks=2
![](/resources/10-16-hypatia/5-shape-asnwer.jpg){image align="right"}
Because `NM` is perpendicular to `OP`, the triangle `OMN` has a right angle at `M`. Therefore, by Pythagoras’ Theorem,  

`OM^2 + NM^2 = ON^2`.  

Since `M` is the midpoint of `OP` and the circle has radius 8, it follows that `OM = 4`. Also `ON = 8`.  

Therefore, by the above equation `NM^2 = 8^2 − 4^2 = 64 − 16 = 48`.  

It follows that `NM = sqrt(48)`.  
^^^

---
![](/resources/10-16-hypatia/5-shape-asnwer.jpg){image align="right"}
Because `NM` is perpendicular to `OP`, the triangle `OMN` has a right angle at `M`. Therefore, by Pythagoras’ Theorem,  

`OM^2 + NM^2 = ON^2`.  

Since `M` is the midpoint of `OP` and the circle has radius 8, it follows that `OM = 4`. Also `ON = 8`. Therefore, by the above equation `NM^2 = 8^2 − 4^2 = 64 − 16 = 48`. It follows that `NM = sqrt(48)`.  

In the right-angled triangle `NMP`, we have `NM^2 = 48` and `MP^2 = 4^2 = 16`. Therefore, by Pythagoras’ Theorem applied to this triangle, `NP^2 = MN^2 + MP^2 = 48 + 16 = 64`, and therefore `NP = 8`.  

It follows that the perimeter of the triangle `PNM` is `MP + PN + NM = 4 + 8 + sqrt(48) = 12 + sqrt(48)`.  

Because `sqrt(48)` is close to 7, the perimeter is close to `12 + 7 = 19`.
:::


## 6. Hypatia

If you travelled back in time 1,600 years or so, then one of the greatest mathematicians in the world was Hypatia. She lived a courageous life and who ultimately faced a terrible death, as revealed in this short video.  

@[youtube](n1mwZrVJ-TI?end=283&rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

::: problem id=6_1 marks=2
__6.1__ One of Hypatia’s interests was “conic sections”, which is all about the different curves that can be created by slicing through a cone. Imagine taking an axe chopping through a cone.  

Which of these is NOT a conic section? You might want to google for clues.

* [ ] Circle
* [x] Spiral
* [ ] Ellipse
* [ ] Parabola
* [ ] Hyperbola
{.col-5}

---
![](/resources/10-16-hypatia/6-conic_sections.png){image align="center"}
:::


There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
