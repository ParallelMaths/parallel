# Chrismaths - Part 2

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

![](/resources/7-15-chrismaths/santa-simon.png){image align="right"}
It’s nearly Christmas, so time for another instalment of your Christmaths challenge paper.

Good luck and happy Chrismaths. Don’t eat too many mince pie charts!

Simon.

PS: I want to say thank you to the UK Mathematics Trust, who own the copyright to these questions.


## 1.
<!--- 2015 (2) --->

::: problem id=1_1 marks=3
It has just turned 22:22. How many minutes are there until midnight?

* [ ] A) 178
* [ ] B) 138
* [ ] C) 128
* [ ] D) 108
* [x] E) 98
{.col-5}

---

There are 60 − 22 = 38 minutes from 22:22 to 23:00 and then a further 60 minutes to midnight.

Since 38 + 60 = 98, there are 98 minutes to midnight.
:::


## 2.

::: problem id=2_1 marks=3
The result of the calculation 123,456,789 × 8 is almost the same as 987,654,321 except
that two of the digits are in a different order.  

What is the sum of these two digits?

* [x] A) 3
* [ ] B) 7
* [ ] C) 9
* [ ] D) 15
* [ ] E) 17
{.col-5}

---

In the context of the JMC we are entitled to assume the truth of the statement that `123456789 × 8` is obtained by interchanging two of the digits of `987654321`. This leads to a quick way to answer the question without the need for a lot of arithmetic.  

Because `9 × 8 = 72`, the units digit of `123456789 × 8` is a `2`. Starting from `987654321`, to obtain a `2` as the units digit we need to interchange the digits `1` and `2`. So these are the two digits which are in a different order in the answer to the calculation. Now comes the easy bit, `1 + 2 = 3`.

Alternatively, if we cannot take the statement in the question on trust, the only thing to do is to actually multiply `123456789` by `8`. If you do this you will see that the answer is `987654312`. It follows that it is the digits `1` and `2` that need to be interchanged.  

Note that, in fact, as soon as we get as far as working out that `89 × 8 = 712` we can deduce that the digits `1` and `2` need to be interchanged. It is, however, necessary to do the whole sum to check that all the other digits are in the right order.  

__Note__
The number `123456789 × 8` is a multiple of `8`. We have the following test for whether a number is a multiple of `8`.

_An integer is a multiple of `8`, if, and only if, its last three digits form a number which is a multiple of `8`._{.text-center}

Since `321` is not a multiple of `8`, this shows immediately that `987654321` is not equal to `123456789 × 8` .
:::


## 3.

::: problem id=3_1 marks=3
A fish weighs a total of 2 kg plus a third of its own weight.  

What is the weight of the fish in kg?

* [ ] A) `2 1/3`
* [x] B) `3`
* [ ] C) `4`
* [ ] D) `6`
* [ ] E) `8`
{.col-5}

---

Since the fish weighs 2 kg plus one third of its weight, 2 kg is two thirds of its weight. Therefore one third of its weight is 1 kg, and so the total weight of the fish is 2 kg + 1 kg = 3 kg.

Alternatively, we can also solve this problem using algebra.  

We let `x` be the weight of the fish in kg. Now we use the information in the question to create an equation involving `x` that we can solve.  

Because the fish weighs 2 kg plus one third of its weight, `x = 2 + 1/3 x`  

It follows that `x − 1/3 x = 2`, and hence, `2/3 x = 2`.  

Because `3/2 × 2/3 = 1`, we multiply both sides of this equation by `3/2`. In this way we deduce that `x = 3/2 × 2 = 3`.
:::


## 4.

::: problem id=4_1 marks=4
- Knave of Hearts: “I stole the tarts.”
- Knave of Clubs: “The Knave of Hearts is lying. ”
- Knave of Diamonds: “The Knave of Clubs is lying.”
- Knave of Spades “The Knave of Diamonds is lying.”

How many of the four Knaves were telling the truth?

* [ ] A) 1
* [x] B) 2
* [ ] C) 3
* [ ] D) 4
* [ ] E) more information needed
{.col-4}

---

Either the Knave of Hearts stole the tarts or he is innocent.  

If the Knave of Hearts stole the tarts, he was telling the truth. So the Knave of Clubs was lying. Hence the Knave of Diamonds was telling the truth. Therefore the Knave of Spades was lying. So in this case two of the four Knaves were lying.  

If the Knave of Hearts did not steal the tarts, he was lying. So the Knave of Clubs was telling the truth. Hence the Knave of Diamonds was lying. Therefore the Knave of Spades was telling the truth. So also in this case two of the four Knaves were lying.  

We cannot tell from the information given whether or not the Knave of Hearts stole the tarts. But, as we have seen, we can be sure that, whether he stole them or not, two of the Knaves were telling the truth and two were lying.
:::


## 5.

::: problem id=5_1 marks=5
![](/resources/7-15-chrismaths/22-hexagon.jpg){image align="right"}
The diagram shows a shaded region inside a regular hexagon.  

The shaded region is divided into equilateral triangles.  

What fraction of the area of the hexagon is shaded?

* [ ] A) `3/8`
* [ ] B) `2/5`
* [ ] C) `3/7`
* [ ] D) `5/12`
* [x] E) `1/2`
{.col-5}

---

![](/resources/7-15-chrismaths/22-hexagon-answer.jpg){image align="right"}  

We form a complete grid inside the hexagon, as shown in the figure.  

In this way the hexagon is divided up into a number of congruent equilateral triangles and, around the edge, some triangles each congruent to half of the equilateral triangles.  

We could now use the grid to work out the shaded and unshaded areas in terms of the areas of the equilateral triangles, and hence work out which fraction of the area of the hexagon is shaded.  

It is a little easier to exploit the sixfold symmetry of the figure and just work out the fraction of the area surrounded by the heavy lines that is shaded.  

We see that in this part of the hexagon there are six shaded equilateral triangles, four unshaded equilateral triangles and four unshaded triangles whose areas are each half that of the equilateral triangles. So the unshaded area is equal to that of six of the equilateral triangles. It follows that the shaded area is equal to the unshaded area.  

We conclude that the fraction of the hexagon that is shaded is `1/2`.
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
