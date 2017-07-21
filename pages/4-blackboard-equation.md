# Parallelogram #4

This week’s portfolio of problems is the usual mess of mathematical jiggery-pokery.

1. Hidden Figures – the blackboard equation
2. Sumaze! Part 2
3. Some Random Philosophy
4. Mathigon – Graphs & Networks (Part 1)
5. Review Quiz

## 1. Hidden Figures – the blackboard equation

Last week, we featured the film “Hidden Figures”, about the black women who played a crucial role in the space race,
and you watched a trailer for the film.

A couple of you mentioned the equation that the young Katherine Johnson was trying to solve on the school blackboard,
which you can see in this still from the film.

![](images/challenges/4/blackboard.png)

In case it is not clear, the question is: 

Solve the equation for x:

![](images/challenges/4/blackboard-equation.png)

Some of you might have come across this sort of equation before, or perhaps a simpler version of it. Either way,
here is a step-by-step method for solving it, or rather two methods.

**Method 1 (Brute force)**

Brute force means doing it the hard way. If you want to open a locked door, then the smart way is to find the key or
pick the lock, but the brute force way is to just smash through the door. In this case, brute force means testing
every possible value of x until you find some solutions.

For x = 0,
![](images/challenges/4/blackboard-equation-x0.png)

For x = 1,
![](images/challenges/4/blackboard-equation-x1.png)

For x = 2,
![](images/challenges/4/blackboard-equation-x2.png)


So, after checking three values of x, we found one solution, i.e., the equation equals zero when x = 1.
In this case, the brute force approach has delivered a solution, but there are 4 solutions in total and it
might take ages to find the others if we followed the brute force approach, particularly if the other values of
x are very large or fractions or decimals.

**Method 2 (Smart Maths)**

If we have an expression involving something like <span class="eq">(x<sup>2</sup> + 6x – 7)</span>,
then we can often factor it into a pair of simpler bracketed terms, which in this case would be
<span class="eq">(x + 7)(x – 1)</span>.

Similarly, we can rewrite <span class="eq">(2x<sup>2</sup> – 5x – 3)</span> as
<span class="eq">(2x + 1)(x – 3)</span>.

Therefore,

<span class="eq">(x<sup>2</sup> + 6x – 7)(2x<sup>2</sup> – 5x – 3) = 0</span>

can be re-written as

<span class="eq">(x + 7)(x – 1)(2x + 1)(x – 3) = 0</span>

Of course, if the four brackets multiply to make zero, then at least of the brackets must equal zero,
which means x = -7, 1, -½ or 3.

::: problem
<div class="marks">4 marks</div>

**1.1** What are values for x in this equation?	Try the Smart Maths method first, but if you are stuck then try brute force.

<span class="eq">(x<sup>2</sup> – 3x + 2)(x<sup>2</sup> + 3x + 2) = 0</span>

There are 4 possible answers, so just click on four of the answers below.	

<div class="choice checkbox c3">
  <div x-checkbox="p_1_1a">-4</div>
  <div x-checkbox="p_1_1b">-3</div>
  <div x-checkbox="p_1_1c" class="correct">-2</div>
  <div x-checkbox="p_1_1d" class="correct">-1</div>
  <div x-checkbox="p_1_1e">0</div>
  <div x-checkbox="p_1_1f" class="correct">1</div>
  <div x-checkbox="p_1_1g" class="correct">2</div>
  <div x-checkbox="p_1_1h">3</div>
  <div x-checkbox="p_1_1i">4</div>
</div>

<div class="solution">
<p><span class="eq">(x<sup>2</sup> - 3x + 2)(x<sup>2</sup> + 3x + 2) = (x – 1)(x – 2)(x + 1)(x + 2) = 0</span></p>
<p>So, x = 1, 2, -1, -2.</p>
</div>

:::

You might not have come across this sort of maths in your classroom – it is known as factoring quadratics.
This video gives you an idea of how you factor a quadratic.

@[youtube](AMEau9OE6Bs?rel=0)


## 2. Sumaze! Part 2

After last week’s taster, it seems that Sumaze! is now a firm favourite with lots of you. Huge thanks to Richard
Lissaman, who created Sumaze! and who is part of MEI (Mathematics in Education & Industry).

