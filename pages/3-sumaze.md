# Parallelogram #3

Here is this week’s meander through mathematics:

1. Hidden Figures – another maths movie
2. The Chess Problem
3. Sumaze! Part 1
4. Kooks
5. Junior Maths Challenge question
6. Hidden Figures – more cool stuff

## 1. Hidden Figures – another maths movie

<img src="/images/challenges/3/hidden-figures-poster.png" width="170" style="float: right; margin-left: 1rem"/>

Last week we looked at the film “Good Will Hunting” and explored one of the
mathematical problems that appears in it. I also posed a question about another
film: “What is the title of the film that celebrates the role of the pioneering
women mathematicians at NASA in the 1960s?”  

Most of you correctly identified the film as Hidden Figures. Let’s start by watching the trailer.

@[youtube](RK8xHq6dfAo?rel=0)

::: problem
<div class="marks">1 mark</div>

**1.1** Just to check that you were concentrating on that trailer, for how many
hours did the children say their mother had been gone?

<div class="choice radio">
  <div x-radio="p_1_1, a">3 hours</div>
  <div x-radio="p_1_1, b">30 hours</div>
  <div x-radio="p_1_1, c" class="correct">300 hours</div>
  <div x-radio="p_1_1, d">3,000 hours</div>
  <div x-radio="p_1_1, e">30,000 hours</div>
</div>

<div class="solution">
<p>Yes, 300 hours, which the mother immediately converts into 12½ days.</p>
</div>
:::

The film tells the story of three brilliant black women who helped send the
American astronauts into space. These are just a few of the many women who
played a crucial role in the space race. It is a terrific film, which received
three Oscar nominations and which is both inspiring and exciting. Well worth
watching if your parents or teacher can get hold of the DVD. 

| ![](/images/challenges/2/nasa-3.jpg) | ![](/images/challenges/2/nasa-4.jpg) |

The women were known as “computers”, because the original term computer
referred to a person who did calculations. Only later did the term computer
become more associated with machines. Increasingly, machine computers at NASA
took over from human computers, and many of the women became some of the first
computer programmers and operators. Those early computers were incredibly
difficult to operate and relatively slow, certainly compared to today’s
computers, as discussed in a blogpost on the ZME Science website:

> …back on Earth at the Goddard Space Flight Center thousands of flight
> technicians and computer experts employed the IBM System/360 Model 75s
> mainframe computer to make independent computations and maintain communication
> between Earth and lunar landers. These computers cost $3.5 million a piece and
> were the size of a car. Each could perform several hundred thousand addition
> operations per second, and their total memory capacity was in the megabyte
> range. Programs were developed for the 75s that monitored the spacecraft’s
> environmental data and astronauts’ health, which were at the time the most
> complex software ever developed. Today, however, even a simple USB stick or
> WiFi router is more powerful, let alone an iPhone. The iPhone 6 uses an
> Apple-designed 64 bit Cortex A8 ARM architecture composed of approximately 1.6
> billion transistors. It operates at 1.4 GHZ and can process instructions at a
> rate of approximately 1.2 instructions every cycle in each of its 2 cores.
> That’s 3.36 billion instructions per second. Put simply, the iPhone 6’s clock
> is 32,600 times faster than the best Apollo era computers and could perform
> instructions 120,000,000 times faster. You wouldn’t be wrong in saying an
> iPhone could be used to guide 120,000,000 Apollo era spacecraft to the moon,
> all at the same time.

This remarkable improvement in computing is known as Moore’s Law. Wikipedia
says:

> Moore's law is the observation that the number of transistors in a dense
> integrated circuit doubles approximately every two years. The observation is
> named after Gordon Moore, the co-founder of Fairchild Semiconductor and Intel,
> whose 1965 paper described a doubling every year in the number of components
> per integrated circuit, and projected this rate of growth would continue for
> at least another decade. In 1975, looking forward to the next decade, he
> revised the forecast to doubling every two years

You might not find this doubling of the number of transistors on a computer
circuit particularly impressive, but it is actually mind-blowing. It has
literally changed civilisation.  

When something doubles, and doubles again, and again and again … then the
results are phenomenal. It is a type of increase known as exponential growth.
The graph below shows Moore’s Law between 1971 and 2011. Take note of the funny
scale on the y-axis, which increases by a factor of 10 at each step. So, in 40
years, the number of transistors on a microprocessor increased from 2,300 to
2,600,000,000, which is an increase by a factor of more than a million.

![](/images/challenges/3/moores-law-graph.png)

::: problem
<div class="marks">1 mark</div>

**1.2** Look at the number of transistors on the 80486 microprocessor (~1990)
and the number of transistors on the AMD K8 microprocessor (~2002). By what
factor did the number of transistors increase in just 12 years?

