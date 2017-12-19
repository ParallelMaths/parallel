# _Year 7 • Parallelogram 3_ Good Will Hunting

Welcome to the second of four weekly Parallelograms, a collection of
mathematical challenges designed to stretch your brain and make your neurons
more squiggly. This week’s Parallelogram challenge is in five parts. Be prepared
to encounter all sorts of weird ideas.


## 1. The Good Will Hunting problem

![](/resources/good-will-hunting/good-will-hunting.jpg)

“Good Will Hunting” is a 1997 film that won two Oscars and made Matt Damon and
Ben Affleck famous, as they starred in and wrote the film. It tells the story of
a janitor called Will Hunting, who keeps the floors clean and the lecture
heatres tidy at the Massachusetts Institute of Technology (MIT), one of world’s
best universities. However, unknown to the professors, Will is a mathematical
genius, and the film tells the story of his battle to come to terms with his
remarkable talent for numbers and his struggle to understand his relationship
with his best friend, his girlfriend and himself. Along the way, he is helped by
a psychologist played by Robin Williams, who appears in the film’s poster next
to Matt Damon.

Take a look at this clip, which starts with a maths professor confronting his
students, because someone has solved one his problems and yet he doesn’t know
who – of course, we know who solved the problem.

@[youtube](Ta3sClUQmfM?rel=0)

Although the problem that Will is working on is said to be incredibly difficult,
that is just a bit of Hollywood exaggeration, because this is a problem that
you – __yes, you!__ – might be able to solve.

This is the problem: __draw all homeomorphically irreducible trees of size
_n_ = 10.__

First, don’t panic! Don’t be scared by the scary words. It is not as terrifying
as it sounds. Let me translate what it means into terms that you will understand.

In maths, trees are dots connected by lines, but in this case the lines cannot
form loops. Also, the question requires that a tree is not allowed to have a dot
connected to only two lines, because the dot could be removed and it would not
look very different.

We can show the rules as they apply to drawing trees with 5 dots.

Tree (a) is not allowed, because the red dot has only two lines, one going in
and one going out. That is just waste of a dot.

Tree (b) is not allowed because it has a loop. Remember, no loops.

![](/resources/7-03-good-will-hunting/graph-1.png)

In fact, the only tree that you can make with 5 dots is this one. No loops. No
dots with just two lines.

![](/resources/7-03-good-will-hunting/graph-2.png)

The only other thing you need to know about trees is that all of the 5-dot trees
below are considered to be the same. They are copycat trees because they can be
bent, stretched, twisted and flipped, so that they look the 5-dot tree above.
That is why we say there is only one 5-dot tree. One way to see that they are
all the same tree is to note that each tree consists of **one dot with four
lines** and **four dots with only one line**.

![](/resources/7-03-good-will-hunting/graph-3.png)

Now it’s time to see if you have understood the maths of trees.

::: problem id=1_1 marks=1
__1.1__ For 6 dots there are only two irreducible trees. Which of these are they?

* [ ] ![](/resources/7-03-good-will-hunting/graph-4a.png)
* [x] ![](/resources/7-03-good-will-hunting/graph-4b.png)
* [x] ![](/resources/7-03-good-will-hunting/graph-4c.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-4d.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-4e.png)
{.col-3}

---
The correct answers are (b) and (c). The other trees do not qualify because (e)
has dots that are connected to exactly two other lines, and both (a) and (d)
have loops.
:::

Hopefully, you are now getting the idea, but before we get to the full Good Will
Hunting problem, here are three warm ups.

You will need to get a piece of paper and start drawing some trees. The key
things are don’t create forbidden trees and don’t create copycat trees. Copycat
trees are hard to sometimes spot, so really twist and turn you trees to check
that one of them cannot be transformed into another.

::: problem id=1_2 marks=2
__1.2__ Draw all homeomorphically irreducible trees of with 7 dots. How many did
you find?

* [ ] 1
* [x] 2
* [ ] 3
* [ ] 4
* [ ] 5
{.col-5}

---
The correct answer is 2, because any other diagrams either have loops or they
have dots connected to exactly two other lines.

Here are the two acceptable trees. Your two trees might look different, but if
they are essentially the same, then you are beginning to grasp the maths of
trees. One tree has 1 dot with 4 lines, 1 dot with 3 lines and 5 dots with 1
line. The other tree has 1 dot with 6 lines and 6 dots with 1 line.

![](/resources/7-03-good-will-hunting/graph-7-dot-solutions.png) {.text-center}
:::

::: problem id=1_3 marks=1
__1.3__ For 8 dots, there are 4 distinct trees. Here are 5 trees, so two of them
must be essentially the same. Which tree can be twisted and reshaped into
another tree? Which tree should be removed? Obviously, there are two possible
answers, because you could remove either member of the pair.  

