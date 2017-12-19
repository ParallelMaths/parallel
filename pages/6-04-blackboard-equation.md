# _Pilot • Parallelogram 4_ Blackboard Equation


## 1. Hidden Figures – the blackboard equation

Last week, we featured the film “Hidden Figures”, about the black women who
played a crucial role in the space race, and you watched a trailer for the film.

A couple of you mentioned the equation that the young Katherine Johnson was
trying to solve on the school blackboard, which you can see in this still from
the film.

![](/resources/6-04-blackboard-equation/blackboard.png)

In case it is not clear, the question is: 

Solve this equation for _x_: `(x^2 + 6x - 7)(2x^2 - 5x - 3) = 0`. {.text-center}

Some of you might have come across this sort of equation before, or perhaps a
simpler version of it. Either way, here is a step-by-step method for solving it,
or rather two methods.

### Method 1 (Brute force)

Brute force means doing it the hard way. If you want to open a locked door, then
the smart way is to find the key or pick the lock, but the brute force way is to
just smash through the door. In this case, brute force means testing every
possible value of x until you find some solutions.

For x = 0,

![](/resources/6-04-blackboard-equation/blackboard-equation-x0.png)

For x = 1,

![](/resources/6-04-blackboard-equation/blackboard-equation-x1.png)

For x = 2,

![](/resources/6-04-blackboard-equation/blackboard-equation-x2.png)

So, after checking three values of x, we found one solution, i.e., the equation
equals zero when x = 1. In this case, the brute force approach has delivered a
solution, but there are 4 solutions in total and it might take ages to find the
others if we followed the brute force approach, particularly if the other values
of x are very large or fractions or decimals.

### Method 2 (Smart Maths)

If we have an expression involving something like `(x^2 + 6x – 7)`, then we can
often factor it into a pair of simpler bracketed terms, which in this case would
be `(x + 7)(x – 1)`.

Similarly, we can rewrite `(2x^2 – 5x – 3)` as`(2x + 1)(x – 3)`.

Therefore, `(x^2 + 6x – 7)(2x^2 – 5x – 3) = 0` can be re-written as
`(x + 7)(x – 1)(2x + 1)(x – 3) = 0`.

Of course, if the four brackets multiply to make zero, then at least of the
brackets must equal zero, which means x = –7, 1, –½ or 3.

::: problem id=1_1 marks=4
__1.1__ What are values for _x_ in this equation? Try the Smart Maths method
first, but if you are stuck then try brute force.

`(x^2 – 3x + 2)(x^2 + 3x + 2) = 0` {.text-center}

There are 4 possible answers, so just select four of the answers below.

* [ ] –4
* [ ] –3
* [x] –2
* [x] –1
* [ ] 0
* [x] 1
* [x] 2
* [ ] 3
* [ ] 4
{.col-3}

---
`(x^2 - 3x + 2)(x^2 + 3x + 2) = (x – 1)(x – 2)(x + 1)(x + 2) = 0`

So, x = 1, 2, -1, -2.
:::

You might not have come across this sort of maths in your classroom – it is
known as factoring quadratics. This video gives you an idea of how you factor a
quadratic.

@[youtube](AMEau9OE6Bs?rel=0)


## 2. Sumaze! Part 2

After last week’s taster, it seems that Sumaze! is now a firm favourite with
lots of you. Huge thanks to Richard Lissaman, who created Sumaze! and who is
part of MEI (Mathematics in Education & Industry).

You will have access to 9 new levels of the game, starting with some easier ones
to allow you to get used to the game again, followed by some trickier levels.
You score 1 point for level 1, 2 points for level 2, 3 points for level 3 and so
on until 9 points for level 9. However, you will lose 2 points for every hint
you use (available on levels 8 & 9). You have one free restart, after which you
will lose 1 point every time you restart. If your score reaches zero, you can
either carry on trying or a ‘skip level’ button will appear. So, if you need one
hint on level 9, then your maximum score goes from 9 down to 7. And if you
succeed after restarting three times, then your score drops from 7 down to 4.

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

