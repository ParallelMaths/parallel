# Parallel Academy Module 4 Week 5 Homework

These homework problems relate to a recent theme you have been covering with your tutor. They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous tutorial sessions (which you can access on your Academy page).  

Every question is worth 2 marks. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.   

Take your time, ensuring that you haven't overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

We will also be running a weekly drop-in homework help tutorial (look out for our emails).  


## 1.
::: problem id=1_1_1 marks=2
__1.1.__ How many _three-digit_ numbers consist of only _odd_ digits?  

<input type="number" solution="125"/>  

---

`5 xx 5 xx 5 = 125`  
:::


::: problem id=1_2_1 marks=2  
__1.2.__ How many _three-digit_ numbers consist of only _odd_ digits, each of which are _distinct_ (different)?  

`135` is such a three-digit number.  
 
<input type="number" solution="60"/>

---

For the first digit there are `5` choices (1, 3, 5, 7, 9), for the second digit there are `4` choices and for the third digit there are `3` choices.  

This means there are `5 xx 4 xx 3 = 60` such three-digit numbers.  
:::


::: problem id=1_3_1 marks=2
__1.3.__ How many _three-digit_ numbers have all three digits _distinct_ (different), do not contain a zero digit and are _odd_?  

`123` is such a three-digit number.  
 
<input type="number" solution="280"/>  

^^^ hint id=1_3_1 marks=1
It is easier to think about forming the number in reverse.  
^^^

---

It is easiest to think about constructing the number starting with the units digit because that has the extra constraint that it must be odd (for the three-digit number to be odd).  

For the third digit there are `5` choices (the odd digits), for the second digit there are `8` choices (any non-zero digit but the one already chosen) and for the third digit there are `7` choices (any digit but the two already chosen).  

This means there are `5 xx 8 xx 7 = 280` such three-digit numbers.  
:::


## 2.
::: problem id=2_1 marks=2
A bag contains 3 white balls, 5 red balls and 7 green balls.  
 
A selection of balls is made.  
 
Of all the selections of balls that could be made, how many contain an odd number of red balls?  

<input type="number" solution="96"/> 

^^^ hint id=2_1_1 marks=1
Focus on how many of each colour could be chosen.  
 
For example, for white we could choose 0, 1, 2, or 3 balls giving four choices.  

How many choices are there for the other colours?  
 
What is the relevant product?  
^^^

---

There are three choices for the number of reds that could be selected (1, 3 or 5), four choices for the number of whites (0 to 3) and eight choices for the number of greens (0 to 7).  

This means there are `3 xx 4 xx 8 = 96` different selections.  

(There is no need to subtract one because we always have at least one red ball.)
:::


## 3.
::: problem id=3_1_1 marks=2
__3.1.__ A maths club wants to assign three positions to three _different_ attendees.  

At this club, 5 students are female and 3 are male.  

These positions are Arbiter of Algebra, Chief of Calculations and General of Geometry.  

If there are no restrictions on who can take on which role, in how many different ways can the roles be assigned?  

<input type="number" solution="336"/> 

^^^ hint id=3_1_1 marks=1
The order here is important because each student chosen could take on any of the three roles.  
^^^

---

There are `8` choices for who could be Arbiter of Algebra, then `7` choices for who could be Chief of Calculations and finally `6` choices for who could be General of Geometry.  

This means there are `8 xx 7 xx 6 = 336` different ways to assign the roles.  
:::


::: problem id=3_2_1 marks=2
__3.2.__ A maths club wants to choose three of its students to participate in a mathematical team competition.  
 
At this club, `5` students are female and `3` are male.  

If there are no restrictions on who can be part of the team, how many different triples of students can be chosen to compete in the mathematical relay?  

<input type="number" solution="56"/> 

^^^ hint id=3_2_1 marks=1
Call the three chosen students A, B and C.  

They could be selected as ABC or CBA or in a few other orders.  

How many different orders are possible?  

How could you use the answer to the previous problem here?  
^^^

---

There are `8` choices for the first student, `7` choices for the second student and `6` choices for the final student.  

We may think that there are `8 xx 7 xx 6 = 336` different triples of students.  

In fact, there are `(8 xx 7 xx 6)/6 = 56` different triples because the previous calculation would count each triple six times.  

This is because if we label the chosen students A, B and C, we could have chosen them in several different orders.  
 
There are six possible orders: ABC, ACB, BAC, BCA, CAB and CBA (there are `3 xx 2 xx 1 = 6` different orders).
:::


## 4.
::: problem id=4_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
How many three-digit numbers use _exactly_ two different digits (for example `100` or `266`)?

<input type="number" solution="243"/> 

^^^ hint id=4_1_1 marks=1
Think about what happens if 0 is the repeated digit.  

If the repeated digit is non-zero, where can it be repeated?  

Watch out for accidently counting numbers starting with a `0`.  
^^^

---

There are nine integers with two zeroes, i.e. `100`, `200`, ..., `800` and `900`.  

When the repeated digit is non-zero, the integers have the form `'xxy'`, `'xyx'` or `'yxx'`.  

If `x = 1`, `y` can be `0`, `2`, `3`, `4`, `5`, `6`, `7`, `8` or `9`, although we must ignore `011` as this is a two-digit number (the string 011 represents the two-digit number `011`).  

This gives `26` different integers.  

Similarly, there will be an additional `26` integers for every non-zero value of `x`. Therefore, the total number of three-digit integers that have exactly two different digits is `9 + 9 xx 26 = 243`.  
:::