# A Cat’s Tale

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

These challenges are a random walk through the mysteries of mathematics, most of which will be nothing to do with what you are doing at the moment in your classroom. Be prepared to encounter all sorts of weird ideas, including a few questions that appear to have nothing to do with mathematics at all.

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by Sunday night if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.


## 1.	Multiplication tricks

Watch this video, in which Countdown’s Rachel Riley offers a tip for multiplying a two digit number by 11.

@[youtube](z56uNCwJbK4?start=6&end=55&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

Traditional ways of multiplying two-digit numbers require you to multiply every digit in one number by every digit in the other, whilst preserving place value. E.g. for 54 × 11, we calculate 50 × 1, 50 × 10, 4 × 1 and 4 × 10, and add up our answers.

::: problem id=1_1 marks=1
__1.1__ In the video, Rachel started by writing down a 5 in the hundreds column, and a 4 in the units column.  

Which multiplications had she done so far?

* [x] 50 × 10 and 4 × 1
* [ ] 5 × 10 and 4 × 10
* [ ] 5 × 10 and 4 × 1
* [ ] 5 × 100 and 40 × 1
:::

::: problem id=1_2 marks=1
__1.2__ Next she added together the two digits and put them in the 10s column.  

What multiplications is this equivalent to?

* [ ] 5 × 1 and 4 × 1
* [ ] 1 × 10 and 10 × 1
* [x] 50 × 1 and 4 × 10
* [ ] 50 × 10 and 40 × 10
:::

::: problem id=1_3 marks=3
__1.3__	Tom said “I multiplied a two-digit number by eleven. In my answer, the tens digit is 5.”  

Which of the following is true?

* [ ] The two digits of Tom’s original number definitely sum to 5.
* [x] The two digits of Tom’s original number might sum to 5.
* [ ] The two digits of Tom’s original number don’t sum to 5.

---

The two digits of Tom’s original number might sum to 5, but the two digits could also have added up to 15 instead, and caused a carry into the hundreds column. E.g. 69 × 11 = 759.
:::

Here’s another of Rachel Riley’s multiplication tricks. This time for squaring a two-digit number ending in 5.

@[youtube](z56uNCwJbK4?start=67&end=90&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=1_4 marks=1
__1.4__	Try out Rachel’s second trick with the number 65, and compare it to a traditional method for multiplying two-digit numbers. Hopefully you get the same answer for both.  

What answer did you get?

<input solution="715"/>
:::

::: problem id=1_5 marks=3
__1.5__  Let’s try to convince ourselves using algebra. A two-digit number ending in 5 (i.e. `x5`) can be written as `10x + 5`, where `x` is a single digit number.  

By expanding and then factorising everything apart from the 25, write the square of this number, `(10x + 5)^2` in the form:

`100x^2 (ax) + 25`  

What is your value for `a`?


<input solution="1"/>

---

Expanding, we have `(10x + 5)^2 = 100x^2 + 100x + 25`.  

Factorising `100x^2 + 100x`, we have `100x(x + 1)`.  

So, `(10x + 5)^2 = 100x(x + 1) + 25` and thus `a = 1`.  

This means we have `x` multiplied by `x + 1`, then multiplied by 100. This is why Rachel added one to the first digit, and multiplied. Multiplying by 100 is equivalent to putting the answer to this in the hundreds column.  

Adding 25 completes Rachel’s method where she finishes by writing 25 on the end of her number.
:::


## 2.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q1 --->

::: problem id=2_1 marks=3
__2.1.__ Between which of the following pairs of numbers is there the greatest difference?

* [x] -3, 8
* [ ] -5, -13
* [ ] 1, 11
* [ ] 4, -5
* [ ] -6, -15
{.col-5}

---

The differences are, respectively, 11, 8, 10, 9 and 9.
:::


## 3.	A dubious theorem

Did you know that a cat has nine tails? I can prove it to you!  

__No cat has eight tails.__  
__A cat has one more tail than no cat.__  
__Therefore a cat has nine tails!__

::: problem id=3_1 marks=2
__3.1__ Which statement summarises the flaw in this logic? (More to come in the solution)

* [ ] Some cats DO have eight tails (the first line is false).
* [ ] A cat does NOT have one more tail than no cat (the second line is false).
* [x] “No cat” has two different meanings.

---

The first two lines are correct assumptions, but they use different meanings of the term ‘no cat’.  

Using the sense of ‘no cat’ from the first line I could say “I have eight cats in a room. All eight cats have one tail, and none of the cats have eight tails”.  

But the second use of the term is referring to a specific number of cats, zero.  

Using this sense we could say “I have eight cats in a room. All eight cats (together) have eight tails, six cats have six tails… one cat has one tail, and zero (no) cats has zero tails.”  

So it is true to say “No cat has eight tails”, but it is also true to say “No (zero) cat has no (zero) tail.”
:::


## 4.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q11 --->

::: problem id=4_1 marks=4
![](/resources/11-09-a-cats-tale/4-card.jpg){image align="right"}
__4.1__ A square card printed with the letter __N__ is held horizontally, as shown in the diagram, where the arrow indicates the direction of North.  

The card is turned over by rotating it through 180° about an axis running from East to West, and then turned over by rotating it through 180° about an axis running from North-East to South-West.  

How does the diagram on the card now look to a person facing North?

![](/resources/11-09-a-cats-tale/4-card-options.jpg){image align="center"}

* [ ] A
* [x] B
* [ ] C
* [ ] D
* [ ] E
{.col-5}

---
Imagine that the card is transparent. Then, after the first rotation the shape on the card will look like shape __C__. The diagonal line now runs North-East to South-West, and so it will appear the same after the second rotation.  

The line which runs North-South on the left of the figure will run East-West at the bottom of the figure after this second rotation, while the line which runs North-South on the right of the figure will run East-West at the top of the figure.  

Thus the final appearance will be shape __B__.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2001) Q23 --->

::: problem id=5_1 marks=5
__5.1__ For how many values of `n` are both `n` and `(n + 3)(n - 1)` integers?

* [ ] 7
* [x] 6
* [ ] 4
* [ ] 3
* [ ] 0
{.col-5}

^^^ hint id=5_1 marks=2
`(n + 3)/(n - 1)` is a positive integer when `n + 3` is a multiple of `n - 1`. Since these numbers have a difference of 4, `n + 3` is a multiple of `n - 1` if and only if `n - 1` is a factor of 4.
^^^

^^^ hint id=5_2 marks=1
Consider also that `(n + 3)/(n - 1)` can be a negative integer. `n + 3` would have to be positive and `n - 1` negative.
^^^

---

`(n + 3)/(n - 1)` is a positive integer when `n + 3` is a multiple of `n - 1`. Since these numbers have a difference of 4, `n + 3` is a multiple of `n - 1` if and only if `n - 1` is a factor of 4.

4 has three factors, 1, 2 and 4. So we have three values for `n`, namely 2, 3 and 5.  

Consider also that `(n + 3)/(n - 1)` can be a negative integer. `n + 3` would have to be positive and `n - 1` negative.

There are only four pairs of numbers which differ by four and have different signs: (-1, 3), (-2, 2), (-3, 1) and (-4, 0).  

Of these, only (-2, 2) and (-4, 0) make `(n+3)/(n-1)` and integer.  

This gives us two more values for `n`, namely -1 and -3.  

0/0 is undefined, so (-3, 1) does not work.

In total there are 6 possible values for `n`.
:::


I hope you enjoyed this Parallelogram. There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
