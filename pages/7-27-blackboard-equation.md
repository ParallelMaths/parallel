# Blackboard Equation

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


## 1. Hidden Figures – the blackboard equation

Last week, we featured the film “Hidden Figures”, about the black women who
played a crucial role in the space race, and you watched a trailer for the film.

A couple of you mentioned the equation that the young Katherine Johnson was
trying to solve on the school blackboard, which you can see in this still from
the film.

![](/resources/7-15-blackboard-equation/blackboard.png)

In case it is not clear, the question is:

Solve this equation for `x`: `(x^2 + 6x - 7)(2x^2 - 5x - 3) = 0`. {.text-center}

Some of you might have come across this sort of equation before, or perhaps a
simpler version of it. Either way, here is a step-by-step method for solving it,
or rather two methods.

### Method 1 (Brute force)

Brute force means doing it the hard way. If you want to open a locked door, then
the smart way is to find the key or pick the lock, but the brute force way is to
just smash through the door. In this case, brute force means testing every
possible value of `x` until you find some solutions.

For `x = 0`,

![](/resources/7-15-blackboard-equation/blackboard-equation-x0.png)

For `x = 1`,

![](/resources/7-15-blackboard-equation/blackboard-equation-x1.png)

For `x = 2`,

![](/resources/7-15-blackboard-equation/blackboard-equation-x2.png)

So, after checking three values of `x`, we found one solution, i.e., the equation
equals zero when `x = 1`. In this case, the brute force approach has delivered a
solution, but there are 4 solutions in total and it might take ages to find the
others if we followed the brute force approach, particularly if the other values
of `x` are very large or fractions or decimals.

### Method 2 (Smart Maths)

If we have an expression involving something like `(x^2 + 6x – 7)`, then we can
often factor it into a pair of simpler bracketed terms, which in this case would
be `(x + 7)(x – 1)`.

Similarly, we can rewrite `(2x^2 – 5x – 3)` as`(2x + 1)(x – 3)`.

Therefore, `(x^2 + 6x – 7)(2x^2 – 5x – 3) = 0` can be re-written as
`(x + 7)(x – 1)(2x + 1)(x – 3) = 0`.

Of course, if the four brackets multiply to make zero, then at least one of the
brackets must equal zero, which means `x = –7`, 1, –½ or 3.

::: problem id=1_1 marks=4
__1.1__ What are values for `x` in this equation? Try the Smart Maths method
first, but if you are stuck then try brute force.

`(x^2 – 3x + 2)(x^2 + 3x + 2) = 0` {.text-center}

There are 4 possible answers, two positive and two negative.

* Larger positive solution <input solution="2"/>
* Smaller positive solution <input solution="1"/>
* Less negative solution <input solution="-1"/>
* More negative solution <input solution="-2"/>

---

`(x^2 - 3x + 2)(x^2 + 3x + 2) = (x – 1)(x – 2)(x + 1)(x + 2) = 0`

So, `x` = 1, 2, -1, -2.
:::

You might not have come across this sort of maths in your classroom – it is
known as factoring quadratics. This video gives you an idea of how you factor a
quadratic.

@[youtube](AMEau9OE6Bs?rel=0)


## 2. Sumaze! Part 2

After last week’s taster, it seems that Sumaze! is now a firm favourite with
lots of you. Huge thanks to Richard Lissaman, who created Sumaze! and who is
part of MEI (Mathematics in Education & Industry).

You will have access to 9 levels of the game, starting with some really trivial ones to allow you to understand the game, followed by some trickier levels. You score 1 point for level 1, 2 points for level 2, 3 points for level 3 and so on until level 9, for which you can score a mazimum of 9 points.

However, you will lose 2 points for every hint you use (available on levels 7, 8 & 9). And if you have to restart a level then you will lose 1 point each time, up to a maximum of 4 lost points. So, if you need one hint on level 9, then your maximum score goes from 9 down to 7. And if you succeed after restarting three times, then your score drops from 7 down to 4.

It is easier to understand Sumaze! by experiencing it, but in case it helps,
here are a few important rules and tips:

* Aim – to move your blue box to reach the “end of level” square.
* Your box cannot at any time contain a number bigger than 1,000.
* Your box cannot at any time contain a number that is a fraction.
* You sometimes need keys to open doors to reach the “end of level” square.
* Passing through an arrow means you cannot go back.
* To pass through a green square you must satisfy the square’s condition.
* Pink squares (and their operations) disappear when you move onto them.
* Lilac squares (and their operations) can be crossed over and over again.
* IMPORTANT – Sumaze won't run on a smartphone. If you are currently on a
  smartphone, then type this into your PC/Mac/tablet browser:
  https://integralmaths.org/games/parallel_sumaze_4/
* You can stop and start Sumaze!, and the website will use cookies to remember
  your level and score so far, but it is better to finish all the levels once
  you have started.
* If you want to explore more Sumaze puzzles, then check out the Additional Stuff section.

