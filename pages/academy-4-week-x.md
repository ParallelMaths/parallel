# Parallel Academy Module 4 Week 2 Homework

These homework problems relate to a recent theme you have been covering with your tutor.   

They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous tutorial sessions (which you can access on your Academy page).  

Every question is worth 2 marks. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.  

Take your time, ensuring that you haven’t overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

We will also be running a weekly drop-in homework help tutorial (look out for our emails).  


## 1.
::: problem id=1_1 marks=2
How many multiples of 15 are there between 1000 and 9000 inclusive?   

* [ ] 535
* [x] 534
* [ ] 533
* [ ] 532
* [ ] 531
{.col-5}

---

Writing them as a list we have 1005, 1020, 1035,…, 9960, 9975, 9000.  

This means that after the first number in the list, there must be `(9000−1005)/15 = 533` numbers in the list.  

If we include the first number in the list, we must have 534 numbers in the list and so there are 534 multiples of 15 between 1000 and 9000 inclusive.  
:::


## 2.
::: problem id=2_1 marks=2
How many numbers are in the list `5 1/5`, `6 2/5`, `7 3/5`, …, 124?   

* [ ] 98
* [ ] 99
* [x] 100
* [ ] 101
* [ ] 102
{.col-5}

---

The list can be rewritten as `26/5`, `32/5`, `38/5`, ..., `620/5`.   

We can now concentrate on the numerators only, which are increasing by 6 each time.  

The list 26, 32, 38, ... , 620 has `(620−26)/6 + 1 = 100` numbers in it.  

This means there are 100 numbers in our list.  
:::


## 3.
::: problem id=3_1 marks=2
Alice writes down a list of 245 consecutive positive integers.  

For her list she calculates how many of the numbers are multiples of 8.  

What are the only possibilities for the answer she could have got?     

* [ ] 30
* [ ] 31
* [ ] 29 or 30
* [x] 30 or 31
* [ ] 29 or 30 or 31

---

`245 = 30 × 8 + 5` and so the list of numbers can be broken down into thirty smaller lists of eight consecutive numbers and a final list consisting of the last five numbers.  

Each smaller list of eight consecutive numbers will have one multiple of 8 and the final list can have one or none.  

This means the only possibilities for the number of multiples of 8 are 30 or 31.  
:::


## 4.
::: problem id=4_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
How many numbers are from 1000 to 10000 (inclusive) are not multiples of 2 or 3?    

* [ ] 1499
* [ ] 1500
* [ ] 2999
* [x] 3000
* [ ] 3001
{.col-5}

---

Let us ignore the first number (as it is a multiple of 2) and instead consider the list 1001, 1002, 1003, ... , 10000.  

This can be split up into 1500 non-overlapping lists of six consecutive numbers, the first of which would be 1001, 1003, ... , 1007.

In this first smaller list, there are only two numbers which are not multiples of 2 or 3. This will also be true for all the other lists of six consecutive numbers too.  

This is because if we add six to any number in one list it will yield a number in the next list, and we would not have changed whether it is a multiple of 2 or 3 (think carefully about this step).  

This means that in our adjusted list `2/6 × (10000 − 1001 + 1) = 3000` numbers are not multiples of 2 or 3 and because the number we ignored, 1000, is even then our final answer is 3000.
:::





^^^ hint id=5_1_1 marks=1
For this problem, it will be helpful to remember the divisibility tests for 3 and 5.  

We could write down a list which contains all the multiples of 15 in the given interval.  

There are too many to do this quickly and so instead just write down the first three and the last three.   

You can then count how many numbers should be in the full list using a method discussed during tutorials.  
^^^

^^^ hint id=6_1_1 marks=1
Try this problem with smaller numbers, for example replace ‘245’ with 10 and ‘8’ with 3.  

Next, try a selection of sets of 10 consecutive positive integers and calculate how many multiples of 3 there are.  

Try and apply what you find out to the original problem.  

You may find the following numerical fact useful 245 = 30 × 8 + 5.
^^^