You will have access to 9 new levels of the game, starting with some easier ones to allow you to get used to
the game again, followed by some trickier levels. You score 1 point for level 1, 2 points for level 2,
3 points for level 3 and so on until 9 points for level 9. However, you will lose 2 points for every hint you
use (available on levels 8 & 9). And if you have to restart a level, then you will lose 1 point each time, up
to a maximum of 4 lost points. So, if you need one hint on level 9, then your maximum score goes from 9 down to 7.
And if you succeed after restarting three times, then your score drops from 7 down to 4.

It is easier to understand Sumaze! by experiencing it, but in case it helps, here are a few important rules and tips:

* Aim – to move your blue box to reach the “end of level” square.
* Your box cannot at any time contain a number bigger than 1,000.
* Your box cannot at any time contain a number that is a fraction.
* You sometimes need keys to open doors to reach the “end of level” square.
* Passing through an arrow means you cannot go back.
* To pass through a green square you must satisfy the square’s condition.
* Pink squares (and their operations) disappear when you move onto them.
* Lilac squares (and their operations) can be crossed over and over again.
* IMPORTANT – Sumaze won't run on a smartphone. If you are currently on a smartphone,
    then type this into your PC/Mac/tablet browser: bit.ly/parallel_sumaze
* You can stop and start Sumaze!, and the website will use cookies to remember your level and score so far,
    but it is better to finish all the levels once you have started.

<a class="external" href="https://integralmaths.org/games/parallel_sumaze_4/" target="_blank">Open Sumaze</a>

::: problem
<div class="marks">4.5 marks</div>

**2.1** When you have finished Sumaze, you will receive a score and a code word. Please enter your code word here,
    so that we can add your Sumaze score to your overall Parallelogram total.

<input type="text" v-on:change="refresh" v-model="answers.p_2_1" class="correct" placeholder="Sumaze Code Word"/>
<p style="color: #cf0048; text-align: center; margin-top: -1rem; font-weight: bold; font-size: 1.4rem;" v-show="sumazeScore(answers.p_2_1)">Score: {{sumazeScore(answers.p_2_1)}} / 45</p>

*The maximum score in Sumaze is 1 + 2 + 3 + … + 9 = 45. We will divide your
Sumaze score by 10 and add it to your overall Parallelogram score. So
ultimately a perfect Sumaze score will add 45/10 = 4.5 to your Parallelogram
total score.*

<div class="solution">
<p><a href="https://integralmaths.org/games/sumaze_solutions.mp4" target="_blank">This video clip</a> shows the paths you should or
could have taken to solve each stage with a perfect score.</p>
</div>

:::

## 3. Some Random Philosophy

Each Parallelogram contains challenges about maths, because I know you are a keen mathematician,
but it is also important to sometimes stray beyond numbers and geometry and explore other aspects of the world.
You should be curious about lots of things, so a few of the challenges that you will encounter will encourage you
to think creatively, to be ambitious, to develop confidence and to see the world from other perspectives.
Ultimately, and for unknown reasons, these apparently odd challenges will help you to be a better mathematician.

This part of the Parallelogram is all about a philosophical puzzle called the Trolley Problem.
Watch the following short video. There is no question to answer at the end, but the Challenge is to understand the
Trolley Problem and realise that sometimes it is hard to decide what is right and what is wrong.

@[youtube](bOpf6KcWYyw?rel=0)


## 4. Mathigon – Graphs & Networks

Philipp Legner, a software engineer at Google, has created a brilliant online maths resource called Mathigon.
You will visit the Mathigon site and explore the topic of Graphs and Networks, an area of maths which is at the heart
of understanding everything from the brain to the Internet, from railways to friendships. We touched on Graphs and
Networks in Parallelogram #2 (Good Will Hunting and the tree problem), but otherwise I suspect that this a topic
that will be new to almost of all of you.

::: problem
<div class="marks">5 marks</div>

**4.1** Click on the link below to open Mathigon. The content is divided into many short
sections, which are revealed gradually as you solve problems and answer questions.
You can get a maximum of 5 marks for completing the entire chapter, and your
Mathigon progress will be automatically added to your Parallel score.

<p v-if="!user" style="font-weight: bold">Remember to log in before clicking this link!</p>

<a class="external" v-bind:href="'https://mathigon.org/parallel/graphs-and-networks' + mathigonUrl()" target="_blank">Open Mathigon</a>

<p style="color: #cf0048; text-align: center; font-weight: bold; font-size: 1.4rem;" v-show="answers.mathigon">Progress: {{round(answers.mathigon * 5)}} / 5</p>
:::


## 5. Review Quiz