<div class="choice radio">
  <div x-radio="p_1_2, a">2</div>
  <div x-radio="p_1_2, b">10</div>
  <div x-radio="p_1_2, c">50</div>
  <div x-radio="p_1_2, d" class="correct">100</div>
  <div x-radio="p_1_2, e">500</div>
</div>

<div class="solution">
<p>The 80486 had roughly 1,000,00 transistors, and the AMD K8 had about 100,000,000
transistors, so there was an increase by a factor of 100.</p>
</div>
:::


## 2. The Chess Problem

There is a very old story that demonstrates the power of exponential growth and
Moore’s Law, but it relates to chess and rice, not computers and transistors.

In India, or Persia or somewhere east of the English Channel, the King or
Maharajah or Sultan wanted to reward a mathematician, because he had just
invented chess. The King offered a chest of gold coins or a barrel of diamonds,
but instead the mathematician asked for a grain of rice on the first square of a
chessboard, 2 grains on the second square, 4 grains on the third square and so
on, doubling the number of grains of rice on each square until the 64th square.

The King laughed at what seem like a trivial reward, but he did not laugh for
long.

Grab a piece of paper and work out the number of grains of rice on each of the
first 32 squares. You will almost certainly need a calculator, and make sure you
check your answers. I have given you a headstart by listing the answers for the
first 10 squares.

![](/images/challenges/3/rice-count-table.png)

::: problem
<div class="marks">1 mark</div>

**2.1.** How many grains were on the 15th square?

<input type="number" x-input="p_2_1, 16384"/>  

<div class="solution">
<p>If the tenth square has 512 grains (from the table), then you should have
worked out (11th = 1,024), (12th, 2,048), (13th, 4,096), (14th, 8,192) and
(15th, 16,384). The answer is 16,384.</p>
</div>

<div class="marks">1 mark</div>

**2.2** How many grains were on the 20th square? 

<input type="number" x-input="p_2_2, 524288"/>  

<div class="solution">
<p>The answer is 524,288.</p>
</div>

<div class="marks">1 mark</div>

**2.3.** How many grains were on the 32nd square?  

<input type="number" x-input="p_2_3, 2147483648"/>  

<div class="solution">
<p>The answer is 2,147,483,648.</p>
</div>
:::

If you carried on the calculation for the full 64 squares, then you should
arrive at 9,223,372,036,854,775,808 grains on the 64th square.

If you want to add up all the grains on all the squares, then total is double
the number of grains on the final square minus 1. (You can check this by looking
at the table above. The total number of grains for the first, say, five squares
is 1 + 2 + 4 + 8 + 16 = 31, which is the same as \[2 × 16\] – 1 = 31.)  

This means that the total number of grains on all 64 squares is:
(2 × 9,223,372,036,854,775,808) – 1 = 18,446,744,073,709,551,615.

That is about 100 billion tonnes of rice, which is about hundred times more rice
than the whole Earth grows each year. That is the power of exponential growth.

::: problem
<div class="marks">2 marks</div>

**2.4.**  In another version of the story, the King gets revenge by saying that the mathematician can only have
the rice if he can count them. If the mathematician counts at the rate of 1 grain per second, how long will it
take him to collect his reward of 18,446,744,073,709,551,615 grains? Which of these answers is closest?

<div class="choice radio">
  <div x-radio="p_2_4, a">400 years</div>
  <div x-radio="p_2_4, b">500 million years</div>
  <div x-radio="p_2_4, c" class="correct">600 billion years</div>
  <div x-radio="p_2_4, d">700 trillion years</div>
  <div x-radio="p_2_4, e">800 quadrillion years</div>
</div>

<div class="solution">
<p>To count 18,446,744,073,709,551,615 grains will take 18,446,744,073,709,551,615
seconds, which is roughly 18 x 1018 sec = 3 x 1017 mins = 5 x 1015 hours = 2.1 x
1014 days = 5.8 x 1011 years = 580 billion years, so the answer is roughly 600
billion years.</p>
</div>
:::

::: problem
<div class="marks">3 marks</div>

**2.5.** You get a summer job that lasts for 6 weeks. You have two salary options:  
* Option A – £100/week.
* Option B – a salary that doubles each week, starting at £10/week.  

How much would each option deliver in total after 6 weeks?

<input type="number" x-input="p_2_5a, 600" placeholder="Option A Total"/>  

<input type="number" x-input="p_2_5b, 630" placeholder="Option B Total"/>
  
Which option gives a bigger total?

<div class="choice radio s2">
  <div x-radio="p_2_5c, a">A</div>
  <div x-radio="p_2_5c, b" class="correct">B</div>
</div>

