# Euclid Module 4 Week 3 Homework

These homework problems relate to a recent theme you have been covering with your tutor. They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous tutorial sessions (which you can access on your Academy page).  

Every question is worth 2 marks. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.  

Take your time, ensuring that you haven’t overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

We will also be running a weekly drop-in homework help tutorial (look out for our emails).  


## 1.
::: problem id=1_1 marks=2
There are eight sprinters in the Olympic 100-metre sprint final.  

After the race, the gold medal goes to first place, silver to second, and bronze to third.  

In how many different ways can the medals be awarded?   

* [ ] 21
* [ ] 24
* [ ] 512
* [ ] 112
* [x] 336
{.col-5}

---
There are eight choices for who wins the gold medal, then seven choices of who wins the silver and finally six choices for who wins bronze.

In total, that is `8 × 7 × 6 = 336` ways of awarding the medals.  
:::


## 2.
::: problem id=2_1 marks=2
A bag contains 3 white balls, 5 red balls and 7 green balls.  

A selection of balls is made.  

Of all the selections of balls that could be made, how many contain an odd number of red balls?   

* [ ] 105
* [ ] 95
* [ ] 192
* [x] 96
* [ ] 63
{.col-5}

---

There are three choices for the number of reds that could be selected (1, 3 or 5), four choices for the number of whites (0 to 3) and eight choices for the number of greens (0 to 7).  

This would mean there are `3 × 4 × 8 = 96` different selections.  

There is no need to subtract one because we always have at least one red ball.  
:::


## 3.
::: problem id=3_1 marks=2
Ada has a collection of tiles, each of which has a single digit written on it.  

There are five tiles with the digit 5, four tiles with the digit 4, three tiles with the digit 3 and finally two tiles with the digit 2 written on them.  

She puts three tiles side by side to make a three-digit number.  

For example, three tiles with 5, 4 and 3 written on them could make 543 or 345 (these are not the only possibilities).  

How many different three-digit numbers can she make?  

<input type="number" solution="63"/> 

---

It will be helpful to pretend that Ada has three tiles with the digit 2 written on them.  

This makes the problem rather straightforward because we now have four choices for each of the three-digits (2, 3, 4 or 5).  

This means `4 × 4 × 4 = 4^3 = 64` three-digit numbers could be made.  

Of course, Ada does not have three tiles with a digit 2 written on, so we must consider which of these 64 three-digit numbers cannot be made.  

The only one that uses the digit 2 more than twice is 222.  

This means Ada can make 63 different three-digit numbers.  
:::


## 4.
::: problem id=4_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
How many three-digit numbers use __exactly__ two different digits (for example 100 or 266)?   
  
<input type="number" solution="243"/> 

---

There are 9 integeres with two zeros, ie 100, 200, ... , 800, 900.  

When the repeated digit is non-zero, the integers have the form 'xxy', 'xyx', or 'yxx'.  

If `x = 1`, `y` can be 0, 2, 3, 4, 5, 6, 7, 8, or 9, although we must ignore '011' as this is a two-digit integer. This gives 26 different integers.  

Similarly, there will be an additional 26 integers for every non-zero `x` value.  

Therefore, the total number of three-digit integers less than 1000 have exactly two different digits in their representation is `9 + 9 × 26 = 243`.
:::