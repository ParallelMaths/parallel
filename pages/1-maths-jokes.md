# Parallelogram #01
  
Welcome to the first of four weekly Parallelograms, a collection of mathematical challenges designed to stretch your brain and make your neurons more squiggly.
You can start and stop whenever you like, but you will need to complete all the challenges by 7pm on Sunday. Then, return to the site one minute later at 7.01pm and you will find your score and a sheet with answers and explanations. Then there will be an online tutorial at 8pm – more information about joining the tutorial appears when you have finished this Parallogram. 
This week’s Parallelogram challenge is in seven parts… some Challenges will have a single theme, while others have sections that shoot off in wildly different directions. In short, these challenges are often going to be a random walk through the mysteries of mathematics. Be prepared to encounter all sorts of weird ideas.

1. Maths jokes
2. Mini cross-number
3. Maryam’s inspiration
4. Domino toppling
5. Junior Maths Challenge question
6. Bloodhound & the world speed record
7. Weird optical illusions

<div class="warning">

**Important**
* You will get points for every correct answer (or nearly correct answer).
* Some questions have a hint (sometimes two hints). Please think hard and try hard before resorting to the hint. The hints will help you get the right answer, but you will lose points.
* It does not really matter what you score get, the main thing is that you think hard about the problems … and then learn where you went wrong when the answers appear.

</div>
 
## 1. Maths jokes

