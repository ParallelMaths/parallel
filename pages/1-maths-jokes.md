# Parallelogram #01
 
<div style="text-align:center">Noun: parallelogram
Pronounced: /ˌparəˈlɛləɡram/
 
_Origin: late 16th century: from French parallélogramme, via late Latin from Greek parallēlogrammon, from parallēlos ‘alongside another’ + grammē ‘line’._</div>  
1. _a four-sided plane rectilinear figure with opposite sides parallel._  
2. _a portmanteau word combining parallel and telegram. A message sent each week by the Parallel Project to bright young mathematicians._
 
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

IMPORTANT – you will get points for every correct answer (or nearly correct answer).  
IMPORTANT – some questions have a hint (sometimes two hints). Please think hard and try hard before resorting to the hint. The hints will help you get the right answer, but you will lose marks.  
IMPORTANT – it does not really matter what you score get, the main thing is that you think hard about the problems...and then learn where you went wrong when the answer sheet appears. 
 
## 1. Maths jokes

It sounds odd, but there are maths jokes. Lots of jokes. In fact, lots of mathematicians are very funny. Some of my favourite comedians (Dara O'Briain, Romesh Ranganathan and Dave Gorman) studied maths at university, and I have written a whole book about the mathematicians who write The Simpsons.  
So, how good is your mathematical sense of humour? And how much maths do you know? Below are 4 jokes with 3 punchlines each. Can you spot the punchline? You will need to a bit of maths in order to work out the right answer.

**1.1. Why is 6 afraid of 7?**  
<tab/>(a) Because 1, 2, 3  
(b) Because 7, 8, 9  
(c) Because 5 predates 6  
Answer: <select v-model="answer_1_1"><option>A</option><option>B</option><option>C</option></select>


**1.2 What are the 10 kinds of people in the world?**  
(a) Set 0, Set 1, Set 2, … Set 9  
(b) α, β, γ, δ, ε, ζ, η, θ, ι, κ  
(c) Those who understand binary, and those who don’t  
Answer: <select v-model="answer_1_2"><option>A</option><option>B</option><option>C</option></select>


**1.3 What does the “B” in Benoit B Mandelbrot stand for?**  
(a) Benoit B Mandelbrot  
(b) Binomial  
(c) Breviation  
Answer: <select v-model="answer_1_3"><option>A</option><option>B</option><option>C</option></select>


**1.4 Why did the chicken cross the Möbius strip?**  
(a) To get to the other…. er…?  
(b) To reach a finite conclusion  
(c) To integrate itself into the tarmac  
Answer: <select v-model="answer_1_4"><option>A</option><option>B</option><option>C</option></select>


## 2. Mini cross-number

**2.1. What is the digit x in this cross-number?**

![](/images/crossnumber.png)

**Across**
1. A cube 
3. A cube

**Down**
1. One less than a cube
2. A number

x = <input type="number" v-model="answer_2_1"/>

::: hint 1
1 across, 3 across & 1 down are all cubes (or one less than a cube) and they are all 2-digit numbers, which means they are between 10 and 99. There are not very many cube numbers between 10 and 99, so start by writing them down and then see how they might fit into the grid.
:::

## 3. Maryam’s inspiration

![](/images/maryam-mirzakhani.png)

You might be surprised to know that there is no Nobel Prize for maths. However, there is an even bigger prize for mathematicians, which is called the Fields Medal. It is only given every 4 years, so it is very rare and precious.  
In 2014, Maryam Mirzakhani became the first woman to win a Fields Medal. She was born in Iran and now works in America, and you can find out about life and work in the short video below.  
Not surprisingly, Maryam talks about some incredibly complex maths, so don’t worry if you find it confusing. In fact, if you think you understand what Maryam is describing, then you probably don’t. Watch it carefully and answer the question below.

@[youtube](4GhbMhQLQ_g)

**3.1 What indoor sport does Maryam mention in one of her mathematical examples?**  
(a) Chess  
(b) Darts  
(c) Billiards  
(d) Table tennis  
Answer: <select v-model="answer_3_1"><option>A</option><option>B</option><option>C</option><option>D</option></select>

 
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

**3.2 Add up all the numbers from 1 to 50**  
Answer: <input type="number" v-model="answer_3_2"></input>

**3.3 Add up all the numbers from 1 to 1,000**  
Answer: <input type="number" v-model="answer_3_3"></input>

## 4. Domino toppling

I watched this terrific video last week. Take a look and answer the question afterwards.

@[youtube](5JCm5FY-dEY)

**4.1 Starting with 5mm tall domino, how many dominoes would you need to knock down the Empire State Building?**  
(a) 30  
(b) 100  
(c) 30,000  
(d) 100,000,000  
Answer: <select v-model="answer_4_1"><option>A</option><option>B</option><option>C</option><option>D</option></select>


Each domino can knock over a domino that 1.5 times bigger, which does not seem big, but it this happens over and over again then the dominoes get bigger and bigger very quickly. This is known as exponential growth and we will return to this in a future Parallelogram.
In the meantime, here is an even more extraordinary example of domino toppling where the dominos get bigger and bigger. In fact, it was a world record at the time.

@[youtube](8yYWILv91YU&t=2m56s)


## 5. Junior Maths Challenge question

_(This question is taken from JMC 2017, question 13.)_

**5.1. Consider the following three statements.**
 
(i) Doubling a positive number always makes it larger.  
(ii) Squaring a positive number always makes it larger.  
(iii) Taking the positive square root of a positive number always makes it smaller.
 	
Which of the above statements are true?

(A) All three  
(B) None  
(C) Only (i)  
(D) (i) and (ii)  
(E) (ii) and (iii)  
Answer: <select v-model="answer_5_1"><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select>


## 6. Weird optical illusions

The amazing, mind-warping objects in this video have been created by mathematical artist and engineer Professor Kokichi Sugihara. These incredible illusions literally mess with your brain.  
Sometimes the geometry that you study at school might seem ordinary – what could be more ordinary than the angles of a triangle or the symmetry of a square? – but your teachers are providing you with the first stepping stones towards gaining an understanding the nature of space, and how you can build the sort of blabberghasting structures in this video. There is one question afterwards and then you can hit the submit button and your first Parallelogram has been completed.

@[youtube](Wx4yi5m8IfI)

**6.1 Professor Sugihara’s work could help:**  
(a) Drivers  
(b) Architects  
(c) Surgeons  
Answer: <select v-model="answer_6_1"><option>A</option><option>B</option><option>C</option></select>

## Feedback

Before you can finish your Parallelogram, you need to take 30 seconds to answer a few questions that will tell us what you thought about this week’s challenges.

<div style="text-align:center">

How difficult was this Parallelogram?  
<select v-model="feedback_difficulty"><option>Very Easy</option><option>Quite Easy</option><option>OK</option><option>Quite Difficult</option><option>Very Difficult</option></select>  

How long was this Parallelogram?  
<select v-model="feedback_length"><option>Very Short</option><option>A Bit Short</option><option>OK</option><option>A Bit Long</option><option>Very Long</option></select>  

How much fun was this Parallelogram?  
<select v-model="feedback_fun"><option>Very Horrible</option><option>A Bit Horrible</option><option>OK</option><option>Quite Fun</option><option>Very Fun</option></select>  

How interesting was this Parallelogram?  
<select v-model="feedback_interest"><option>Very Boring</option><option>A Bit Boring</option><option>OK</option><option>A Bit Interesting</option><option>Very Interesting</option></select>

</div>
 
## Further Interest
 
You can read more about mathematician Maryam Mirzakhani in [this interview published in the Guardian](https://www.theguardian.com/science/2014/aug/13/interview-maryam-mirzakhani-fields-medal-winner-mathematician): 'The more I spent time on maths, the more excited I got'.

[This article from the Telegraph newspaper](http://www.telegraph.co.uk/news/science/11029161/The-Fields-Medal-is-the-greatest-prize-in-maths.html) provides some history about the Fields Medal, the biggest prize in mathematics.

[This website](https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/) goes into more detail about ways of adding the numbers from 1 to 100, and is worth looking at. 

Don’t forget, your score and answers will be available [here](www.parallelogram.org.uk/Sunday-answers-and-score) from 7.31 on Sunday.