<div class="solution">
  <p>Obviously option A delivers 6 x £100 = £600.</p>
  <p>Option B delivers £10 + £20 + £40 + £80 + £160 + £320 = £630.</p>
  <p>So option B is preferable.</p>
</div>
:::

_**A quick reminder: Parallelogram questions can be tough, so don’t worry if you
struggle or get answers wrong. This is not part of your exams, so there is
nothing to lose. The trick is to enjoy the challenge, relish how tough it is and
see if your brain can deal with problems that are on the edge of what it can
handle.**_


## 3. Sumaze! Part 1

Sumaze! is a terrific new game that tests your core maths skills. 

You will have access to 9 levels of the game, starting with some really trivial ones to allow you to understand
the game, followed by some trickier levels. You score 1 point for level 1, 2 points for level 2,
3 points for level 3 and so on until 9 points for level 9.
However, you will lose 2 points for every hint you use (available on levels 8 & 9). And if you have to restart a
level then you will lose 1 point each time, up to a maximum of 4 lost points. So, if you need one hint on level 9,
then your maximum score goes from 9 down to 7. And if you succeed after restarting three times,
then your score drops from 7 down to 4.

It is easier to understand Sumaze! by experiencing it, but in case it helps here are a few important rules and tips:

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

You can stop and start Sumaze!, and the website will use cookies to remember your level and score so far,
but it is better to finish all the levels once you have started.

Start by clicking <a href="https://integralmaths.org/games/parallel_sumaze_v2/" target="_blank">here</a>, and
Sumaze! will open up in another window (which means you can always come back
to check the rules above). 

::: problem
<div class="marks">4.5 marks</div>

**3.1** When you have finished Sumaze, you will receive a score and a code word.
Please enter your code word here, so that we can add your Sumaze score to your
overall Parallelogram total.

<input type="text" v-on:change="refresh" v-model="answers.p_3_1" class="correct" placeholder="Sumaze Code Word"/>
<p style="text-align: center; margin-top: -1rem; font-weight: bold; font-size: 1.4rem;" v-show="sumazeScore(answers.p_3_1)">Score: {{sumazeScore(answers.p_3_1)}} / 45</p>

*The maximum score in Sumaze is 1 + 2 + 3 + … + 9 = 45. We will divide your
Sumaze score by 10 and add it to your overall Parallelogram score. So
ultimately a perfect Sumaze score will add 45/10 = 4.5 to your Parallelogram
total score.*

<div class="solution">
<p><a href="https://integralmaths.org/games/sumaze_solutions.mp4">This video clip</a> shows the paths you should or
could have taken to solve each stage with a perfect score.</p>
</div>
:::


## 4. Kooks

When you signed up for Parallelograms, I suggested that you had to be a bit “kooky” to want to do maths
at the weekend. Some of you seemed confused by that word, so it might help to click on the song below and hear
what David Bowie thought of kooks and being kooky. You can listen to it while doing question 5.

Also, I should mention that we can apply maths to one of David Bowie’s songs to prove that this piece of music
is everyone’s friend. He wrote a song (and a whole album) called DIAMOND DOGS. DIAMONDS are a girl’s best friend.
DOGS are a man’s best friend. So, DIAMOND DOGS is everyone’s best friend!

@[youtube](EsSlOGzPM90?rel=0)


## 5. Junior Maths Challenge question
 
::: problem
<div class="marks">2 marks</div>

**5.1.** The positive integers from 1 to 150 inclusive are placed in a 10 by 15 grid so that each cell contains
exactly one integer. Then the multiples of 3 are given a red mark, the multiples of 5 are given a blue mark,
and the multiples of 7 are given a green mark. How many cells have more than 1 mark?

<div class="choice radio">
  <div x-radio="p_5_1, a">10</div>
  <div x-radio="p_5_1, b">12</div>
  <div x-radio="p_5_1, c">15</div>
  <div x-radio="p_5_1, d">18</div>
  <div x-radio="p_5_1, e" class="correct">19</div>
</div>

<div class="solution">

The squares that receive more than one mark are those which contain integers
which are divisible by at least two of the integers 3, 5 and 7. The integers 3
and 5 are coprime, that is, they have no common factor other than 1. Therefore
the integers that are divisible by 3 and 5 are precisely those that are
divisible by 3 × 5, that is, by 15. Every 15th integer is divisible by 15. Hence
the number of integers in the range from 1 to 150 that are divisible by
15 is 150 ÷ 15 = 10.

Similarly, the integers that are divisible by 3 and 7 are precisely those that are divisible by 3 × 7 = 21.
Now 150 ÷ 21 = 71/7. Therefore the number of integers in the range from 1 to 150 that are divisible by 21 is the
integer part of 71/7, that is, 7.

