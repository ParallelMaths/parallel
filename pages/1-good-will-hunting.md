# Challenge 1: Good Will Hunting

Welcome to the first of four weekly challenges. This week’s challenge is in
three parts… some Challenges will have a single theme, while others have
different sections that shoot off in different directions. In short, these
challenges are often going to be a random walk through the mysteries of
mathematics. Be prepared to encounter all sorts of weird ideas.


## 1. The Good Will Hunting Problem

“Good Will Hunting” is a 1997 film that won two Oscars and made Matt Damon and
Ben Affleck famous, as the starred in and wrote the film. It tells the story of
a janitor called Will Hunting, who keeps the floors clean and the lecture
theatres tidy at MIT, one of world’s best universities. However, unknown to the
professors, Will is a mathematical genius, and the film tells the story of his
battle to come to terms with his remarkable talent for numbers and his struggle
to understand his relationship with his best friend, his girlfriend and himself.
Along the way, he is helped by a psychologist played by Robin Williams, who
appears in the film’s poster next to Matt Damon.

![Good Will Hunting](/images/good-will-hunting.jpg)

Take a look at this clip, which starts with a maths professor confronting his
students, because someone has solved one his problems and yet he doesn’t know
who – of course, we know who solved the problem.

@[youtube](1EkNjDf7XKs)

Although the problem that Will is working on is said to be incredibly difficult,
that is just a bit of Hollywood exaggeration, because this is a problem that
you might be able to solve.

This is the problem: __draw all homeomorphically irreducible trees of size
_n_ = 10.__

In maths, trees are dots connected by lines, but the lines cannot form loops,
they can only branch. Also, the term homeopmorphically irreducible means that a
tree is not allowed to have a dot connected to only two lines, because the dot
could be removed and it would not look very different. 

We can show the rules as they apply to drawing trees with 5 dots.

Tree (a) is not allowed, because the red dot has only two lines, one going in
and one going out. That is just waste of a dot. 

Tree (b) is not allowed because it has a loop. Remember, no loops. 

![](/images/graph-1.png)

In fact, the only tree that you can make with 5 dots is this one. No loops. No
dots with just two lines.

![](/images/graph-2.png)

The only other thing you need to know about trees is that all of the 5-dot
trees below are considered to be the same. The are copycat trees because they
can be bent, stretched, twisted and flipped, so that they look the 5-dot tree
above. That is why we say there is only one 5-dot tree. One way to see that
they are all the same tree is to not that each tree consists of one dot with
four lines and four dots with only one line.

::: problem
Now it’s time to see if you have understood the maths of trees.

* Tick the trees that are okay in this group.
* Which two trees are the same?
* Which three trees are the same?

![](/images/graph-3.png)
:::

For 6 dots there are two irreducible tress, shown below. There is no way that
you can twist one tree into the other. (Of course, you could change one into
the other by cutting and gluing the branches, but that is now allowed.)

Hopefully, you are now getting the idea, but before we get to the full Good
Will Hunting problem, here are three warm ups. You will need to get a piece of
paper and start drawing some trees. The key things are don’t create forbidden
trees and don’t create copycat trees. Copycat trees are hard to sometimes spot,
so really twist and turn you trees to check that one of them cannot be
transformed into another.  

::: problem
Draw all homeomorphically irreducible trees of with 7 dots. How many did you
find?

<input type="number" data-id="s1-q4"/>
  
Draw all homeomorphically irreducible trees of with 8 dots. How many did you
find?

<input type="number" data-id="s1-q5"/>

Draw all homeomorphically irreducible trees of with 9 dots. How many did you
  find?
  
<input type="number" data-id="s1-q6"/>
:::

Now you are ready for the Good Will Hunting problem.

::: problem
Draw all homeomorphically irreducible trees of with 10 dots? How many did you
find?

<input type="number" data-id="s1-q7"/>
:::

