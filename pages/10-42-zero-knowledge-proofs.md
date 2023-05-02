# Zero-knowledge proofs

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

*	Tackle each Parallelogram in one go. Don’t get distracted.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.
*	Your score & answer sheet will appear immediately after you hit SUBMIT.
*	Don’t worry if you score less than 50%, because it means you will learn something new when you __check the solutions__.


## 1. Intermediate Maths Challenge Problem (UKMT)
<!--- 2020 (5) --->

::: problem id=1_1 marks=2
__1.1__ Four of the following coordinate pairs are the corners of a square.  

Which is the odd one out?  

* [ ] (4,1)
* [ ] (2,4)
* [ ] (5,6)
* [x] (3,5)
* [ ] (7,3)
{.col-5}

---

![](/resources/10-42-zero-knowledge-proofs/1-diamond-sketch.jpg){image align="right"}
The quickest and easiest way to answer this question is to draw a sketch.  

Even a rough sketch, drawn freehand, will be good enough to spot the odd point out, as shown here.  

From the sketch it is clear that the points with coordinates (4, 1), (2, 4), (5, 6) and (7, 3) are the vertices of the square.  

Hence (3, 5) is the odd one out.  
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- 2020 (8) --->

::: problem id=2_1 marks=2
__2.1__ One of these options gives the value of `17^2 + 19^2 + 23^2 + 29^2`.  

Which is it?  

* [ ] 2004
* [ ] 2008
* [ ] 2012
* [ ] 2016
* [x] 2020
{.col-5}

^^^ hint id=2_1_1 marks=1
There’s no need to compute the precise values.  

Instead, just consider the final digit of each of the four square numbers.  
^^^

---

Because `7^2 = 49`, the last digit of `17^2` is 9.  

Similarly the last digits of `19^2`, `23^2` and `29^2` are 1, 9 and 1, respectively.  

It follows that the last digit of `17^2 + 19^2 + 23^2 + 29^2` is the same as the last digit of `9 + 1 + 9 + 1`.  

Now `9 + 1 + 1 + 9 = 20`.  

We can therefore conclude that the last digit of `17^2 + 19^2 + 23^2 + 29^2` is 0.  

Hence, given that one of the options is correct, we can deduce that `17^2 + 19^2 + 23^2 + 29^2 = 2020`.  

Note: We see from this question that 2020 is the sum of the squares of four consecutive prime numbers.  

Integers of this form are naturally quite rare.  

However it was proved in 1770 by Joseph-Louis Lagrange that every positive integer is the sum of at most four squares of positive integers.  

The proof of this theorem is not easy.
:::

<!--- 2020 (8.4) --->
::: problem id=2_2 marks=3
__2.2__ Which is the smallest positive integer, greater than 2020, that is the sum of the squares of four consecutive primes?  

<input solution="2692"/>

---

2,692, which is `19^2 + 23^2 + 29^2 + 31^2`.
:::


## 3. Zero-knowledge proofs

Let’s suppose I want to prove to you that I know something, but I want to do so in a way that doesn’t give you any information whatsoever about the thing I am trying to prove. Seems impossible, right?  

A zero-knowledge proof helps us to do exactly that!  

In this video, Up and Atom’s Jade Tan-Holmes takes on the role of the ‘prover’ and demonstrates how she can convince you, the ‘verifier’, that she knows the colours of two candies... without telling you what the colours are!  

@[youtube](V5uVKZn3F_4?end=470&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=3_1 marks=2
__3.1__ Jade correctly guesses whether or not you switch 5 times in a row.  

If she was guessing at random, what would be the probability of her getting all 5 correct?  

* [ ] `0`
* [ ] `1/10`
* [ ] `1/5`
* [x] `1/32`
* [ ] `1/2`
{.col-5} 

^^^ hint id=3_1_1 marks=1
There are 5 independent events and the probability of a correct guess is `1/2` each time.
^^^
:::

::: problem id=3_2 marks=3
__3.2__ As the verifier, you need a lot of convincing - you will only believe Jade if she guesses enough switches/non-switches in a row for it to be a less than 1 in a thousand chance outcome.  

How many correct guesses does she need to make?  

* [x] 10
* [ ] 50
* [ ] 100
* [ ] 500
* [ ] 1000
{.col-5} 

^^^ hint id=3_2_1 marks=1
The probability of Jade making _N_ correct guesses in a row is `1/2^N`, so you need the smallest integer _N_ for which this value is less than `1/1000`.
^^^
:::

::: problem id=3_3 marks=2
__3.3__ One of the requirements for a zero-knowledge proof is that the claim being proved is actually true.  

What is this requirement called?  

* [ ] Truthiness
* [x] Soundness
* [ ] Honesty
* [ ] Completeness
{.col-4} 
:::

::: problem id=3_4 marks=2
__3.4__ How does zero-knowledge proof help with cryptocurrency?

* [ ] It makes all transitions on the blockchain public  
* [x] It verifies transactions on the blockchain without making them public  
* [ ] It shows you how to mint bitcoin  
* [ ] It doesn’t: zero-knowledge proofs are useless in the real world  

:::


## 4. Intermediate Maths Challenge Problem (UKMT)
<!--- 2020 (16) --->

::: problem id=4_1 marks=3
__4.1__ As a decimal, what is the value of `1/9 + 1/11`?

* [ ] 0.10
* [ ] 0.20
* [ ] 0.2020
* [x] 0.202020
* [ ] 0.20202020202020...

^^^ hint id=4_1_1 marks=1
The sum is `20/99`.
^^^

---

We have `1/9 + 1/11` = 0.111,111... + 0.090,090... = 0.202,020... = 0.20202020202020...
:::

<!--- 2020 (18) --->
::: problem id=4_2 marks=3
![](/resources/10-42-zero-knowledge-proofs/4-triangle.jpg){image align="right"}
__4.2__ The diagram shows an isosceles right-angled triangle which has a hypotenuse of length y.  

The interior of the triangle is split up into identical squares and congruent isosceles right-angled triangles.  

What is the total shaded area inside the triangle?

* [ ] `y^2/2`
* [ ] `y^2/4`
* [x] `y^2/8`
* [ ] `y^2/16`
* [ ] `y^2/32`
{.col-5} 

---

![](/resources/10-42-zero-knowledge-proofs/4-triangle-solution.jpg){image align="right"}
Let the two equal sides of the large right-angled triangle have length `x`.  

By Pythagoras’ Theorem, applied to this triangle, we have `x^2 + x^2 = y^2`.  

Therefore `x^2 = y^2/2`.  

It follows that the area of the large right-angled triangle is given by:  

`1/2` (base × height) `= 1/2 (x × x) = x^2/2 = y^2/4`.  

The shaded area is made up of four of the small squares.  

The unshaded area is made up of two of the small squares and four half squares, which is the same as the area of four of the small squares.  

Hence the shaded area is equal to the unshaded area.  

Therefore the shaded area is half the area of the large right-angled triangle.  

It follows that the shaded area is given by:  

`1/2 × y^2/4 = y^2/8`.
:::


Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	The next Parallelogram is next week, at 3pm on Thursday.
*	Finally, if you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelograms.

Cheerio,
Simon.