# Parallelogram #2

Welcome to the second of four weekly Parallelograms, a collection of mathematical challenges designed to stretch your brain and make your neurons more squiggly. You can start and stop whenever you like, but you will need to complete all the challenges by 7pm on Sunday. Then, return to the site one minute later at 7.01pm and you will find your score and a sheet with answers and explanations. This week’s Parallelogram challenge is in five parts. Be prepared to encounter all sorts of weird ideas.

1. The Good Will Hunting Problem  
2. NASA’s massive blackboard photograph  
3. The councillor problem  
4. When not knowing mathematics can cost you $15,000  
5. Junior Maths Challenge question

<div class="warning">

**Instructions**
* You will get points for every correct answer (or nearly correct answer).
* Some questions have a hint (sometimes two hints). Please think hard and try hard before resorting to the hint. The hints will help you get the right answer, but you will lose marks.
* It does not really matter what you score get, the main thing is that you think hard about the problems … and then learn where you went wrong when the answers appear.

</div>

## 1. The Good Will Hunting problem

<img src="/images/challenges/2/good-will-hunting.jpg" style="float: right; margin-left: 1rem"/>

“Good Will Hunting” is a 1997 film that won two Oscars and made Matt Damon and Ben Affleck famous, as they starred in and wrote the film. It tells the story of a janitor called Will Hunting, who keeps the floors clean and the lecture theatres tidy at the Massachusetts Institute of Technology (MIT), one of world’s best universities. However, unknown to the professors, Will is a mathematical genius, and the film tells the story of his battle to come to terms with his remarkable talent for numbers and his struggle to understand his relationship with his best friend, his girlfriend and himself. Along the way, he is helped by a psychologist played by Robin Williams, who appears in the film’s poster next to Matt Damon.

Take a look at this clip, which starts with a maths professor confronting his students, because someone has solved one his problems and yet he doesn’t know who – of course, we know who solved the problem.

@[youtube](Ta3sClUQmfM?rel=0)

Although the problem that Will is working on is said to be incredibly difficult, that is just a bit of Hollywood exaggeration, because this is a problem that you – __yes, you!__ – might be able to solve.

This is the problem: __draw all homeomorphically irreducible trees of size _n_ = 10.__

First, don’t panic! Don’t be scared by the scary words. It is not as terrifying as it sounds. Let me translate what it means into terms that you will understand.

In maths, trees are dots connected by lines, but in this case the lines cannot form loops. Also, the question requires that a tree is not allowed to have a dot connected to only two lines, because the dot could be removed and it would not look very different. 

We can show the rules as they apply to drawing trees with 5 dots.

Tree (a) is not allowed, because the red dot has only two lines, one going in and one going out. That is just waste of a dot. 

Tree (b) is not allowed because it has a loop. Remember, no loops. 

![](/images/challenges/2/graph-1.png)

In fact, the only tree that you can make with 5 dots is this one. No loops. No dots with just two lines.

![](/images/challenges/2/graph-2.png)

The only other thing you need to know about trees is that all of the 5-dot trees below are considered to be the same. They are copycat trees because they can be bent, stretched, twisted and flipped, so that they look the 5-dot tree above. That is why we say there is only one 5-dot tree. One way to see that they are all the same tree is to note that each tree consists of **one dot with four lines** and **four dots with only one line**.

![](/images/challenges/2/graph-3.png)

Now it’s time to see if you have understood the maths of trees.

::: problem
<div class="marks">1 mark</div>

**1.1 For 6 dots there are only two irreducible trees. Which of these are they?**

<div class="choice checkbox c3">
  <div x-checkbox="p_1_1a"><img src="/images/challenges/2/graph-4a.png"/></div>
  <div x-checkbox="p_1_1b" class="correct"><img src="/images/challenges/2/graph-4b.png"/></div>
  <div x-checkbox="p_1_1c" class="correct"><img src="/images/challenges/2/graph-4c.png"/></div>
  <div x-checkbox="p_1_1d"><img src="/images/challenges/2/graph-4d.png"/></div>
  <div x-checkbox="p_1_1e"><img src="/images/challenges/2/graph-4e.png"/></div>
</div>

<div class="solution">
  <p>The correct answers are (b) and (c).</p>
  <p>The other trees do not qualify because (e) has dots that are connected to exactly two other lines, and both (a) and (d) have loops.</p>