In the same way we see that the integers that are divisible by 5 and 7 are precisely those that are divisible by
5 × 7 = 35. Now 150 ÷ 35 = 42/7. Therefore the number of integers in the range from 1 to 150 that are divisible by
35 is the integer part of 42/7, that is, 4.

We have 10 + 7 + 4 = 21.

It is important to note that in doing this, integers which are divisible by each of 3, 5 and 7 have been counted
three times. We need to allow for this over-counting. There is just one integer, namely 105, in the range from 1 to
150 that is divisible by 3, 5 and 7 and hence which has been counted three times in the sum 10 + 7 + 4.

To allow for this we subtract 2 from this sum, so that 105 is counted just once.
Therefore the number of squares in the grid that are given more than one mark is 21 – 2 = 19.

</div>
:::


## 6. Hidden Figures – more cool stuff

Finally, here is a 20-minute video about the film “Hidden Figures”.
Below are three questions about the first 10 minutes, but hopefully you will watch the whole clip.
This clip won’t teach you much maths, but it will hopefully help you appreciate what mathematicians can do,
why people love maths and how you often have to struggle to succeed in maths (or in anything else).

@[youtube](XiwBpkyjrmQ?rel=0&start=21)


::: problem
<div class="marks">2 marks</div>

**6.1.** Which musician was the producer of Hidden Figures?

<div class="choice radio">
  <div x-radio="p_6_1, a" class="correct">Pharrell Williams</div>
  <div x-radio="p_6_1, b">Jay Z</div>
  <div x-radio="p_6_1, c">Ed Sheeran</div>
  <div x-radio="p_6_1, d">Bruno Mars</div>
  <div x-radio="p_6_1, e">Gordon Gano</div>
</div>

<div class="marks">2 marks</div>

**6.2.** When NASA is looking for a mathematician, they need an expert in what sort of geometry?

<div class="choice radio">
  <div x-radio="p_6_2, a">3-dimensional geometry</div>
  <div x-radio="p_6_2, b" class="correct">Analytical geometry</div>
  <div x-radio="p_6_2, c">Orbital geometry</div>
  <div x-radio="p_6_2, d">Spherical geometry</div>
</div>

<div class="marks">2 marks</div>

**6.3.** What was the name of NASA's new computer?

<div class="choice radio">
  <div x-radio="p_6_3, a">Sinclair ZX Spectrum</div>
  <div x-radio="p_6_3, b">Sinclair C5</div>
  <div x-radio="p_6_3, c">Cray CDC 6600</div>
  <div x-radio="p_6_3, d" class="correct">IBM 7090 DPS</div>
</div>

<div class="solution">
<p>If you watched the clips, you will know that the producer of the film was
Pharrell Williams, they needed an expert in analytical geometry, and the new
computer was the IBM 7090 DPS.</p>
</div>
:::

And that’s the end of this week’s questions, but I have to quickly correct a question from Parallelogram #1.
In an off-hand comment, I implied that the great mathematician Carl Friedrich Gauss had a lazy teacher.
In fact, his teacher was Johann Georg Büttner, one of the world’s first properly trained maths teachers,
who played a major role in Gauss’s development. Thanks to Alan Parr from Hertfordshire for pointing this out,
and giving me a chance thank all hardworking teachers throughout the centuries and today.

And that’s everything for this week, except to pick out a very famous quote by President Kennedy,
which you will have seen in the last video. When he was inspiring America to back NASA’s efforts to explore space,
Kennedy said: “We choose to go to the moon in this decade and do the other things, not because they are easy,
but because they are hard.”

The Parallel Challenges are not in the same league as going to the moon, but it is the same principle.
You should do your best to complete them “…not because they are easy, but because they are hard.” 

Dr Singh.


## Find out more

If you want to find out more about the topics in this week’s Parallel Challenge, then I recommend:

[Your smartphone is millions of times more powerful than all of NASA’s combined computing in 1969](http://www.zmescience.com/research/technology/smartphone-power-compared-to-apollo-432/)
– an article on the ZME Science website.
 
[Here is a great article](http://www.latimes.com/science/sciencenow/la-sci-sn-hidden-figures-katherine-johnson-20170109-story.html)
from the Los Angeles Times titled “Meet the ‘Hidden Figures’ mathematician who helped send Americans into space”. 
 
Short, but incredible, [clip of mathematician Katherine Johnson](https://www.youtube.com/watch?v=rIWJFNAN4XI?rel=0) receiving
the Presidential Medal Of Freedom from President Obama. 
 
[Biography of Katherine Johnson](https://www.nasa.gov/content/katherine-johnson-biography),
one of the women featured in the film “Hidden Figures”, on the NASA website.


## **Credits**

* Moore's Law graph taken from [this Wikipedia page](https://en.wikipedia.org/wiki/Moore%27s_law)
