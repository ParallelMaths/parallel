# Colliding vortexes

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

These challenges are a random walk through the mysteries of mathematics, most of which will be nothing to do with what you are doing at the moment in your classroom. Be prepared to encounter all sorts of weird ideas, including a few questions that appear to have nothing to do with mathematics at all.

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.  


## 1. Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q9 --->

::: problem id=1_1 marks=4
__1.1__ Which of the following is the best estimate for the number of seconds in a year?

* [ ] `3 × 10^4`
* [ ] `3 × 10^5`
* [ ] `3 × 10^6`
* [x] `3 × 10^7`
* [ ] `3 × 10^8`
{.col-5}

^^^ hint id=1_1 marks=2
There are 60 × 60 × 24 × 365 seconds in a non-leap year. This is roughly equal to 60 × 60 × 20 × 400.
^^^

---

There are 60 × 60 × 24 × 365 seconds in a non-leap year.  

This is roughly equal to `60 × 60 × 20 × 400`.  

`60 × 60 × 20 × 400 = 6 × 6 × 2 × 4 × 10^5 = 288 × 10^5 = 2.88 × 10^7`.

So `3 × 10^7` is the best estimate.
:::


## 2.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q13 --->

::: problem id=2_1 marks=4
![](/resources/11-07-colliding-vortexes/4-diagram.jpg){image align="right"}
__2.1__ The diagram on the right shows that `1 + 3 + 5 + 7 + 5 + 3 + 1 = 3^2 + 4^2`.  

What is `1 + 3 + 5 + `...` + 1999 + 2001 + 1999 + `...` + 5 + 3 + 1`?

* [ ] `999^2 + 1000^2`
* [x] `1000^2 + 1001^2`
* [ ] `1999^2 + 2000^2`
* [ ] `2000^2 + 2001^2`
* [ ] none of these
{.col-5}

^^^ hint id=2_1 marks=2
The general form of the example given is `1 + 3 + 5 + `...` + (2n – 1) + `...` + 5 + 3 + 1 = (n – 1)^2 + n^2`.
^^^

^^^ hint id=2_2 marks=2
The largest number in the sum in question is 2001, so we have `2n – 1 = 2001`, so `n = 1001`.
^^^

---

The general form of the example given is `1 + 3 + 5 + `...` + (2n – 1) + `...` + 5 + 3 + 1 = (n – 1)^2 + n^2`.  

The largest number in the sum in question is 2001, so we have `2n – 1 = 2001`, so `n = 1001`, which gives `1 + 3 + 5 +` ... `+ 1999 + 2001 + 1999 +` ... `+ 5 + 3 + 1 = 1000^2 + 1001^2`.

If the general form was not obvious to you, you could have tried a `2 × 2` square or a `6 × 6` square to get some extra clues.
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q24 --->

::: problem id=3_1 marks=5
![](/resources/11-07-colliding-vortexes/6-magic-square.jpg){image align="right"}
__3.1__ A 4 by 4 'antimagic square' is an arrangement of the numbers 1 to 16 inclusive in a square, so that the totals of each of the four rows and four columns and two main diagonals are ten consecutive numbers in some order.  

The diagram shows an incomplete antimagic square.  

When it is completed, what number will replace the asterisk?

* [ ] 1
* [ ] 2
* [ ] 8
* [x] 15
* [ ] 16
{.col-5}

^^^ hint id=3_1 marks=1
The totals of the top row and the completed main diagonal are 30 and 39 respectively and therefore the ten consecutive numbers in question are 30 to 39.
^^^

^^^ hint id=3_2 marks=1
The number in the bottom right-hand corner must be one of 1, 2, 8, 15 or 16. Taking 1 or 2 makes the diagonal (from top left to bottom right) add up to less than 30.
^^^

^^^ hint id=3_3 marks=1
Making the number in the bottom right-hand corner 15 or 16 makes the diagonal (from top left to bottom right) add up to greater than 39. Hence, 8 must go in the bottom right-hand corner.
^^^

^^^ hint id=3_4 marks=1
If 15 is placed in the vacant square in the second column, we get a total of 45 for that column, which is too big. Try putting the 15 in another vacant square.
^^^

---

The totals of the top row and the completed main diagonal are 30 and 39 respectively, and therefore the ten consecutive numbers in question must be those from 30 to 39 inclusive.  

The number in the bottom right-hand corner must be one of 1, 2, 8, 15 or 16. Taking 1 or 2 makes the diagonal (from top left to bottom right) add up to less than 30, while taking 15 or 16 produces a total greater than 39. Hence 8 must go in the bottom right-hand corner.  

It now follows that * must be replaced by 15, since if 15 is placed in one of the other three vacant squares, we get a total of 45 (second column, too big), 34 (third column, same as diagonal) or 47 (third row, too big).
:::


## 4.	1089 and all that

Here’s a trick you can use to impress your friends, as demonstrated by Aisling Bea on BBC’s QI.

@[youtube](FN8cwiDKrkI?rel=0&start=36&end=212) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=4_1 marks=1
__4.1__ Follow the same procedure in the video, starting with the number 462. What is your answer?

<input solution="1089"/>
:::

::: problem id=4_2 marks=2
__4.2__ Follow the same procedure in the video, starting with the number 464. The trick will not work because the number is a palindrome (i.e., the same backwards). What is your answer when you start with 464?

<input solution="000"/>
:::

Once you have convinced yourself when it will and will not work, you may want to try to prove that it works algebraically. Watch this video of James Grime explaining why it works, and make sure you pause and check his algebra at each stage.

@[youtube](ee0xnIywEqk?rel=0) _(If you have problems watching the video, right click to open it in a new window)_


There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