* [ ] ![](/resources/7-03-good-will-hunting/graph-5a.png)
* [x] ![](/resources/7-03-good-will-hunting/graph-5b.png)
* [x] ![](/resources/7-03-good-will-hunting/graph-5c.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-5d.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-5e.png)
{.col-3}

---
The correct answer is (b) or (c). Because both trees have 1 dot connected to 5
lines, 1 dot connected to 3 line and 6 dots connected to 1 line.
:::

:::problem id=1_4 marks=1
__1.4__ For 9 dots, there are 5 distinct trees. Here are 6 trees, so two of them
must be essentially the same. Which tree can be twisted and reshaped into
another tree? Which tree should be removed? Obviously, there are two possible
answers, because you could remove either member of the pair.  

* [ ] ![](/resources/7-03-good-will-hunting/graph-9a.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-9b.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-9c.png)
* [x] ![](/resources/7-03-good-will-hunting/graph-9d.png)
* [x] ![](/resources/7-03-good-will-hunting/graph-9e.png)
* [ ] ![](/resources/7-03-good-will-hunting/graph-9f.png)
{.col-3}

---
The correct answer is (d) or (e), because both trees have 1 dot connected to 4
lines, 2 dots connected to 3 lines and 6 dots connected to 1 line.
:::

Now you are ready for the full Will Hunting problem.

::: problem id=1_5 marks=3
__1.5.__ Draw all homeomorphically irreducible trees of with 10 dots. How many
did you find?

Take your time. Check you haven’t missed any trees. Check that you have not
drawn the same tree twice. The correct answer is between 5 and 14.

<input type="number" min="5" max="14" x-input="p_1_5, 10"/>  

---
The correct answer is 10 trees. You would have scored 2 marks if you answered 9
or 11, and 1 mark if you answered 8 or 12.

Here are the 10 allowable trees:

![](/resources/7-03-good-will-hunting/graph-10a.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10b.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10c.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10d.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10e.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10f.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10g.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10h.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10i.png){style="display:inline-block; margin:10px;"}
![](/resources/7-03-good-will-hunting/graph-10j.png){style="display:inline-block; margin:10px;"}
{.text-center}
:::


The Good Will Hunting problem is not incredibly difficult, despite what the
film implies. However, you have just been learning some maths that you would
not normally do until A level. So, well done. Don’t worry if you did not
understand everything about trees, but if you did get most of the answers right
then double well done.


## 2. NASA’s massive blackboard photograph

This week I can across two terrific photographs of NASA mathematicians writing
down some mathematics on their giant blackboards. The boards were used for
calculating rocket orbits and for getting astronauts to the Moon, and I suppose
they had to be large so that everyone in the department could watch, learn and
contribute.

| ![](/resources/7-03-good-will-hunting/nasa-1.jpg) | ![](/resources/7-03-good-will-hunting/nasa-2.jpg) |

Although all the mathematicians in these photos are men, there were lots of
women mathematicians working at NASA at this time. In fact, there was a film
all about these NASA women that was released earlier this year, and which
received three Oscar nominations. Here is a poster for the film with the title
removed, and a still from the movie.

| ![](/resources/7-03-good-will-hunting/nasa-3.jpg) | ![](/resources/7-03-good-will-hunting/nasa-4.jpg) |


::: problem id=2 marks=0.5
__2__ What is the title of the film that celebrates the role of the pioneering
women mathematicians at NASA in the 1960s? (If you don’t know the answer, then
you should be able to find it with some help from Google.)

* [ ] Apollo’s Angels
* [x] Hidden Figures
* [ ] Rocket Women
* [ ] Invisible Chalk
* [ ] The Forgotten Mathematicians

---
The correct answer is (b). No reason that you should have known this, but you
could have googled it.
:::


## 3. The Councillor Problem

A local councillor is knocking on doors. He is carrying out a survey, because
he is wondering whether the community needs a new school.

When he knocks on one door, a lady answers and he asks her two questions: “How
many children do you have, and what are the ages of your children?”

The lady is a mathematician, so she decides to make the councillor do some
maths to work out the answers. She tells him that she has 3 children, but she
does not give their ages. Instead, she gives him a clue.

__CLUE 1: The product of their ages is 36.__

The councillor is confused. The children could be 2, 3 and 6 (because 2 x 3 x 6
= 36), but there are lots of other possibilities. The mathematical mum decides
to help him with another clue.

__CLUE 2: The ages add up to the number of my house.__

The councillor is happy for a moment, but then realises that he still can't tell
what their ages are so he asks for a final clue, and the mum agrees.

__CLUE 3: The lady then explains that her eldest child plays chess.__

Straightaway he knows their ages, says thank you and moves on to the next house
(hoping that the next parent will be more straightforward).

::: problem id=3 marks=4
__3.1__ How old is the oldest child?  