The Good Will Hunting problem is not incredibly difficult, despite what the
film implies. However, you have just been learning some maths that you would
not normally do until A level. So, well done. Don’t worry if you did not
understand everything about trees, but if you did get most of the answers right
then double well done.

---

## 2. NASA’s massive blackboard photograph 

This week I can across to terrific photographs of NASA mathematicians writing
down some mathematics on their giant blackboards. The boards were used for
calculating rocket orbits and for getting astronauts to the Moon, and I suppose
they had to be large so that everyone in the department could watch, learn and
contribute.

| ![](/images/nasa-1.jpg) | ![](/images/nasa-2.jpg) |

Although all the mathematicians in these photos are men, there were lots of
women mathematicians working at NASA at this time. In fact, there was a film
all about these NASA women that was released earlier this year, and which
received three Oscar nominations. Here is a poster for the film with the title
removed, and a still from the movie.

| ![](/images/nasa-3.jpg) | ![](/images/nasa-4.jpg) |

::: problem
What is the title of the film that celebrates the role of the pioneering women
mathematicians at NASA in the 1960s? (If you don’t know the answer, then you
should be able to find it with some help from Google.)

<input type="text" data-id="s2-q1"/>
:::

---

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

__CLUE 2: The ages add up to number of my house.__

The councillor is happy for a moment, but then realises that he still can't tell
what their ages are so he asks for a final clue, and the mum agrees.

__CLUE 3: The lady then explains that her eldest child plays chess.__

Straightaway he knows their ages, says thank you and moves on to the next house
(hoping that the next parent will be more straightforward).

::: problem
What are the ages of the three child?

| <input type="number" data-id="s3-q1"/> | <input type="number" data-id="s3-q2"/> | <input type="number" data-id="s3-q3"/> |
:::

If you can work out the answers then go for it. If you are a bit stuck, then …
keep trying. I promise you that are smart enough to work out the ages. If you
are still stuck after a few minutes of effort, then there are some hints below.

::: hint 1
Start by creating a list of all the possible ages for the three children. Try
to do it in an order so that you can make sure that you have not missed out any
possibilities. There are 8 possibilities.

| 1 | 1 | 36 |
| 1 | 2 | 18 |
| 1 | 3 | 12 |
| 1 | 4 | 9 |
| 1 | 6 | 6 |
| 2 | 2 | 9 |
| 2 | 3 | 6 |
| 3 | 3 | 4 |

Great. You now have all the possibilities. Go back and look at clues 2 and 3
that the mathematical mum gave and see you can work out the ages of the
children.

If you are still stuck … then try harder … or look at the second hint.
:::

::: hint 2
The ages add up to the house number, but that is still not enough for the
councillor to work out the ages. This must mean that at least a couple of the
ages add up to the same number, which explains why the councillor is still
confused. Which pair of possibilities add up to the same number?

| 1 | 6 | 6 |
| 2 | 2 | 9 |

Great – now the final clue is enough for you solve the problem. The ELDEST
child is a chess player.
:::

::: hint 3
It’s obvious. Think about it.
:::

::: hint 4
Only of the options has an eldest child. The other has a pair of eldest
children. So the answer is …
:::

With this problem, you are given three clues. On its own each clue only provides
you with a bit of information and is not enough to pin down the answer. But when
you combine the clues, you are able to exclude all the possibilities except one.
Of course, what makes this puzzle clever is that the third clue seems silly –
what has being a chess player got to do with pinning down the ages. The answer
is nothing. The important factor is not chess, but the mention that there is an
eldest child.

You can try this puzzle on your friends on your family. Make sure that you
present it accurately, otherwise your victim will have no hope of solving the
problem.

Don’t worry if you struggled with this problem. You need to develop a set of
skills that allow you to make the most of every clue in order to track down the
answer. This comes with practice and there will be more puzzles in next week’s
challenge.

Cheerio,  
Dr Singh