</div>
:::

Hopefully, you are now getting the idea, but before we get to the full Good Will Hunting problem, here are three warm ups.

You will need to get a piece of paper and start drawing some trees. The key things are don’t create forbidden trees and don’t create copycat trees. Copycat trees are hard to sometimes spot, so really twist and turn you trees to check that one of them cannot be transformed into another.

::: problem
<div class="marks">2 marks</div>

**1.2** Draw all homeomorphically irreducible trees of with 7 dots. How many did you find?

<div class="choice radio c5">
  <div x-radio="p_1_2, a">1</div>
  <div x-radio="p_1_2, b" class="correct">2</div>
  <div x-radio="p_1_2, c">3</div>
  <div x-radio="p_1_2, d">4</div>
  <div x-radio="p_1_2, e">5</div>
</div>

<div class="solution">
  <p>The correct answer is 2, because any other diagrams either have loops or they have dots connected to exactly two other lines.</p>
  <p>Here are the two acceptable trees. Your two trees might look different, but if they are essentially the same, then you are beginning to grasp the maths of trees. One tree has 1 dot with 4 lines, 1 dot with 3 lines and 5 dots with 1 line. The other tree has 1 dot with 6 lines and 6 dots with 1 line.</p>
  <p class="text-center"><img src="/images/challenges/2/graph-7-dot-solutions.png"/></p>
</div>
:::

::: problem
<div class="marks">1 mark</div>

**1.3** For 8 dots, there are 4 distinct trees. Here are 5 trees, so two of them must be essentially the same. Which tree can be twisted and reshaped into another tree? Which tree should be removed? Obviously, there are two possible answers, because you could remove either member of the pair.  

<div class="choice checkbox c3">
  <div x-checkbox="p_1_3a"><img src="/images/challenges/2/graph-5a.png"/></div>
  <div x-checkbox="p_1_3b" class="correct"><img src="/images/challenges/2/graph-5b.png"/></div>
  <div x-checkbox="p_1_3c" class="correct"><img src="/images/challenges/2/graph-5c.png"/></div>
  <div x-checkbox="p_1_3d"><img src="/images/challenges/2/graph-5d.png"/></div>
  <div x-checkbox="p_1_3e"><img src="/images/challenges/2/graph-5e.png"/></div>
</div>

<div class="solution">
  <p>The correct answer is (b) or (c). Because both trees have 1 dot connected to 5 lines, 1 dot connected to 3 line and 6 dots connected to 1 line.</p>
</div>
:::

:::problem
<div class="marks">1 mark</div>

**1.4** For 9 dots, there are 5 distinct trees. Here are 6 trees, so two of them must be essentially the same. Which tree can be twisted and reshaped into another tree? Which tree should be removed? Obviously, there are two possible answers, because you could remove either member of the pair.  

<div class="choice checkbox c3">
  <div x-checkbox="p_1_4a"><img src="/images/challenges/2/graph-9a.png"/></div>
  <div x-checkbox="p_1_4b"><img src="/images/challenges/2/graph-9b.png"/></div>
  <div x-checkbox="p_1_4c"><img src="/images/challenges/2/graph-9c.png"/></div>
  <div x-checkbox="p_1_4d" class="correct"><img src="/images/challenges/2/graph-9d.png"/></div>
  <div x-checkbox="p_1_4e" class="correct"><img src="/images/challenges/2/graph-9e.png"/></div>
  <div x-checkbox="p_1_4f"><img src="/images/challenges/2/graph-9f.png"/></div>
</div>

<div class="solution">
  <p>The correct answer is (d) or (e), because both trees have 1 dot connected to 4 lines, 2 dots connected to 3 lines and 6 dots connected to 1 line.</p>
</div>

:::

Now you are ready for the full Will Hunting problem.

::: problem
<div class="marks">3 marks</div>

**1.5.** Draw all homeomorphically irreducible trees of with 10 dots. How many did you find?

Take your time. Check you haven’t missed any trees. Check that you have not drawn the same tree twice. The correct answer is between 5 and 14.

<input type="number" min="5" max="14" x-input="p_1_5, 10"/>  

