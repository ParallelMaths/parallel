# Euclid Module 4 Week 6 Homework

These homework problems relate to a recent theme you have been covering with your tutor. They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous tutorial sessions (which you can access on your Academy page).  

Every question is worth 2 marks. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.   

Take your time, ensuring that you haven't overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

We will also be running a weekly drop-in homework help tutorial (look out for our emails).  


## 1.
::: problem id=1_1 marks=2
Using the five-letter reduced alphabet `A` to `E` and the digits `1` to `3`, how many three-symbol passwords are possible if both a letter and a number must be used and repeats are allowed?  

<input type="number" solution="360"/>  

---

We can split into cases depending on how many letters are used.  

There are only two possibilities: either one letter is used or two letters are used.  

One-Letter Passwords: We have `5` choices for the letter used, then `3` choices for each of the two digits. This gives `5 × 3 × 3 = 45` possibilities.  

However, we must remember that the single letter can be placed in one of three available positions and so we again multiply by `3` to get `45 × 3 = 135` one-letter passwords.  

Two-Letter Passwords: We have `5` choices for each of the two letters used, then `3` choices for the remaining digit.  

The single digit can be placed in one of three available positions and so we have `5 × 5 × 3 × 3 = 225` two-letter passwords.  

In total, we have `135 + 225 = 360` possible passwords.  
:::


## 2.
::: problem id=2_1 marks=2
How many positive integers less than `1000` contain exactly two `3`s in their digits?  

<input type="number" solution="27"/>

^^^ hint id=2_1_1 marks=1
The cases to consider could be where the two digit `3`s appear (giving three cases).  

It will be helpful to denote positive integers below `1000` with leading zeroes where necessary, so that, for example, `3` and `33` appear as 003 and 033.  
^^^

---

Here the cases should be where the two digit `3`s occur.  

For convenience, we will consider one-digit numbers to have two leading zeroes and two-digit numbers to have one leading zero.  

For example, `3` and `33` would be denoted `003` and `033`.  

This will allow us consider every possibility as being made up of three digits from `0` to `9` inclusive.  

The three cases are `33~, 3~3` or `~33`, where `~` denotes a digit which is not `3`.  

Each of these cases is symmetrical, meaning that the calculation turns out to be the same in all cases, giving the same number of possibilities.  

In each case, there are `9` possibilities for assigning `~`.  

This means there are `3 × 9 = 27` positive integers less than `1000` which contain exactly two `3`s in their digits.  
:::


## 3.
::: problem id=3_1_1 marks=2
How many pairs of positive integers `(x,y)` satisfy `2x^3 + y < 100`?  

[`2x^3` means `2 xx x xx x xx x`.]  

[Remember that `(1,2)` means something different to `(2,1)`.]  
 
<input type="number" solution="225"/>  

^^^ hint id=3_1_1 marks=1
As third powers grow quickly, first consider the possible values for `x` and simplify the resulting inequality in each case.  
^^^

---

The key observation is that `2x^3` becomes larger than `100` when `x` is larger than `3`.  
 
As `x` is a positive integer, this means the only cases we need to consider are `x = 1,2` or `3`.  

`x = 1`: `2 × 1^3 + 𝑦 < 100` means that `y < 98` and there are `97` possible values of `y`.  

`x = 2`: `2 × 2^3 + 𝑦 < 100` means that `y < 84` and there are `83` possible values of `y`.  

`x = 3`: `2 × 3^3 + 𝑦 < 100` means that `y < 46` and there are `45` possible values of `y`.  

In total, there are `97 + 83 + 45 = 225` possible pairs.  
:::


## 4.
::: problem id=4_1 marks=2
How many positive integers less than `1000` contain exactly one digit `0` and are even?  

<input type="number" solution="117"/> 

^^^ hint id=4_1_1 marks=1
Here it would be unhelpful to denote positive integers below `1000` with leading zeroes.  

Instead, the cases could be the number of digits the number has and two subcases will need to be considered for three-digit numbers.  
^^^

---
It may be tempting to try and utilise leading zeroes here, however allowing leading zeroes will upset our count of the number of zeroes in a particular positive integer.  

To avoid this, our cases will focus on the number of digits rather than where we place the digit `0`.  

The only possibilities are two-digit and three-digit numbers (one-digit is not possible because the integer must be positive).  

Two-digit integers: These must have the form ~0 where ~ is any non-zero digit. As the unit digit must be `0`, this means there are `9` choices for ~ because every non-zero digit yields an even number.  

Three-digit integers: For three-digit integers, we have two sub-cases as the digit `0` can appear as the units digit or the tens digit. The two sub-cases are ~#0 and ~0#, where ~ and # are non-zero digits.  
 
For the first subcase, as the last digit is `0` then the number will be even no matter the choice of ~ and #. We have `9 × 9 = 81` choices for the values of ~ and #.  

For the second subcase, the last digit must be even but cannot be `0`. We have `9 × 4 = 36` choices for the values of ~ and #.  

This means in total we have 81+36=117 positive integers which satisfy the conditions.  
:::


## 5.
::: problem id=5_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
How many positive integers less than `1000` are divisible by `9` and contain at least one digit `9`?  

<input type="number" solution="31"/> 

^^^ hint id=5_1_1 marks=1
You will need to think about the divisibility test for `9` and what the possible digit sums could be.
^^^

---

For a number to be divisible by `9` it must have a digit sum which is divisible by `9`.  

As the positive integers we are interested in are at most `999`, the only possibilities for the digit sum are `9`, `18` or `27`.  

For single digit integers the only possibility is `9`.  

For two-digit integers the only possibilities are `90` and `99`.  
 
For three-digit integers we will need to consider each digit sum in turn.  

Digit Sum of `9`: The only possibility is `900`.  

Digit Sum of `18`: If we have two digit `9` then the only possibilities are `990` and `909`.  

If we have exactly one digit `9` then the other two digits must sum to `9`, and so must be one of the pairs `(1,8),(2,7),(3,6)` or `(4,5)`.  

This means we have four sets of three digits, and each of these sets can be arranged in `3 × 2 × 1 = 6` different ways.  

This means there are `4 × 6 = 24` positive integers with exactly one digit `9` and a digit sum of `18`.

Digit Sum of `27`: The only possibility is `999`.  

In total, we have `1 + 2 + 1 + 2 + 24 + 1 = 31` positive integers less than `1000` are divisible by `9` and contain at least one digit `9`.
:::