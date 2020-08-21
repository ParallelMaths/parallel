# The Game of Life

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


## 1. Intermediate Maths Challenge Problem (UKMT)
<!--- (2000) Q9 --->

::: problem id=1_1 marks=3
__1.1__ Leap years normally occur every four years. However, years at the turn of a century are leap years only if they are multiples of 400. Therefore the year 2000 was a leap year, but the year 1900 was not a leap year. How many leap years will there be between 2001 and 3002?

* [ ] 240
* [x] 242
* [ ] 248
* [ ] 249
* [ ] 250
{.col-5}

---

The numbers of multiples of 4 between 2001 and 3001 is 250. However the following years will not be leap years: 2100, 2200, 2300, 2500, 2600, 2700, 2900, 3000. This leaves 242 leap years.
:::


## 2.	John Conway’s Game of Life

Watch this interview with one of the greatest mathematicians of the twentieth century, John Horton Conway, from the YouTube channel Numberphile.  

@[youtube](E8kUJL04ELA?start=61&end=334&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

John Conway described his Game of Life, in which cells in a grid change between dead/alive (empty/filled) according to a simple set of rules:  
* Cells which are 'alive' die from over-population if they have more than 3 neighbours.  
*	Cell which are ‘alive’ die from under-population if they have less than 3 neighbours.  
*	Otherwise, they survive.  
*	Dead cells come to life if they have exactly 3 live neighbours.  

::: problem id=2_1 marks=1
__2.1__ One simple configuration in the Game of Life seems to walk across the plane. What is its name?

* [x] A glider
* [ ] A walker
* [ ] A frog
* [ ] A gun
{.col-4}
:::

::: problem id=2_2 marks=3
__2.2__ What is the next generation of this configuration?   

![](/resources/11-04-game-of-life/2-life-question.png){image align="center"}  

* [ ] ![](/resources/11-04-game-of-life/2-2-life-a.png)
* [ ] ![](/resources/11-04-game-of-life/2-2-life-b.png)
* [ ] ![](/resources/11-04-game-of-life/2-2-life-c.png)
* [x] ![](/resources/11-04-game-of-life/2-2-life-d.png)
{.col-4}
:::

::: problem id=2_3 marks=3
__2.3__ Some configurations in the Game of Life don’t change, each generation being the same as the previous. These are called ‘still lifes’.   

Which one of these configurations is NOT a still life?

* [ ] ![](/resources/11-04-game-of-life/2-3-life-a.png)
* [ ] ![](/resources/11-04-game-of-life/2-3-life-b.png)
* [ ] ![](/resources/11-04-game-of-life/2-3-life-c.png)
* [ ] ![](/resources/11-04-game-of-life/2-3-life-d.png)
* [x] ![](/resources/11-04-game-of-life/2-3-life-e.png)
{.col-5}

^^^ hint id=2_3_1 marks=1
In the first configuration, none of the dead cells have exactly 3 alive neighbours, so none of them will be born. Also, all of the alive cells have exactly two alive neighbours, so none of them will die. So the first configuration is a still life.
^^^

^^^ hint id=2_3_2 marks=2
Try each one of these configurations on this [Game of Life simulator](https://bitstorm.org/gameoflife/){target="_blank"}.
^^^

---

![](/resources/11-04-game-of-life/2-3-life-e.png){image align="center"}  

If you don’t believe me, try them out on this  [Game of Life simulator](https://bitstorm.org/gameoflife/){target="_blank"}.
:::

::: problem id=2_4 marks=3
__2.4__ 2.4	John Conway was also interested in what he called the ‘look-and-say’ sequence. What would be the next number in this sequence? (See if you can figure out the pattern yourself before you resort to google!)  

1, 11, 21, 1211, ...

<input solution="111221"/>

^^^ hint id=2_4_1 marks=1
One way to say the number 113221 is “Two ones, one three, two twos, and one one”.  

How would you say the numbers above in this way?
^^^

^^^ hint id=2_4_2 marks=1
1 is one one or 11.  

Then 11 is two ones or 21.  

Do you get the idea?
^^^
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2000) Q18 --->

::: problem id=3_1 marks=4
__3.1__ The number `3^4 × 4^5 × 5^6` is written out in full. How many zeroes are there at the end of the number?

* [ ] None
* [ ] 4
* [ ] 5
* [x] 6
* [ ] more than 6
{.col-5}

^^^ hint id=3_1 marks=1
We need to write `3^4 × 4^5 × 5^6` in the form `a × 10^n`, where `a` is not a multiple of 10.
^^^

^^^ hint id=3_2 marks=1
`3^4 × 4^5 × 5^6 = 3×4 × 2^10 × 5^6 = 3^4 × 2^4 × 2^6 × 5^6`
^^^

^^^ hint id=3_3 marks=1
`3^4 × 2^4 × 2^6 × 5^6 = 3^4 × 2^4 × 10^6`
^^^

---

We need to write `3^4 × 4^5 × 5^6` in the form `a × 10^n`, where `a` is not a multiple of `3^4 × 4^5 × 5^6 = 3×4 × 2^10 × 5^6 = 3^4 × 2^4 × 2^6 × 5^6 = 3^4 × 2^4 × 10^6`.  

Hence the number ends in six zeroes.
:::


## 4.	Reversing percentages

Have you ever realised that 40% of 80 is the same as 80% of 40? You can see this clearly by comparing the decimal calculations, 80 × 0.4 and 40 × 0.8.

Imagine that someone asks you to work out 8% of 25. That looks horrible, but it is the same as 25% of 8, which is much easier to calculate.

::: problem id=4_1 marks=4
__4.1__ 4.1	What is 2.468% of 50?

<input solution="1.234"/>

---

2.468% of 50 = 50% of 2.468 = 1.234.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2010) Q23 --->

::: problem id=5_1 marks=5
__5.1__ `ABCDEFGHI` is a regular nine-sided polygon (called a 'nonagon' or 'enneagon'). What is the size of angle `FAE`?

* [ ] 10°
* [x] 20°
* [ ] 30°
* [ ] 40°
* [ ] 50°
{.col-5}

^^^ hint id=5_1 marks=1
The interior angle of a regular nine-sided polygon `= 180° - (360° ÷ 9)`
^^^

^^^ hint id=5_2 marks=1
Consider the pentagon `ABCDE`: `EAB =  1/2(540° - 3 × 140°) = 60°`.  
^^^

---

The interior angle of a regular nine-sided polygon `= 180° - (360° ÷ 9) = 140°`.  

Consider the pentagon `ABCDE`: `EAB =  1/2(540° - 3 × 140°) = 60°`.  

Similarly `FAI = 60°` and hence `FAE = 140° - (60° + 60°) = 20°`.  
:::


I hope you enjoyed this Parallelogram. There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
