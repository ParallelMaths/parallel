# Euclid Module 4 Week 2 Homework


## 1.
::: problem id=1_1 marks=1
How many multiples of 15 are there between 1000 and 9000 inclusive?   

* [ ] 535
* [x] 534
* [ ] 533
* [ ] 532
* [ ] 531
{.col-5}

---

Writing them as a list we have 1005, 1020, 1035,…, 9960, 9975, 9000.  

This means that after the first number in the list, there must be (9000−1005)/15=533 numbers in the list.  

If we include the first number in the list, we must have 534 numbers in the list and so there are 534 multiples of 15 between 1000 and 9000 inclusive.  
:::


## 2.
::: problem id=2_1 marks=1 
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
::: problem id=3_1 marks=1
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
::: problem id=4_1 marks=1
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