<div class="solution">
  <p>The correct answer is 10 trees. You would have scored 2 marks if you answered 9 or 11, and 1 mark if you answered 8 or 12.</p>
  <p>Here are the 10 allowable trees:</p>
  <p class="text-center">
    <img src="/images/challenges/2/graph-10a.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10b.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10c.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10d.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10e.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10f.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10g.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10h.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10i.png" style="display: inline-block; margin: 10px;"/>
    <img src="/images/challenges/2/graph-10j.png" style="display: inline-block; margin: 10px;"/>
  </p>
</div>

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

| ![](/images/challenges/2/nasa-1.jpg) | ![](/images/challenges/2/nasa-2.jpg) |

Although all the mathematicians in these photos are men, there were lots of
women mathematicians working at NASA at this time. In fact, there was a film
all about these NASA women that was released earlier this year, and which
received three Oscar nominations. Here is a poster for the film with the title
removed, and a still from the movie.

| ![](/images/challenges/2/nasa-3.jpg) | ![](/images/challenges/2/nasa-4.jpg) |


::: problem
<div class="marks">1/2 mark</div>

**2.1.** What is the title of the film that celebrates the role of the pioneering women mathematicians at NASA in the 1960s? (If you don’t know the answer, then you should be able to find it with some help from Google.)

<div class="choice radio">
  <div x-radio="p_2_1, a">(a) Apollo’s Angels</div>
  <div x-radio="p_2_1, b" class="correct">(b) Hidden Figures</div>
  <div x-radio="p_2_1, c">(c) Rocket Women</div>
  <div x-radio="p_2_1, d">(d) Invisible Chalk</div>
  <div x-radio="p_2_1, e">(e) The Forgotten Mathematicians</div>
</div>

<div class="solution">
  <p>The correct answer is (b). No reason that you should have known this, but you could have googled it.</p>
</div>
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

::: problem
<div class="marks">4 marks</div>

**3.1.** How old is the oldest child?  

<input type="number" x-input="p_3_1, 9"/>  

<div class="solution">
  <p>The correct answer is 9. To understand why the answer is 9, please check out the hints below.</p>
</div>
:::

If you can work out the answer then go for it. If you are a bit stuck, then … keep trying. I promise
that you are smart enough to work out the correct ages of the children, and therefore the age of the
oldest child. If you are still stuck after a few minutes of effort, then there are some hints below.
There are 4 marks for this question, but you will lose 1 mark for each clue that you need.

::: hint 1
Start by creating a list of all the possible ages for the three children, bearing in mind that we know that the ages multiply to give 36. If you are doing this on your own then try to do it in an order so that you can make sure that you have not missed out any possibilities. Luckily, I have given you a table (with some gaps) that show that there are 8 possibilities. Copy the table onto a piece of paper and fill in the gaps.
Once you have identified all the possibilities, go back and look at clues 2 and 3 that the mathematical mum gave and see if you can work out the ages of the children, and therefore the age of the oldest child.
If you are still stuck … then try harder … but you also try hint 2.
<table style="text-align:center">
<tr><th>Child 1</th><th/><th>Child 2</th><th/><th>Child 3</th><th/><th>Product</th></tr>
<tr><td>1</td><td>x</td><td>1</td><td>x</td><td>36</td><td>=</td><td>36</td></tr>
<tr><td>1</td><td>x</td><td>2</td><td>x</td><td>18</td><td>=</td><td>36</td></tr>
<tr><td>1</td><td>x</td><td>3</td><td>x</td><td>12</td><td>=</td><td>36</td></tr>
<tr><td>1</td><td>x</td><td>4</td><td>x</td><td>9</td><td>=</td><td>36</td></tr>
<tr><td>1</td><td>x</td><td>6</td><td>x</td><td>6</td><td>=</td><td>36</td></tr>
<tr><td>2</td><td>x</td><td>2</td><td>x</td><td>9</td><td>=</td><td>36</td></tr>
<tr><td>2</td><td>x</td><td>?</td><td>x</td><td>?</td><td>=</td><td>36</td></tr>
<tr><td>3</td><td>x</td><td>?</td><td>x</td><td>?</td><td>=</td><td>36</td></tr>
</table>
:::