If you can work out the answer then go for it. If you are a bit stuck, then …
keep trying. I promise that you are smart enough to work out the correct ages of
the children, and therefore the age of the oldest child. If you are still stuck
after a few minutes of effort, then there are some hints below. There are 4
marks for this question, but you will lose 1 mark for each clue that you need.

<input type="number" x-input="p_3_1, 9"/>  

> Start by creating a list of all the possible ages for the three children,
> bearing in mind that we know that the ages multiply to give 36. If you are
> doing this on your own then try to do it in an order so that you can make sure
> that you have not missed out any possibilities. Luckily, I have given you a
> table (with some gaps) that show that there are 8 possibilities. Copy the
> table onto a piece of paper and fill in the gaps.
>
> Once you have identified all the possibilities, go back and look at clues 2
> and 3 that the mathematical mum gave and see if you can work out the ages of
> the children, and therefore the age of the oldest child.
>
> If you are still stuck … then try harder … but you also try hint 2.
>
> | Child 1 |   | Child 2 |   | Child 3 |   | Product |
> | ------- | - | ------- | - | ------- | - | ------- |
> | 1       | x | 1       | x | 36      | = | 36      |
> | 1       | x | 2       | x | 18      | = | 36      |
> | 1       | x | 3       | x | 12      | = | 36      |
> | 1       | x | 4       | x | 9       | = | 36      |
> | 1       | x | 6       | x | 6       | = | 36      |
> | 2       | x | 2       | x | 9       | = | 36      |
> | 2       | x | ?       | x | ?       | = | 36      |
> | 3       | x | ?       | x | ?       | = | 36      |

> The ages add up to the house number, but that is still not enough for the
> councillor to work out the ages. This must mean that at least a couple of the
> possible sets of ages add up to the same number, which explains why the
> councillor is still confused. Which pair of possibilities add up to the same
> number?
>
> Again, take a look at the table below, copy it onto a piece of paper and fill
> in the gaps. Once you have narrowed it down to a pair of possibilities, then
> take a look at final clue that the mother gave.
>
> | Child 1 |   | Child 2 |   | Child 3 |   | Product |
> | ------- | - | ------- | - | ------- | - | ------- |
> | 1       | + | 1       | + | 36      | = | 38      |
> | 1       | + | 2       | + | 18      | = | 21      |
> | 1       | + | 3       | + | 12      | = | ?       |
> | 1       | + | 4       | + | 9       | = | ?       |
> | 1       | + | 6       | + | 6       | = | ?       |
> | 2       | + | 2       | + | 9       | = | ?       |
> | 2       | + | 3       | + | 6       | = | ?       |
> | 3       | + | 3       | + | 4       | = | ?       |

> It’s obvious. Think about it.

> You should have narrowed it down to two possibilities (1, 6, 6) an (2, 2, 9),
> which both add up to 13. Only one of these sets of ages has an oldest child.
> So the answer is obvious.

---
The correct answer is 9. To understand why the answer is 9, please check out the
hints.
:::


## 4. When not knowing mathematics can cost you $15,000

This clip from the TV quiz show _Who Wants to be a Millionaire?_ shows just one
reason why it’s a good idea to be a confident mathematician.

@[youtube](BbX44YSsQ2I?rel=0)


## 5. Junior Maths Challenge question

::: problem id=5 marks=1
__5.1__ What is the value of x?

![](/resources/7-03-good-will-hunting/maths-challenge-angle-question.png)  

* [ ] (a) 43
* [ ] (b) 47
* [ ] (c) 53
* [x] (d) 57
* [ ] (e) 67
{.col-5}

---
[](/resources/good-will-hunting/angle-question-answer.png){width=240}

Let the angle shown be _y_°. Because the angles at a point total 360°, we have
`y + 303 = 360`. Therefore `y = 360 − 303 = 57`.

Because the alternate angles formed by a line which cuts a pair of parallel
lines are equal, `x = y`. Hence `x = 57`.
:::

That’s all for this week. Don’t forget to come back at 7.01pm on Sunday to find
out your score and to obtain the answer sheet. And don’t worry if you didn’t get
it all right (or even half right), because this is not an exam and I am not
trying to give you questions that you can do, but rather I am trying to give you
questions that you might not be able to do.


::: submit


## Find out more

If you want to find out more about **Good Will Hunting**, then just Google it.
There are tons of articles about one of the greatest films to come out of
Hollywood. You should certainly watch it, but it is aimed at an older audience,
so perhaps wait until you are a bit older.

Number nerd James Grime has made an interesting video asking
[“Who was the real Good Will Hunting?”](https://www.youtube.com/watch?v=SzjdcPbjaR4?rel=0)

More about NASA blackboard photos
[here](http://rarehistoricalphotos.com/nasa-scientists-board-calculations-1961/).
