# Parallelogram #02
 
<div style="text-align:center">Noun: parallelogram
Pronounced: /ˌparəˈlɛləɡram/
 
_Origin: late 16th century: from French parallélogramme, via late Latin from Greek parallēlogrammon, from parallēlos ‘alongside another’ + grammē ‘line’._</div>  
1. _a four-sided plane rectilinear figure with opposite sides parallel._  
2. _a portmanteau word combining parallel and telegram. A message sent each week by the Parallel Project to bright young mathematicians._

Welcome to the second of four weekly Parallelograms, a collection of mathematical challenges designed to stretch your brain and make your neurons more squiggly. You can start and stop whenever you like, but you will need to complete all the challenges by 7pm on Sunday. Then, return to the site one minute later at 7.01pm and you will find your score and a sheet with answers and explanations. This week’s Parallelogram challenge is in seven parts. Be prepared to encounter all sorts of weird ideas.

1. The Good Will Hunting Problem  
2. NASA’s massive blackboard photograph  
3. The councillor problem  
4. When not knowing Math can cost you $15,000  
5. Junior Maths Challenge question

**IMPORTANT** – _you will get points for every correct answer (or nearly correct answer)._  
**IMPORTANT** – _some questions have a hint (sometimes two hints). Please think hard and try hard before resorting to the hint. The hints will help you get the right answer, but you will lose marks._  
**IMPORTANT** – _it does not really matter what you score get, the main thing is that you think hard about the problems...and then learn where you went wrong when the answer sheet appears._


## 1. The Good Will Hunting Problem

“Good Will Hunting” is a 1997 film that won two Oscars and made Matt Damon and
Ben Affleck famous, as they starred in and wrote the film. It tells the story of
a janitor called Will Hunting, who keeps the floors clean and the lecture
theatres tidy at the Massachusetts Institute of Technology (MIT), one of world’s best universities. However, unknown to the
professors, Will is a mathematical genius, and the film tells the story of his
battle to come to terms with his remarkable talent for numbers and his struggle
to understand his relationship with his best friend, his girlfriend and himself.
Along the way, he is helped by a psychologist played by Robin Williams, who
appears in the film’s poster next to Matt Damon.

![Good Will Hunting](/images/good-will-hunting.jpg)

Take a look at this clip, which starts with a maths professor confronting his
students, because someone has solved one his problems and yet he doesn’t know
who – of course, we know who solved the problem.