These quick questions cover three topics that appeared in the previous three Parallelograms. If it helps you can refer
back to those Parallelograms. 

::: problem
<div class="marks">2 marks</div>

**5.1** In Parallelogram #1, we talked about a quick way to add up all the numbers from, say, 1 to 100. Can you remember it?
Hint: sometimes it’s easier to pair numbers, perhaps the smallest and the biggest.

The sum of all the numbers from 1 to 40 is: 

<div class="choice radio c4">
  <div x-radio="p_5_1, a">800</div>
  <div x-radio="p_5_1, b">810</div>
  <div x-radio="p_5_1, c" class="correct">820</div>
  <div x-radio="p_5_1, d">822</div>
</div>

<div class="solution">
<p>If we pair up all the numbers we get 20 pairs and each one totals 41, namely (40 + 1), (39 + 2), (38, 3) and so on.
And 20 x 41 = 820.</p>
</div>
:::

::: problem
<div class="marks">2 marks</div>

**5.2** In Parallelogram #2, we talked about the film “Good Will Hunting” and the janitor solved a problem about mathematical tree diagrams. Below are five tree diagrams, but four of them are essentially the same. Which tree is different?

<div class="choice radio c3">
  <div x-radio="p_5_2, a"><img src="/images/challenges/4/graph-a.png" width="160"/></div>
  <div x-radio="p_5_2, b"><img src="/images/challenges/4/graph-b.png" width="160"/></div>
  <div x-radio="p_5_2, c" class="correct"><img src="/images/challenges/4/graph-c.png" width="160"/></div>
  <div x-radio="p_5_2, d"><img src="/images/challenges/4/graph-d.png" width="160"/></div>
  <div x-radio="p_5_2, e"><img src="/images/challenges/4/graph-e.png" width="160"/></div>
</div>

<div class="solution">
<p>The answer is (c) , because all the other trees can be twisted and stretched to form each other.
Alternatively, (c) has 2 nodes with 3 lines, and 4 nodes with 2 lines. By contrast, all the other trees have
1 node with 5 lines, and 5 nodes with 1 line.</p>
</div>
:::

::: problem
<div class="marks">2 marks</div>

**5.3** In Parallelogram #3, we covered Moore’s Law and the power of doubling, so here is a doubling question.
You have a large piece of paper, which is 0.1 mm thick, and you can fold it over and over again as many times as
you like. Each time you fold the paper, it doubles in thickness.
How many times do you have to fold the paper in order for it to become so thick that it will reach the Moon?
(The distance from the Earth to the Moon is 384,000 Km.)

<div class="choice radio">
  <div x-radio="p_5_3, a" class="correct">42</div>
  <div x-radio="p_5_3, b">42,000</div>
  <div x-radio="p_5_3, c">42,000,000</div>
  <div x-radio="p_5_3, d">42,000,000,000</div>
</div>

<div class="solution">

This video clip explains how to work out the answer:
@[youtube](S2ec2wpYJ_0)

</div>

:::

And that’s the end of the final Parallelogram for the time being. The feedback has been very positive,
and you seem to have found the problems fun, interesting and challenging. In fact, this little experiment
has been so successful that the plan is to return in the autumn with a new series of weekly Parallelograms.
So check www.parallel.org.uk on October 1.

In the meantime, there is more maths in the “find out more” section below. Also, have a great Summer.
And a great Subtracter, Divider and Multiplier. 

Dr Singh.

## Find out more

If you want to challenge yourself further over the summer, then explore the web and you will find a ton of mathematics.
In particular, you should check out [NRICH](https://nrich.maths.org/), because it has been the source of
some of our Parallelogram puzzles.

One of the best maths sites is the video channel Numberphile, which has hundreds of brilliant videos.
Here are just a few to get you started (including one presented by me):

* [Pi and Four Fingers and The Simpsons](https://www.youtube.com/watch?v=K305Vu7hFg0?rel=0)
* [Balancing a Ruler](https://www.youtube.com/watch?v=djmec-Bweeg?rel=0)
* [Chaos Game](https://www.youtube.com/watch?v=kbKtFN71Lfs?rel=0)
* [The Scientific (Mathematical) Way to Cut a Cake](https://www.youtube.com/watch?v=wBU9N35ZHIw?rel=0)

## Credits

* The Trolley Problem video is a spin off from the BBC series
[A History of Ideas](http://www.bbc.co.uk/programmes/b04bwydw), made with the Open University.