::: hint 2
The ages add up to the house number, but that is still not enough for the councillor to work out the ages. This must mean that at least a couple of the possible sets of ages add up to the same number, which explains why the councillor is still confused. Which pair of possibilities add up to the same number?
Again, take a look at the table below, copy it onto a piece of paper and fill in the gaps. 
Once you have narrowed it down to a pair of possibilities, then take a look at final clue that the mother gave.

<table style="text-align:center">
<tr><th>Child 1</th><th/><th>Child 2</th><th/><th>Child 3</th><th/><th>Product</th></tr>
<tr><td>1</td><td>+</td><td>1</td><td>+</td><td>36</td><td>=</td><td>38</td></tr>
<tr><td>1</td><td>+</td><td>2</td><td>+</td><td>18</td><td>=</td><td>21</td></tr>
<tr><td>1</td><td>+</td><td>3</td><td>+</td><td>12</td><td>=</td><td>?</td></tr>
<tr><td>1</td><td>+</td><td>4</td><td>+</td><td>9</td><td>=</td><td>?</td></tr>
<tr><td>1</td><td>+</td><td>6</td><td>+</td><td>6</td><td>=</td><td>?</td></tr>
<tr><td>2</td><td>+</td><td>2</td><td>+</td><td>9</td><td>=</td><td>?</td></tr>
<tr><td>2</td><td>+</td><td>3</td><td>+</td><td>6</td><td>=</td><td>?</td></tr>
<tr><td>3</td><td>+</td><td>3</td><td>+</td><td>4</td><td>=</td><td>?</td></tr>
</table>
:::

::: hint 3
It’s obvious. Think about it.
:::

::: hint 4
You should have narrowed it down to two possibilities (1, 6, 6) an (2, 2, 9), which both add up to 13.
Only one of these sets of ages has an oldest child. So the answer is obvious.
:::


## 4. When not knowing mathematics can cost you $15,000

This clip from the TV quiz show _Who Wants to be a Millionaire?_ shows just one reason why it’s a good idea to be a confident mathematician. 

@[youtube](BbX44YSsQ2I?rel=0)


## 5. Junior Maths Challenge question

::: problem
<div class="marks">1 mark</div>

**5.1. What is the value of x?**
![](/images/challenges/2/maths-challenge-angle-question.png)  

<div class="choice radio c5">
  <div x-radio="p_5_1, a">(a) 43</div>
  <div x-radio="p_5_1, b">(b) 47</div>
  <div x-radio="p_5_1, c">(c) 53</div>
  <div x-radio="p_5_1, d" class="correct">(d) 57</div>
  <div x-radio="p_5_1, e">(e) 67</div>
</div>

<div class="solution">
  <img src="/images/challenges/2/angle-question-answer.png" width=240 class="img-right"/>
  <p>The correct answer is (d).</p>
  <p>Let the angle shown be <em>y</em>°. Because the angles at a point total 360°, we have <em>y</em>&nbsp;+&nbsp;303&nbsp;=&nbsp;360. Therefore <em>y</em>&nbsp;=&nbsp;360&nbsp;−&nbsp;303&nbsp;=&nbsp;57.</p>
  <p>Because the alternate angles formed by a line which cuts a pair of parallel lines are equal, <em>x</em>&nbsp;=&nbsp;<em>y</em>. Hence <em>x</em>&nbsp;=&nbsp;57.</p>
</div>
:::


That’s all for this week. Don’t forget to come back at 7.01pm on Sunday to find out your score and to obtain the answer sheet.
And don’t worry if you didn’t get it all right (or even half right), because this is not an exam and I am not trying
to give you questions that you can do, but rather I am trying to give you questions that you might not be able to do.

Cheerio,

Simon.


## Find out more

If you want to find out more about **Good Will Hunting**, then just Google it. There are tons of articles about one of the greatest films to come out of Hollywood. You should certainly watch it, but it is aimed at an older audience, so perhaps wait until you are a bit older.

Number nerd James Grime has made an interesting video asking [“Who was the real Good Will Hunting?”](https://www.youtube.com/watch?v=SzjdcPbjaR4?rel=0)

More about NASA blackboard photos [here](http://rarehistoricalphotos.com/nasa-scientists-board-calculations-1961/).

## **Credits**

The problems in this Parallelogram come from a variety of places and we will list them in the fourth and final Parallelogram.
