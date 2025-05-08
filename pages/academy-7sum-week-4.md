# Parallel Academy Year 7 Summer Term Week 3

These problems relate to a recent theme you have been covering with your tutor. They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous tutorial sessions (which you can access on your Academy page).  

The number of marks each question or part is worth is shown. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.   

Take your time, ensuring that you haven't overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

We will also be running a weekly homework review session (look out for our emails).  

**Before you click Submit at the end of the assignment, check that all of your answers have been entered correctly.** 
  
**After you click Submit, make sure you scroll down to see the correct answers and read the full written solutions.**  

## 1.
::: problem id=1_1 marks=2
Layla has three different pairs of sunglasses, four different backpacks and five different pairs of flip-flops.  

If she wears one pair of sunglasses, one backpack and one pair of flip-flops to the beach, how many different combinations can she wear?  

<input type="number" solution="60"/>  

---

`3 × 4 × 5 = 60`
:::


## 2.
::: problem id=2_1 marks=2  
There are eight sprinters in the Olympic 100-meter sprint final.  

After the race, the gold medal goes to first place, silver to second, and bronze to third.  

In how many different ways can the medals be awarded?  
 
<input type="number" solution="336"/>

---

There are eight choices for who wins the gold medal, then seven choices of who wins the silver and finally six choices for who wins bronze.  

In total, that is `8 × 7 × 6 = 336` ways of awading the medals.
:::


## 3.
::: problem id=3_1 marks=2
A password consists of _two_ capital letters from A to J followed by _two_ digits from 0 to 4 (repetitions not allowed).  

How many different passwords are possible?  

<input type="number" solution="1800"/>  

^^^ hint id=3_1_1 marks=1
How many choices are there for the letter?  

How many choices for the first digit?  

How many choices for the second digit (which cannot be the same as the first)?  
^^^

---

There are 10 choices for the first letter, 9 choices for the second letter, 5 choices for the first digit and 4 choices for the final digit.  

This means there are `10 × 9 × 5 × 4 = 1800` possible passwords.  
:::


## 4.
::: problem id=4_1 marks=2
A password consists of _one_ capital letter from A to J followed by _three_ digits from 0 to 5 (repetitions not allowed).  

How many different passwords are possible if the _last_ digit must be _odd_?  
  
<input type="number" solution="600"/>  

^^^ hint id=4_1_1 marks=1
It is easier to think about forming the password in reverse.  
^^^

---
It is easiest to think about creating the password in reverse.  

There are 3 choices for the odd digit at the end (1,3,5), then 5 choices for the digit before that (anything from 0 to 5 other than the odd digit just chosen), then 4 choices for the digit before that and finally 10 choices for the letter.  

This means there are `3 × 5 × 4 × 10 = 600` possible passwords ending with an odd digit.  
:::


## 5.
::: problem id=5_1 marks=2
For an upcoming Davis Cup tennis match, Team GB need to select one pair of tennis players to compete in an international doubles match.  

If there are 8 players to chose from, how many different pairs could be selected?  
  
<input type="number" solution="28"/> 

^^^ hint id=5_1_1 marks=1
The order in which a pair is chosen is not important, and so AB and BA should be considered the same.  
^^^

---
There are 8 choices for the first player and 7 choices for the second player and so we may think that there are `8 × 7 = 56` different pairs.  

In fact, there are there `(8 × 7)/2 = 28` different pairs because the previous calculation would count each pair twice.  
:::


## 6.
::: problem id=6_1 marks=2
For an upcoming Davis Cup tennis match, Team GB need to select two pairs of tennis players to compete in an international doubles match.  

If there are 8 players to chose from, in how many different ways can two pairs be selected?  
  
<input type="number" solution="210"/> 

^^^ hint id=6_1_1 marks=1
The order in which a pair is chosen is not important, and so AB and BA should be considered the same.  

The order in which the two pairs are chosen is not important either. For example, if we chose the pairs AB and CD either pair could have been chosen first.  
^^^

---
From the previous question we know that there are 28 ways to select the first pair.  

Using a similar argument, there will be `(6 × 5)/2 = 15` ways to pick the second pair.  

We may think that there are then `28 × 15 = 420` ways to pick the two pairs, but this overcounts by a factor of two.  

This is because if the two pairs were denoted AB and CD, we could have chosen the pair AB first or second.  

This means that there are `(28 × 15)/2 = 210` ways to select the two pairs.  
:::

## 7.
::: problem id=7_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
Ada has a collection of tiles, each of which has a single digit written on it.  

There are five tiles with the digit 5, four tiles with the digit 4, three tiles with the digit 3 and finally two tiles with the digit 2 written on them.  

She puts three tiles side by side to make a three-digit number.  

For example, three tiles with 5, 4 and 3 written on them could make 543 or 345 (these are not the only possibilities).  

How many different three-digit numbers can she make?  

<input type="number" solution="63"/> 

^^^ hint id=7_1_1 marks=1
Pretend that Ada has three tiles with the digit 2 written on them and then adjust accordingly at the end.  
^^^

---

It will be helpful to pretend that Ada has three tiles with the digit 2 written on them. This makes the problem rather straight forward because we now have four choices for each of the three-digits (2, 3, 4 or 5). This means `4 × 4 × 4 = 4^3 = 64` three digit numbers could be made.  

Of course, Ada does not have three tiles with a digit 2 written on, so we must consider which of these 64 three-digit numbers cannot be made. The only one that uses the digit 2 more than twice is 222.  

This means Ada can make 63 different three-digit numbers.  
:::

**Before you click Submit at the end of the assignment, check that all of your answers have been entered correctly.** 
  
**After you click Submit, make sure you scroll down to see the correct answers and read the full written solutions.**  