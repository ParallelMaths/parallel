# Joseph’s machines

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
* It’s half-term for most of you, so this Parallelogram is a bit longer and you have a bit more time to complete it. Importantly, double badge points!
*	Finish by midnight on Sunday if your whole class is doing parallelograms.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.


## 1. History of Mathematics

As mentioned last week, the terrific Mathigon website has loads of great material, including a timeline showing the great mathematicians of past centuries. Visit the [timeline](https://mathigon.org/timeline){target="_blank"} (click and it will open up in a new tab) and answer the three questions below. __Just enter the name given in the plum box__.

So, if the answer is John Napier, just enter __Napier__, because that is the name that appears in the plum-coloured box on the timeline:

![](/resources/7-30-sumaze/1-napier.png){image align="center"}

::: problem id=1_1 marks=2
__1.1__ Looking at twentieth century mathematicians 1900 to 1999, what is the surname of the mathematician who invented the Game of Life?

<input type="text" solution="CONWAY"/>
:::

::: problem id=1_2 marks=2
__1.2__ Looking at twentieth century mathematicians 1900 to 1999, what is the surname of the Iranian-born mathematician who won the highest honour in mathematics, the Fields Medal?

<input type="text" solution="MIRZAKHANI"/>
:::


## 2. Junior Maths Challenge Problem (UKMT)
<!--- 2017 (23) --->

::: problem id=2_1 marks=2
__2.1__ The positive integers from 1 to 150 inclusive are placed in a 10 by 15 grid so that each cell contains exactly one integer. Then the multiples of 3 are given a red mark, the multiples of 5 are given a blue mark, and the multiples of 7 are given a green mark. How many cells have more than 1 mark?

* [ ] 10
* [ ] 12
* [ ] 15
* [ ] 18
* [x] 19
{.col-5}

---
The squares that receive more than one mark are those which contain integers which are divisible by at least two of the integers 3, 5 and 7. The integers 3 and 5 are coprime, that is, they have no common factor other than 1. Therefore the integers that are divisible by 3 and 5 are precisely those that are divisible by 3 × 5, that is, by 15. Every 15th integer is divisible by 15. Hence the number of integers in the range from 1 to 150 that are divisible by 15 is (`150 ÷ 15`) which is 10.

Similarly, the integers that are divisible by 3 and 7 are precisely those that
are divisible by `3 × 7 = 21`. The number of integers in the range from 1 to 150 that are divisible by 21 is 7, because 21 divides into 150 only 7 (and a bit) times.

Similarly, the integers that are divisible by 5 and 7 are precisely those that are divisible by `5 × 7 = 35`. The number of integers in the range from 1 to 150 that are divisible by 35 is 4, because 35 divides into 150 only 4 (and a bit) times.

So it seems that we have `10 + 7 + 4` (or 21) numbers that will have multiple marks because they have multiple divisors.

However, you need to check for numbers that are divisible by 3, 5 and 7, because they would have been counted three times, not just once – when you look for numbers that are divisible by 3 and 5, then 3 and 7, then 5 and 7. In fact, the only number less than 150 divisible by 3, 5 and 7 is 105, so you only need to remove 2 from your tally, so that it is only counted once, i.e., the answer is `10 + 7 + 4 – 2 = 19`.
:::


## 3. Sumaze! Part 1

Sumaze! is a terrific game that tests your core maths skills. It was created by Richard Lissaman, who is part of MEI (Mathematics in Education & Industry).

You will have access to 9 levels of the game, starting with some really trivial ones to allow you to understand the game, followed by some trickier levels. You score 1 point for level 1, 2 points for level 2, 3 points for level 3 and so on up to 9 points for level 9.

However, you will lose 2 points for every hint you use (available on levels 8 & 9). And if you have to restart a level then you will lose 1 point each time, up to a maximum of 4 lost points. So, if you need one hint on level 9, then your maximum score goes from 9 down to 7. And if you succeed after restarting three times, then your score drops from 7 down to 4.

It is easier to understand Sumaze! by playing it, but in case it helps here are a few important rules and tips:

* Aim to move your blue box to reach the “end of level” square.
* Your box cannot at any time contain a number bigger than 1,000.
* Your box cannot at any time contain a number that is a fraction.
* You sometimes need keys to open doors to reach the “end of level” square.
* Passing through an arrow means you cannot go back.
* To pass through a green square you must satisfy the square’s condition.
* Pink squares (and their operations) disappear when you move onto them.
* Lilac squares (and their operations) can be crossed over and over again.
* IMPORTANT – Sumaze won't run on a smartphone. If you are currently on a smartphone,
  then type this into your PC/Mac/tablet browser: bit.ly/parallel_sumaze

You can stop and start Sumaze!, and the website will use cookies to remember your level and score so far,
but it is better to finish all the levels once you have started.

[Open Sumaze](https://integralmaths.org/games/parallel_sumaze_i/){.external target="_blank"}

::: problem id=3_1 marks=4.5
**3.1** When you have finished Sumaze, you will receive a score and a code word.
Please enter your code word here, so that we can add your Sumaze score to your
overall Parallelogram total.

<input solution="sumaze" class="correct" placeholder="Sumaze Code Word"/>

Score: {{c.sumaze(c.answers.p_3_0)}} / 45 {.sumaze-score v-show="c.answers.p_3_0"}

*The maximum score in Sumaze is 1 + 2 + 3 + … + 9 = 45. We will divide your
Sumaze score by 10 and add it to your overall Parallelogram score. So
ultimately a perfect Sumaze score will add 45/10 = 4.5 to your Parallelogram
total score.*

---
[This video clip](https://integralmaths.org/games/sumaze_solutions.mp4){target="_blank"} shows the paths you should or could have taken to solve each stage with a perfect score.
:::


## 4. The Page Turner

If you scroll down, you will see one of my favourite YouTube videos, which features a complex machine designed just to turn the page of a newspaper. It is the work of the eccentric inventor Joseph Herscher. While you watch it, try to answer the questions below.

::: problem id=4_1 marks=2
__4.1__ The 4-ball encounters three goblets, but it does not drop into any of them because they are filled with:

* [ ] Sand
* [x] Balls
* [ ] Water
* [ ] Cheese
* [ ] Compressed air
:::

::: problem id=4_2 marks=2
__4.2__ How does the water move from a beaker to a sponge, causing the sponge to get heavier and tip down?

* [x] Boiling
* [ ] Freezing
* [ ] Pipe
* [ ] Pipette
* [ ] Suction
:::

@[youtube](GOMIBdM6N7Q?rel=0) _(If you have problems watching the video, right click to open it in a new window)_


## 5. Sumaze! Part 2

After the earlier taster, it's time for another set of Sumaze! challenges. The rules are the same, and you have 9 more levels to puzzle your way through!

[Open Sumaze](https://integralmaths.org/games/parallel_sumaze_ii/){.external target="_blank"}

::: problem id=5_1 marks=4.5
__5.1__ When you have finished Sumaze, you will receive a score and a code word.
Please enter your code word here, so that we can add your Sumaze score to your overall Parallelogram total.

<input solution="sumaze" class="correct" placeholder="Sumaze Code Word"/>

Score: {{c.sumaze(c.answers.p_2)}} / 45 {.sumaze-score v-show="c.answers.p_2"}


_The maximum score in Sumaze is 1 + 2 + 3 + … + 9 = 45. We will divide your
Sumaze score by 10 and add it to your overall Parallelogram score. So ultimately
a perfect Sumaze score will add 45/10 = 4.5 to your Parallelogram total score._

---
[This video clip](https://integralmaths.org/games/sumaze_solutions_ii.mp4){target="_blank"} shows the paths you should or could have taken to solve each stage with a
perfect score.
:::


## 6. Another of Joseph’s machines – his longest machine ever

::: problem id=6_1 marks=4
__6.1__ Another amazing invention by Joseph Herscher. Just one question. How many ping pong balls are tipped onto the table in order to just knock over a couple of dominos?

<input solution="12"/>
:::

@[youtube](nORRgU8sGdE?rel=0) _(If you have problems watching the video, right click to open it in a new window)_


Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	If you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelograms.
* The next Parallelogram will be out next Thursday at 3pm.


Cheerio,
Simon.