@[youtube](https://www.youtube.com/watch?v=Ta3sClUQmfM)

Although the problem that Will is working on is said to be incredibly difficult, that is just a bit of Hollywood exaggeration, because this is a problem that you – __yes, you!__ – might be able to solve.

This is the problem: __draw all homeomorphically irreducible trees of size
_n_ = 10.__

First, don’t panic! Don’t be scared by the scary words. It is not as terrifying as it sounds. Let me translate what it means into terms that you will understand.

In maths, trees are dots connected by lines, but the lines cannot form loops. Also, the question requires that a
tree is not allowed to have a dot connected to only two lines, because the dot
could be removed and it would not look very different. 

We can show the rules as they apply to drawing trees with 5 dots.

Tree (a) is not allowed, because the red dot has only two lines, one going in
and one going out. That is just waste of a dot. 

Tree (b) is not allowed because it has a loop. Remember, no loops. 

![](/images/challenges/2/graph-1.png)

In fact, the only tree that you can make with 5 dots is this one. No loops. No
dots with just two lines.

![](/images/challenges/2/graph-2.png)

The only other thing you need to know about trees is that all of the 5-dot
trees below are considered to be the same. They are copycat trees because they
can be bent, stretched, twisted and flipped, so that they look the 5-dot tree
above. That is why we say there is only one 5-dot tree. One way to see that
they are all the same tree is to note that each tree consists of **one dot with
four lines** and **four dots with only one line**.

::: problem
Now it’s time to see if you have understood the maths of trees.

* Tick the trees that are okay in this group.
* Which two trees are the same?
* Which three trees are the same?

![](/images/challenges/2/graph-3.png)
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



Now it’s time to see if you have understood the maths of trees.  
For 6 dots there are only two irreducible trees. From the diagrams below, which are the two allowable trees?

![](/images/challenges/2/graph-4.png)

**1.1. The first allowable tree is...**

Answer: <select v-model="answers.q_1_4"><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select>

**1.2. The second allowable tree is...**

Answer: <select v-model="answers.q_1_4"><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select>


Hopefully, you are now getting the idea, but before we get to the full Good Will Hunting problem, here are three warm ups. You will need to get a piece of paper and start drawing some trees. The key things are don’t create forbidden trees and don’t create copycat trees. Copycat trees are hard to sometimes spot, so really twist and turn you trees to check that one of them cannot be transformed into another.

**1.3.** Draw all homeomorphically irreducible trees of with 7 dots. How many did you find? Hint: the answer is 1, 2, 3, 4  or 5.  
<input type="number" data-id="s1-q7"/>

**1.4.** For 8 dots, there are 4 distinct trees. Here are 5 trees, so two of them must be essentially the same. Which tree can be twisted and reshaped into another tree? Which tree should be removed? Obviously, there are two possible answers, because you could remove either member of the pair.  
![](/images/challenges/2/graph-5.png)  
Answer: <select v-model="answers.q_1_4"><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select>

**1.5.** For 9 dots, there are 5 distinct trees. Here are 6 trees, so two of them must be essentially the same. Which tree can be twisted and reshaped into another tree? Which tree should be removed? Obviously, there are two possible answers, because you could remove either member of the pair.  
![](/images/challenges/2/graph-6.png)  
Answer: <select v-model="answers.q_1_4"><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select>

Now you are ready for the full Will Hunting problem.

**1.6.** Draw all homeomorphically irreducible trees of with 10 dots. How many did you find? Take your time. Check you haven’t missed any trees. Chess that you have not drawn the same tree twice. Clue: the number of trees is more than 5 and less than 14.  
<input type="number" min="5" max="14" data-id="s1-q7"/>

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

This week I can across two terrific photographs of NASA mathematicians writing
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
**2.1.** What is the title of the film that celebrates the role of the pioneering women mathematicians at NASA in the 1960s? (If you don’t know the answer, then you should be able to find it with some help from Google.)  
(a) Apollo’s Angels  
(b) Hidden Figures  
(c) Rocket Women  
(d) Invisible Chalk  
(e) The Forgotten Mathematicians  
Answer: <select v-model="answers.q_1_4"><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select>
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

__CLUE 2: The ages add up to the number of my house.__

The councillor is happy for a moment, but then realises that he still can't tell
what their ages are so he asks for a final clue, and the mum agrees.

__CLUE 3: The lady then explains that her eldest child plays chess.__

Straightaway he knows their ages, says thank you and moves on to the next house
(hoping that the next parent will be more straightforward).

::: problem
**3.1.** How old is the oldest child?

| <input type="number" data-id="s3-q1"/> | <input type="number" data-id="s3-q2"/> | <input type="number" data-id="s3-q3"/> |
:::

If you can work out the answers then go for it. If you are a bit stuck, then … keep trying. I promise
that you are smart enough to work out the correct ages of the children, and therefore the age of the
oldest child. If you are still stuck after a few minutes of effort, then there are some hints below.
There are 4 marks for this question, but you will lose 1 mark for each clue that you need.

::: hint 1
Start by creating a list of all the possible ages for the three children, bearing in mind that we know that the ages multiply to give 36. If you are doing this on your own then try to do it in an order so that you can make sure that you have not missed out any possibilities. Luckily, I have given you a table (with some gaps) that show that there are 8 possibilities. Copy the table onto a piece of paper and fill in the gaps.
Once you have identified all the possibilities, go back and look at clues 2 and 3 that the mathematical mum gave and see if you can work out the ages of the children, and therefore the age of the oldest child.
If you are still stuck … then try harder … but you also try hint 2.

1	x	1	x	36	= 36
1	x	2	x	18	= 36
1	x	3	x	12	= 36
1	x	4	x	9	= 36
1	x	6	x	6	= 36
2	x	2	x	9	= 36
2	x	?	x	?	= 36
3	x	?	x	?	= 36

:::

::: hint 2
The ages add up to the house number, but that is still not enough for the councillor to work out the ages. This must mean that at least a couple of the possible sets of ages add up to the same number, which explains why the councillor is still confused. Which pair of possibilities add up to the same number? 
Once you have narrowed it down to a pair of possibilities, then take a look at final clue that the mother gave.

1	+	1	+	36	= 38
1	+	2	+	18	= 21
1	+	3	+	12	= ?
1	+	4	+	9	= ?
1	+	6	+	6	= ?
2	+	2	+	9	= ?
2	+	3	+	6	= ?
3	+	3	+	4	= ?

:::

::: hint 3
It’s obvious. Think about it.
:::

::: hint 4
You should have narrowed it down to two possibilities (1, 6, 6) an (2, 2, 9), which both add up to 13. Only one of these sets of ages has an oldest children (2, 2, 9),  has a pair of eldest children. So the answer is obvious.
:::

## 4. When not knowing Math can cost you $15,000

This clip from the TV quiz show Who Wants to be a Millionaire? shows just one reason why it’s a good idea to be a confident mathematician. 

@[youtube](https://www.youtube.com/watch?v=BbX44YSsQ2I)

## 5. Junior Maths Challenge Question


That’s all for this week. Don’t forget to come back at 7.01pm on Sunday to find out your score and to obtain the answer sheet. And don’t worry if you didn’t get it all right (or even half right), because this is not an exam and I am not trying to give you questions that you can do, but rather I am trying to give you question that might be able to do.

Cheerio,

Simon.

## Further Interest

If you want to find out more about **Good Will Hunting**, then just Google it. There are tons of articles about one of the greatest films to come out of Hollywood. You should certainly watch it, but it is aimed at an older audience, so perhaps wait until you are a bit older.

Number nerd James Grime has made an interesting video asking [“Who was the real Good Will Hunting?”](https://www.youtube.com/watch?v=SzjdcPbjaR4)

More about NASA blackboard photos [here](http://rarehistoricalphotos.com/nasa-scientists-board-calculations-1961/).