[Open Sumaze](https://integralmaths.org/games/parallel_sumaze_ii/){.external target="_blank"}

::: problem id=2_1 marks=4.5
__2.1__ When you have finished Sumaze, you will receive a score and a code word.
Please enter your code word here, so that we can add your Sumaze score to your
verall Parallelogram total.

<input solution="sumaze" class="correct" placeholder="Sumaze Code Word"/>

Score: {{c.sumaze(c.answers.p_2)}} / 45 {.sumaze-score v-show="c.answers.p_2"}


_The maximum score in Sumaze is 1 + 2 + 3 + … + 9 = 45. We will divide your
Sumaze score by 10 and add it to your overall Parallelogram score. So ultimately
a perfect Sumaze score will add 45/10 = 4.5 to your Parallelogram total score._

---
[This video clip](https://integralmaths.org/games/sumaze_solutions_ii.mp4){target="_blank"} shows the paths you should or could have taken to solve each stage with a
perfect score.
:::


## 3. Some Random Philosophy

Each Parallelogram contains challenges about maths, because I know you are keen mathematicians, but it is also important to sometimes stray beyond numbers
and geometry and explore other aspects of the world. You should be curious about
lots of things. Ultimately, and for unknown reasons,
these apparently odd challenges will help you to be a better mathematician.

This part of the Parallelogram is all about a philosophical puzzle called the
Trolley Problem. Watch the following short video. There is no question to answer
at the end, but the Challenge is to understand the Trolley Problem and realise
that sometimes it is hard to decide what is right and what is wrong.

@[youtube](bOpf6KcWYyw?rel=0)


## 4. Add it up

::: problem id=4_1 marks=3
__4.1__ In Parallelogram #12 (section 3), we described a quick way to add up all the
numbers from, say, 1 to 100. Can you remember it?

^^^ hint id=1
Sometimes it’s easier to pair numbers - try starting with the smallest and the biggest.
^^^

The sum of all the numbers from 1 to 40 is:

* [ ] 800
* [ ] 810
* [x] 820
* [ ] 822
{.col-4}

---
If we pair up all the numbers we get 20 pairs and each one totals 41, namely
(40 + 1), (39 + 2), (38, 3) and so on. And 20 x 41 = 820.
:::


## 5. Double trouble

::: problem id=5_1 marks=3
__5.3__ In Parallelogram #14, we covered Moore’s Law and the power of doubling,
so here is a doubling question. You have a large piece of paper, which is 0.1 mm
thick, and you can fold it over and over again as many times as you like. Each
time you fold the paper, it doubles in thickness. How many times do you have to
fold the paper in order for it to become so thick that it will reach the Moon?
(The distance from the Earth to the Moon is 384,000 Km.)

^^^ hint id=2
If you double a number, say 1, ten times, then how much bigger does it get? Use this value as a stepping stone to solving the whole problem.
^^^

* [x] 42
* [ ] 42,000
* [ ] 42,000,000
* [ ] 42,000,000,000

---
This video clip from Chris Seber (at MathMeeting.com) explains how to work out the answer:
@[youtube](S2ec2wpYJ_0?rel=0)
:::


## 6. OK Go

OK Go is an American rock band, famous for their quirky one-take music videos. This one shows an elaborate machine that employs all sorts of mechanics. Watch and enjoy … and look out for the answers to these two questions.

::: problem id=6_1 marks=1
__6.1__ In the last minute of the video, there is an interesting version of Newton’s cradle. Normally a series of suspended metal ball bearings swing to and fro, with the one on the left passing its momentum to the right, via the ones in the middle... and then vice versa. What is OK Go’s cradle made from?

* [ ] Water balloons
* [x] Sledge hammers
* [ ] Baseball bats
* [ ] Koala bears
{.col-2}
:::

::: problem id=6_2 marks=1
__6.2__ Such machines often involve domino toppling, and there is domino toppling within the first minute of this video. However, in the second minute of the video there is domino toppling, but there are no dominos. What four objects are toppled?

* [x] Chairs
* [ ] Tables
* [ ] Wardrobes
* [ ] Fridges
{.col-4}
:::

@[youtube](qybUFnY7Y8w?rel=0)

::: problem id=6_3 marks=2
__6.3__ Such machines have different names in the UK and the US, in honour of two eccentric inventors. Search on the internet to complete the names.

* USA: Rube <input type="text" solution="Goldberg"/>
* UK: Heath <input type="text" solution="Robinson"/>
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


::: submit


---

## Additional Stuff

If you want to challenge yourself further over the summer, then explore the web
and you will find a ton of mathematics. In particular, you should check out
[NRICH](https://nrich.maths.org/){target="_blank"}, because it has been the source of some of our
Parallelogram puzzles.

One of the best maths sites is the video channel Numberphile, which has hundreds
of brilliant videos. Here are just a few to get you started (including one
presented by me):

* [Pi and Four Fingers and The Simpsons](https://www.youtube.com/watch?v=K305Vu7hFg0?rel=0){target="_blank"}.
* [Balancing a Ruler](https://www.youtube.com/watch?v=djmec-Bweeg?rel=0){target="_blank"}.
* [Chaos Game](https://www.youtube.com/watch?v=kbKtFN71Lfs?rel=0){target="_blank"}.
* [The Scientific (Mathematical) Way to Cut a Cake](https://www.youtube.com/watch?v=wBU9N35ZHIw?rel=0){target="_blank"}.

* The [Sumaze website](http://mei.org.uk/sumaze){target="_blank"} has links to the App Store and Google Play store, where you can download free Sumaze puzzles.

## Credits

The Trolley Problem video is a spin off from the BBC series
[A History of Ideas](http://www.bbc.co.uk/programmes/b04bwydw){target="_blank"}, made with the Open University.
