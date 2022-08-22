# Chrismaths - Part 4

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

![](/resources/7-17-chrismaths/santa-simon.png){image align="right"}
It’s the end of Christmaths, so here is your last instalment of your Christmaths maths challenge paper!

Simon.

PS: I want to say thank you to the UK Mathematics Trust, who own the copyright to these questions.


## 1.

::: problem id=1_1 marks=3
![](/resources/7-17-chrismaths/4-pyramid.jpg){image align="right"}
In this partly completed pyramid, each rectangle is to be filled with the sum of the two numbers in the rectangles immediately below it.  

What number should replace `x`?

* [x] A) 3
* [ ] B) 4
* [ ] C) 5
* [ ] D) 7
* [ ] E) 12
{.col-5}

---

![](/resources/7-17-chrismaths/4-pyramid-answer.jpg){image align="right"}
We have used `p, q, r, s` and `t` for the numbers in certain of the rectangles as shown in the diagram.  

We now repeatedly use the fact that the number in each rectangle in the first four rows is the sum of the numbers in the rectangles immediately below it. This enables us to work out the values of `p, q, r, s` and `t`.

Applied to the top rectangle, this gives `105 = p + 47`. It follows that `p = 105 − 47 = 58`.

Then, as `p = 31 + q`, we have `58 = 31 + q`. Therefore `q = 27`. Next, from `47 = q + r`, we deduce that `47 = 27 + r`. This gives `r = 20`.

Next, from `r = 13 + s`, we have `20 = 13 + s`. Hence `s = 7`.

We also have `13 = 9 + t`. Therefore `t = 4`. Finally, `s = t + x`. Therefore `7 = 4 + x`.

We can now conclude that `x = 3`.
:::


## 2.

::: problem id=2_1 marks=3
According to a newspaper report, _“A 63-year-old man has rowed around the world without leaving his living room.”_

He clocked up 25,048 miles on a rowing machine that he received for his 50th birthday.  

Roughly how many miles per year has he rowed since he was given the machine?

* [ ] A) 200
* [ ] B) 500
* [ ] C) 1,000
* [x] D) 2,000
* [ ] E) 4,000
{.col-5}

---

The man is now 63 years old and was given the rowing machine for his 50th birthday. So he has
had the rowing machine for 13 years and, possibly, a few months. Therefore the average number
of miles per year that he has rowed is roughly

`25048/13 ≈ 26000/13 = 2000`.
{.text-center}

Therefore, 2000 is roughly the number of miles per year that the man has rowed.
:::


## 3.

::: problem id=3_1 marks=3
![](/resources/7-17-chrismaths/14-numbers.jpg){image align="right"}
Digits on a calculator are expressed by a number of horizontal and vertical illuminated bars. The digits and the bars which represent them are shown in the diagram.

How many digits are both prime and represented by a prime number of illuminated bars?

* [ ] A) 0
* [ ] B) 1
* [ ] C) 2
* [ ] D) 3
* [x] E) 4
{.col-5}

---

The digits that are primes are 2, 3, 5 and 7 (It is important to remember that 1 is not a prime number). The numbers of illuminated bars used to represent them are:

2: 5 bars; 3: 5 bars; 5: 5 bars; 7: 3 bars.{.text-center}

We see that each of them is represented by a prime number of bars. So there are 4 of the digits with the required property.
:::


## 4.

::: problem id=4_1 marks=4
One of the following cubes is the smallest cube that can be written as the sum of three positive cubes.  

Which is it?

* [ ] A) 27
* [ ] B) 64
* [ ] C) 125
* [x] D) 216
* [ ] E) 512
{.col-5}

---

The positive cubes are the numbers in the sequence 1, 8, 27, 64, 125, 216, 343, ... .  

It is straightforward to check that none of the first fives cubes in this sequence is the sum of three smaller positive cubes.  

For example, as 27 + 27 + 27 = 81, and 81 < 125, any three cubes with sum 125 must include 64 at least once. The three cubes couldn’t include 64 twice because 64 + 64 > 125. However, if we had `p + q + 64 = 125`, where p and q are positive cubes which are smaller then 64, then `p + q = 125 − 64 = 61`, which is impossible as the only values `p` and `q` can take are 1, 8 and 27. So 125 is not the sum of three positive cubes.

However, 216 = 27 + 64 + 125, and so 216 is the sum of three positive cubes and so is smallest cube that can be written as the sum of three positive cubes.
:::


## 5.

::: problem id=5_1 marks=5
A palindromic number is a number which reads the same when the order of its digits is reversed.  

What is the difference between the largest and smallest five-digit palindromic numbers that are both multiples of 45?

* [ ] A) 9,180
* [x] B) 9,090
* [ ] C) 9,000
* [ ] D) 8,910
* [ ] E) 8,190
{.col-5}

---

We use the notation ‘`abcde`’ for the number which is represented by the digits `a, b, c, d` and `e` when expressed using the standard base 10. Using this notation we can write a five-digit palindromic number as ‘`abcde`’, where `a, b` and `c` are digits.  

Since 45 = 5 × 9, and 5 and 9 have no common factors, the five-digit palindromic number ‘`abcde`’ is a multiple of 45 if, and only if, it is a multiple of both 5 and 9.  

A number is a multiple of 5 if, and only if, its units digit is 0 or 5. Here the units digit a cannot be 0, since otherwise ‘`abcde`’ would not be a five-digit number. We deduce that `a` is 5. Thus `a` five-digit palindromic number which is divisible by 5 is of the form ‘`5bcb5`’, where `b `and `c` are digits.  

A number is a multiple of 9 if, and only if, the sum of its digits is a multiple of 9.  

The smallest five-digit palindromic number that is a multiple of 45 has the form ‘`50c05`’, corresponding to taking `b` to be 0. The digit sum of ‘`50c05`’ is `10 + c`. For this to be a multiple of 9 we need to take the digit `c` to be `8`. Therefore `50805`, with digit sum 18, is the smallest five-digit palindromic number which is a multiple of 45.  

The largest five-digit palindromic number that is a multiple of 45 has the form ‘`59c95`’, corresponding to taking `b` to be 9. The digit sum of ‘`59c95`’ is `28 + c`. For this to be a multiple of 9 we need to take the digit` c` to be 8. Therefore `59895`, with digit sum 36, is the largest five-digit palindromic number which is a multiple of 45.  

The difference between these two numbers is `59895 − 50805 = 9090`.
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