[Open Sumaze](https://integralmaths.org/games/parallel_sumaze_4/"){.external target="_blank"}

::: problem id=2 marks=4.5
__2__ When you have finished Sumaze, you will receive a score and a code word.
Please enter your code word here, so that we can add your Sumaze score to your 
verall Parallelogram total.

<p class="text-center"><input v-model="c.answers.p_2" class="correct sumaze" placeholder="Sumaze Code Word"/></p>

Score: {{c.sumaze(c.answers.p_2)}} / 45 {.sumaze-score v-show="c.answers.p_2"}

_The maximum score in Sumaze is 1 + 2 + 3 + … + 9 = 45. We will divide your
Sumaze score by 10 and add it to your overall Parallelogram score. So ultimately
a perfect Sumaze score will add 45/10 = 4.5 to your Parallelogram total score._

---
[This video clip](https://integralmaths.org/games/sumaze_solutions.mp4){target="_blank"}
shows the paths you should or could have taken to solve each stage with a
perfect score.
:::


## 3. Some Random Philosophy

Each Parallelogram contains challenges about maths, because I know you are a
keen mathematician, but it is also important to sometimes stray beyond numbers
and geometry and explore other aspects of the world. You should be curious about
lots of things, so a few of the challenges that you will encounter will
encourage you to think creatively, to be ambitious, to develop confidence and to
see the world from other perspectives. Ultimately, and for unknown reasons,
these apparently odd challenges will help you to be a better mathematician.

This part of the Parallelogram is all about a philosophical puzzle called the
Trolley Problem. Watch the following short video. There is no question to answer
at the end, but the Challenge is to understand the Trolley Problem and realise
that sometimes it is hard to decide what is right and what is wrong.

@[youtube](bOpf6KcWYyw?rel=0)


## 4. Mathigon – Graphs & Networks

Philipp Legner, a software engineer at Google, has created a brilliant online
maths resource called Mathigon. You will visit the Mathigon site and explore the
topic of Graphs and Networks, an area of maths which is at the heart of
understanding everything from the brain to the Internet, from railways to
friendships. We touched on Graphs and Networks in Parallelogram #2 (Good Will
Hunting and the tree problem), but otherwise I suspect that this a topic that
will be new to almost of all of you.

::: problem id=4 marks=5
__4.__ Click on the link below to open Mathigon. The content is divided into
many short sections, which are revealed gradually as you solve problems and
answer questions.

__Remember to log in before clicking this link!__ {v-if="!user"}

[Open Mathigon](https://mathigon.org/parallel/graphs-and-networks){.external target="_blank" v-bind:href="'https://mathigon.org/parallel/graphs-and-networks'}

Progress: {{c.answers.mathigon * 5}} / 5 {.sumaze-score v-show="c.answers.mathigon"}

You can get a maximum of 5 marks for completing the entire chapter, and your
Mathigon progress will be automatically added to your Parallel score.
:::


## 5. Review Quiz

These quick questions cover three topics that appeared in the previous three
Parallelograms. If it helps you can refer back to those Parallelograms. 

::: problem id=5_1 marks=2
__5.1__ In Parallelogram #1, we talked about a quick way to add up all the
numbers from, say, 1 to 100. Can you remember it? Hint: sometimes it’s easier
to pair numbers, perhaps the smallest and the biggest.

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

::: problem id=5_2 marks=2
__5.2__ In Parallelogram #2, we talked about the film “Good Will Hunting” and
the janitor solved a problem about mathematical tree diagrams. Below are five
tree diagrams, but four of them are essentially the same. Which tree is
different?

* [ ] ![](/resources/6-04-blackboard-equation/graph-a.png){width=160}
* [ ] ![](/resources/6-04-blackboard-equation/graph-b.png){width=160}
* [x] ![](/resources/6-04-blackboard-equation/graph-c.png){width=160}
* [ ] ![](/resources/6-04-blackboard-equation/graph-d.png){width=160}
* [ ] ![](/resources/6-04-blackboard-equation/graph-e.png){width=160}
{.col-3}

---
The answer is (c) , because all the other trees can be twisted and stretched to
form each other. Alternatively, (c) has 2 nodes with 3 lines, and 4 nodes with 2
lines. By contrast, all the other trees have 1 node with 5 lines, and 5 nodes
with 1 line.
:::

::: problem id=5_3 marks=2
__5.3__ In Parallelogram #3, we covered Moore’s Law and the power of doubling,
so here is a doubling question. You have a large piece of paper, which is 0.1 mm
thick, and you can fold it over and over again as many times as you like. Each
time you fold the paper, it doubles in thickness. How many times do you have to
fold the paper in order for it to become so thick that it will reach the Moon?
(The distance from the Earth to the Moon is 384,000 Km.)

* [x] 42
* [ ] 42,000
* [ ] 42,000,000
* [ ] 42,000,000,000

---
This video clip explains how to work out the answer:
@[youtube](S2ec2wpYJ_0)
:::

And that’s the end of the final Parallelogram for the time being. The feedback
has been very positive, and you seem to have found the problems fun, interesting
and challenging. In fact, this little experiment has been so successful that the
plan is to return next year with a new series of weekly Parallelograms.

In the meantime, there is more maths in the “find out more” section below. Also,
have a great Summer. And a great Subtracter, Divider and Multiplier. 


::: submit


## Find out more

If you want to challenge yourself further over the summer, then explore the web
and you will find a ton of mathematics. In particular, you should check out
[NRICH](https://nrich.maths.org/), because it has been the source of some of our
Parallelogram puzzles.

One of the best maths sites is the video channel Numberphile, which has hundreds
of brilliant videos. Here are just a few to get you started (including one
presented by me):

* [Pi and Four Fingers and The Simpsons](https://www.youtube.com/watch?v=K305Vu7hFg0?rel=0)
* [Balancing a Ruler](https://www.youtube.com/watch?v=djmec-Bweeg?rel=0)
* [Chaos Game](https://www.youtube.com/watch?v=kbKtFN71Lfs?rel=0)
* [The Scientific (Mathematical) Way to Cut a Cake](https://www.youtube.com/watch?v=wBU9N35ZHIw?rel=0)


## Credits

The Trolley Problem video is a spin off from the BBC series
[A History of Ideas](http://www.bbc.co.uk/programmes/b04bwydw), made with the
Open University.