It sounds odd, but there are maths jokes. Lots of jokes. In fact, lots of mathematicians are very funny. Some of my favourite comedians (Dara O'Briain, Romesh Ranganathan and Dave Gorman) studied maths at university, and I have written a whole book about the mathematicians who write The Simpsons.  

So, how good is your mathematical sense of humour? And how much maths do you know? Below are 4 jokes with 3 punchlines each. Can you spot the punchline? You will need to a bit of maths in order to work out the right answer.

::: problem
__1.1 Why is 6 afraid of 7?__
<div class="choice radio">
  <div x-radio="p_1_1, a">Because 1, 2, 3</div>
  <div x-radio="p_1_1, b">Because 7, 8, 9</div>
  <div x-radio="p_1_1, c">Because 5 predates 6</div>
</div>

__1.2 What are the 10 kinds of people in the world?__
<div class="choice radio">
  <div x-radio="p_1_2, a">Set 0, Set 1, Set 2, …, Set 9</div>
  <div x-radio="p_1_2, b">α, β, γ, δ, ε, ζ, η, θ, ι, κ</div>
  <div x-radio="p_1_2, c">Those who understand binary, and those who don’t</div>
</div>

__1.3 What does the “B” in Benoit B Mandelbrot stand for?__
<div class="choice radio">
  <div x-radio="p_1_3, a">Benoit B Mandelbrot</div>
  <div x-radio="p_1_3, b">Binomial</div>
  <div x-radio="p_1_3, c">Breviation</div>
</div>

__1.4 Why did the chicken cross the Möbius strip?__
<div class="choice radio">
  <div x-radio="p_1_4, a">To get to the other… er…?</div>
  <div x-radio="p_1_4, b">To reach a finite conclusion</div>
  <div x-radio="p_1_4, c">To integrate itself into the tarmac</div>
</div>
:::


## 2. Mini cross-number

::: problem
__2.1 What is the digit x in this cross-number?__

<table><tr><td>

![](/images/crossnumber.png)

</td><td>

**Across**  
**1.** A cube  
**3.** A cube

</td><td>

**Down**  
**1.** One less than a cube  
**2.** A number

</td></tr></table>

<input type="number" v-model="answers.p1_2_1"/>
:::

::: hint 1
1 across, 3 across & 1 down are all cubes (or one less than a cube) and they are all 2-digit numbers, which means they are between 10 and 99. There are not very many cube numbers between 10 and 99, so start by writing them down and then see how they might fit into the grid.
:::

## 3. Maryam’s inspiration

![](/images/maryam-mirzakhani.png)

You might be surprised to know that there is no Nobel Prize for maths. However, there is an even bigger prize for mathematicians, which is called the Fields Medal. It is only given every 4 years, so it is very rare and precious.

In 2014, Maryam Mirzakhani became the first woman to win a Fields Medal. She was born in Iran and now works in America, and you can find out about life and work in the short video below.

Not surprisingly, Maryam talks about some incredibly complex maths, so don’t worry if you find it confusing. In fact, if you think you understand what Maryam is describing, then you probably don’t. Watch it carefully and answer the question below.

@[youtube](4GhbMhQLp1_g)

::: problem
**3.1 What indoor sport does Maryam mention in one of her mathematical examples?**  
<div class="choice radio">
  <div x-radio="p_3_1, a">Chess</div>
  <div x-radio="p_3_1, b">Darts</div>
  <div x-radio="p_3_1, c">Billiards</div>
  <div x-radio="p_3_1, d">Table tennis</div>
</div>
:::
 
Maryam has said that she first became fired up about mathematics when her big brother told her a story about the great mathematician Carl Friedrich Gauss. When Gauss was a schoolboy, his teacher tried to keep the class busy by asking them to add up all the numbers from 1 to 100. I suspect that he wanted to nip out for a 15-minute nap.
 
![](/images/gauss.png)

However, before the teacher had even left the room, Gauss’s hand shot up and he announced that the answer was 5,050.
 
Gauss was right, but how did he add up the first 100 numbers in just a few seconds?

Here is Gauss's trick in three stages:  
1.	Pair up all the numbers in the following way and add them up:
	
	1 + 100 = 101,  
	2 + 99 = 101,  
	3 + 98 = 101  
	…  
	50 + 51 = 101
	  
2.	So, you have 50 pairs of numbers, which all add up to 101.  
3. 	So, the result is 50 x 101 = 5,050!  
 
Another way to think about this is:

![](/images/sum-equation.png)
	
* **(n+1)** represents step 1, because you pair up all the numbers, so that all the pairs add up to **(n+1)**.  
* **(n/2)** represents step 2, because the number of pairs is equal to the total number of numbers divided by 2.  
* **(x)** represents step 3, because you then multiply the sum of each pair by the number of pairs.
 
Let’s see if you can apply Gauss’s trick.

::: problem
**3.2 Add up all the numbers from 1 to 50**  
<input type="number" v-model="answers.p1_3_2"></input>

**3.3 Add up all the numbers from 1 to 1,000**  
<input type="number" v-model="answers.p1_3_3"></input>
:::

## 4. Domino toppling

I watched this terrific video last week. Take a look and answer the question afterwards.

@[youtube](5JCm5FY-dEY)

::: problem
**4.1 Starting with 5mm tall domino, how many dominoes would you need to knock down the Empire State Building?**  
<div class="choice radio">
  <div x-radio="p_4_1, a">30</div>
  <div x-radio="p_4_1, b">100</div>
  <div x-radio="p_4_1, c">30,000</div>
  <div x-radio="p_4_1, d">100,000,000</div>
</div>
:::

Each domino can knock over a domino that 1.5 times bigger, which does not seem big, but it this happens over and over again then the dominoes get bigger and bigger very quickly. This is known as exponential growth and we will return to this in a future Parallelogram.
In the meantime, here is an even more extraordinary example of domino toppling where the dominos get bigger and bigger. In fact, it was a world record at the time.

@[youtube](8yYWILv91YU&t=2m56s)


## 5. Junior Maths Challenge question

::: problem
**5.1 Which of these three statements are true?**
<div class="choice checkbox">
  <div x-checkbox="p_5_1a">Doubling a positive number always makes it larger.</div>
  <div x-checkbox="p_5_1b">Squaring a positive number always makes it larger.</div>
  <div x-checkbox="p_5_1c">Taking the positive square root of a positive number always makes it smaller.</div>
</div>

_(This question is taken from JMC 2017, question 13.)_
:::


## 6. Weird optical illusions

The amazing, mind-warping objects in this video have been created by mathematical artist and engineer Professor Kokichi Sugihara. These incredible illusions literally mess with your brain.  
Sometimes the geometry that you study at school might seem ordinary – what could be more ordinary than the angles of a triangle or the symmetry of a square? – but your teachers are providing you with the first stepping stones towards gaining an understanding the nature of space, and how you can build the sort of blabberghasting structures in this video. There is one question afterwards and then you can hit the submit button and your first Parallelogram has been completed.

@[youtube](Wx4yi5m8IfI)

::: problem
**6.1 Professor Sugihara’s work could help:**
<div class="choice">
  <div x-radio="p_6_1, a">Drivers</div>
  <div x-radio="p_6_1, b">Architects</div>
  <div x-radio="p_6_1, c">Surgeons</div>
</div>
:::


## Further Interest
 
You can read more about mathematician Maryam Mirzakhani in [this interview published in the Guardian](https://www.theguardian.com/science/2014/aug/13/interview-maryam-mirzakhani-fields-medal-winner-mathematician): 'The more I spent time on maths, the more excited I got'.

[This article from the Telegraph newspaper](http://www.telegraph.co.uk/news/science/11029161/The-Fields-Medal-is-the-greatest-prize-in-maths.html) provides some history about the Fields Medal, the biggest prize in mathematics.

[This website](https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/) goes into more detail about ways of adding the numbers from 1 to 100, and is worth looking at. 
