# Parallel Academy Module 4 Week 8 Assignment

These problems relate to a recent theme you have been covering with your tutor. They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous tutorial sessions (which you can access on your Academy page).  

Every question is worth 2 marks. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.   

Take your time, ensuring that you haven't overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

**For questions where you need to type in the answer, unless otherwise specified you may assume the answer is a whole number, and you should only enter the number itself.**  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

We will also be running a weekly homework review session (look out for our emails).  


## 1.
::: problem id=1_1 marks=2
How many different routes are there from A to E (diagram below), if you must follow the arrows on each path?  

![](/resources/academy-4-week-8/1-paths.png){image align="centre"}  

<input type="number" solution="16"/>  

---
Firstly, we note that there is 1 path leading directly from A to E. 
 
The other cases here would be routes passing through B, C or D as you must pass through one of them but cannot pass through two or more of them.  

Routes passing through B: There are 2 choices of path leading from A to B and then `2` choices of path leading to E.  

This means we have `2 × 2 = 4` different routes from A to E, which pass through B.  

Routes passing through C: There are `3` choices of path leading from A to C and then `1` choice of path leading to E.  

This means we have `3 × 1 = 3` different routes from A to E, which pass through C.  

Routes passing through D: There are `2` choices of path leading from A to D and then `4` choices of path leading to E.  

This means we have `2 × 4 = 8` different routes from A to E, which pass through C.  

In total, we have `1 + 4 + 3 + 8 = 16` possible routes from A to E.
:::


## 2.
::: problem id=2_1 marks=2
How many positive integers less than `1000` contain exactly one digit `9`?  

<input type="number" solution="243"/>

^^^ hint id=2_1_1 marks=1
The cases to consider could be where the digit `9` appears (giving three cases).  

It will be helpful to denote positive integers below `1000` with leading zeroes where necessary, so that, for example, `9` and `90` appear as 009 and 090.
^^^

---
Here the cases should be where the digit `9` occurs. The only possibilities are as the units, tens, or hundreds digit because the positive integer is less than 1000.  

For convenience, we will consider one-digit numbers to have two leading zeroes and two-digit numbers to have one leading zero.  

For example, `9` and `90` would be denoted 009 and 090.  

This will allow us consider every possibility as being made up of three digits from `0` to `9` inclusive.  

The cases are 9∗#,  ∗9# and ∗#9 where ∗ and # denote digits which are not `9` (they may be equal to one another).  

Each of these cases is symmetrical, meaning that the calculation turns out to be the same in all cases, giving the same number of possibilities.  

In each case, there are `9` possibilities for assigning each of  ∗ and # and so we have `9 × 9 = 81` possibilities.  

This means there are `3 × 81 = 243` positive integers less than `1000` which contain exactly one digit `9`.  
:::


## 3.
::: problem id=3_1_1 marks=2
How many squares, of any size and with sides that are horizontal and vertical (no diagonals), can be formed by connecting four dots in the grid shown in the figure below?  

![](/resources/academy-4-week-8/3-squares.png){image align="centre"} 

<input type="number" solution="30"/>  

^^^ hint id=3_1_1 marks=1
The different cases to consider could be the possible sizes of such squares.
^^^

---
We will consider the different possible sizes of square from largest to smallest.

1 by 1 squares: We can see that the pictured 1 by 1 square can be shifted along a row into one of four positions and down a column into one of four positions.  

This means there are `4 × 4 = 16` different positions for the pictured square.  

![](/resources/academy-4-week-8/3-squaresSmall.png){image align="centre"}  
 
2 by 2 squares: Similar reasoning can be applied to the pictured 2 by 2 square. There are `3 × 3 = 9` of these.  

![](/resources/academy-4-week-8/3-squaresMedium.png){image align="centre"}  

3 by 3 squares: Similar reasoning can be applied to the pictured 3 by 3 square. There are `2 × 2 = 4` of these.  

![](/resources/academy-4-week-8/3-squaresBig.png){image align="centre"}  

4 by 4 squares: There is clearly only one of these!  

In total, we have `16 + 9 + 4 + 1 = 30` (the sum of the first four squares...) different squares. 
:::


## 4.
::: problem id=4_1 marks=2
Ali lists the positive integers, in order, excluding all multiples of `5`. Her resulting list is:  

`1`, `2`, `3`, `4`, `6`, `7`, `8`, `9`, `11`, `12`, `13`, `14`, `16`, `17`, ...  

In what position does `2023` appear in Ali’s list?  

<input type="number" solution="1619"/> 

^^^ hint id=4_1_1 marks=1
First consider how many multiples of `5` there are in the list of `1` to `2020` (inclusive).
^^^

---
Note that `2023` is three more than `2020`, which is a multiple of `5`.  

We can instead list the integers `1` to `2020` (inclusive).  
 
As `2020` is the `404`th multiple of `5`, since `2020/5 = 404`, the integers from `1` to `2020` contain `404` groups of five consecutive (non-overlapping) integers.  
 
In Ali’s list of integers, she leaves out the integers that are multiples of `5`. This means in every group of five consecutive integers, Ali lists four of these integers.  
 
If `2023` appears in the `n`th position in Ali’s list, then `n = 404 × 4 + 3 = 1619`.
:::


## 5.
::: problem id=5_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
How many triples of positive integers (`x`, `y`, `z`) satisfy the equation `x + y^2 + z^3 = 30`?  

[Remember that `(1,2,3)` means something different to `(3,2,1)`.]  

<input type="number" solution="10"/> 

^^^ hint id=5_1_1 marks=1
As cubes grow quickly, first consider the possible values for `z` and then consider the possible values for `y` as subcases of these.
^^^

---
As cubes grow quickly, it makes sense to begin by focusing on `z`. As `x`, `y` and `z` are positive integers, this means that `z^3 < 30` and the only cases we need to consider are `z = 1,2` or `3`.  

We will consider each possible value for `z` separately.  

`z = 1` :  `x + y^2 + 1^3 = 30` means that `x + y^2 = 29`. This tells us that `y^2 < 29` and so `y < 6`. Each possible positive integer value of `y` yields a possible value for `x` and so in this case we have `5` possible solutions to the equation.  

`z = 2` :  `x + y^2 + 2^3 = 30` means that `x + y^2 = 22`. This tells us that `y^2 < 22` and so `y < 5`. Each possible positive integer value of `y` yields a possible value for `x` and so in this case we have `4` possible solutions to the equation.  

`z = 3` :  `x + y^2 + 3^3 = 30` means that `x + y^2 = 3`. This tells us that `y^2 < 3` and so `y = 1`. This positive integer value of `y` yields a possible value for `x` and so in this case we have `1` possible solution to the equation.

In total, there are `5 + 4 + 1 = 10` possible solutions.  
:::