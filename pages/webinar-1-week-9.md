# Parallel Academy Module 1 Week 8 Assignment

These problems relate to a recent theme you have been covering during webinars. They are arranged in order of increasing difficulty and the final problem is much more of a challenge than the rest.  

The problems are designed to help you reflect on material from previous webinar sessions (which you can access on your Academy page).  

The number of marks each question or part is worth is shown. Some have an optional hint, which cost 1 mark, so only reveal the hint if you’ve given the problem some real thought.   

Take your time, ensuring that you haven't overlooked something or made a silly error, before submitting your answers. Please remember that completing homework is certainly not a race!  

You should only leave an answer blank if you have really thought about the problem and are still stuck (particularly with the final problem).  

**Before you click Submit at the end of the assignment, check that all of your answers have been entered correctly.** 
  
**After you click Submit, make sure you scroll down to see the correct answers and read the full written solutions.** 


## 1.
::: problem id=1_1 marks=2
How many (positive) _even_ numbers are there less than 1500?  

<input type="number" solution="749"/>  

---

Writing them as a list we have 2, 4, 6, ..., 1496, 1498.  

To get from 2 to 1498 we must add `1498 − 2 = 1496` and each number in the list differs from the previous by 2. This means that after the first number in the list, there must be `1496/2 = 748` numbers in the list.  

This means if we include the first number in the list, we must have 749 numbers in the list and so there are 749 even numbers less than 1500.  
:::


## 2.
::: problem id=2_1 marks=2  
How many _odd_ numbers are there from 949 to 1250 inclusive?       
 
<input type="number" solution="151"/>

---

Writing them as a list we have 949, 951, 953, ...,  1245, 1247, 1249.  

To get from 949 to 1249 we must add `1249 − 949 = 300` and each number in the list differs from the previous by 2. This means that after the first number in the list, there must be `300/2 = 150` numbers in the list.  

This means if we include the first number in the list, we must have 151 numbers in the list and so there are 151 odd numbers from 949 to 1250 inclusive.  
:::


## 3.
::: problem id=3_1 marks=2
How many numbers are in the list `5 1/5`, `6 2/5`, `7 3/5`, ..., 124?  

<input type="number" solution="100"/>  

^^^ hint id=3_1_1 marks=1
Rewrite the mixed numbers as improper fractions and consider only the numerators (as the denominators should all be the same).  
^^^

---

The list can be rewritten as `26/5`, `32/5`, `38/5`, ..., `620/5`  

We can now concentrate on the numerators only, which are increasing by 6 each time.  

The list 26, 32, 38, ..., 620 has `(620−26)/6 + 1 = 100` numbers in it.  

This means there are 100 numbers in our list.  
:::


## 4.
::: problem id=4_1 marks=2
The list 101, 103, 106, 108, 111, ..., 998 is formed by alternating between adding two to the previous number and adding three to the previous number.  

How many numbers are in the list?   
  
<input type="number" solution="360"/> 

^^^ hint id=4_1_1 marks=1
Think about what happens to the numbers in the odd places (first, third, fifth, etc) and the even places(second, fourth, sixth, etc) separately. You can then focus on two separate lists, that taken together give the list in the question.
^^^

---

It will be useful to think about our list as being made up of two other lists. We can look at the odd placed numbers and the even placed number separately.  

This gives us the following two lists 101, 106, 111, ..., 996 and 103, 108, 113, ..., 998.  

We can easily count how many numbers are in each of these lists.  

The first list has `(996 − 101)/5 + 1 = 180` numbers in it.  

The second list has `(998 − 103)/5 + 1 = 180` numbers in it.  

In total, the original list has `180 + 180 = 360` numbers in it.  
:::


## 5.
::: problem id=5_1 marks=2
![](/resources/academy-4-week-2/4-skull.png){image align="right"} 
How many numbers from 1000 to 10,000 (inclusive) are not multiples of 2 or 3?  

* [ ] 1499
* [ ] 1500
* [ ] 2999
* [x] 3000
* [ ] 3001
{.col-5}

^^^ hint id=5_1_1 marks=1
Write down six consecutive positive integers and work out how many of them are not multiples of 2 or 3.  

Do this again for another two sets of six consecutive positive integers.  

Coincidence? Can you explain what is happening? Can you apply the result to the original problem?  
^^^

---

Let us ignore the first number (as it is a multiple of 2) and instead consider the list 1001, 1002, 1003, ..., 10000.  

This can be split up into 1500 non-overlapping lists of six consecutive numbers, the first of which would be 1001, 1002, 1003, ..., 1006.  

In this first smaller list, there are only two numbers which are not multiples of 2 or 3. This will also be true for all the other lists of six consecutive numbers too.  

This is because if we add six to any number in one list it will yield a number in the next list, and we would not have changed whether it is a multiple of 2 or 3 (think carefully about this step).  

This means that in our adjusted list `2/6 × (10000 − 1001 + 1) = 3000` numbers are not multiples of 2 or 3 and because the number we ignored, 1000, is even then our final answer is 3000.  
:::  

**Before you click Submit at the end of the assignment, check that all of your answers have been entered correctly.** 
  
**After you click Submit, make sure you scroll down to see the correct answers and read the full written solutions.**  