# _Year 9 • Parallelogram 3_ Lots of Socks

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by midnight on Sunday if you’re taking part with your classmates.
*	Finish by midnight on Saturday to earn a 25% reward bonus.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then learn where you went wrong when the answer sheet appears.


## 1. Probability

This week we have a big video question that is all about probability, so here are some warn up questions.

In every case, __write you answer as a decimal accurate to two decimal places__.

So don’t write 2/3, but instead write 0.67. And don’t write 50%, but instead write 0.5.

::: problem id=1_1 marks=1
__1.1.__ If I roll a dice, what is the probability that I roll an even number?

<input type="text" solution="0.5"/>  

---

There are 6 numbers on a dice, and three are even, so the probability is 3/6 = 0.5
:::

::: problem id=1_2 marks=1
__1.2.__ If I roll a dice, what is the probability that I roll a prime number? Remember 1 is not a prime number.

<input type="text" solution="0.5"/>  

---

There are 6 numbers on a dice, and 2, 3 and 5 are even, so the probability is 3/6 = 0.5
:::

::: problem id=1_3 marks=2
__1.3.__ If I roll two dice, what is the probability that they show two even numbers?

<input type="text" solution="0.25"/>  

---

The chance of an even number is 0.5 for the first dice and 0.05 for the second dice, so the result is 0.5 x 0.5 = 0.25.
:::

::: problem id=1_4 marks=3
__1.4.__ If I roll two dice, what is the probability that neither of them are prime nor even?

<input type="text" solution="0.03"/>  

---

The first dice has to show 1, as all the other number are either prime or even or both, and the probability of this is 1/6. The second dice also has to show 1, so the chance that the both show 1 is 1/6 x 1/6 = 1/36 = 0.03.
:::

::: problem id=1_5 marks=3
__1.5.__ If I roll two dice, what is the probability that both of them are both prime and even?

<input type="text" solution="0.03"/>  

---

The first dice has to show 2, as it is both even and prime, and the probability of this is 1/6. The second dice also has to show 2, so the chance that the both show 2 is 1/6 x 1/6 = 1/36 = 0.03.
:::

Next, take a look at this puzzle posed by Presh Talwalkar of the excellent Mind Your Decisions video channel, and then answer the question in the video, repeated below. It’s a question from the Amazon interview process, so it is designed to make you think.

@[youtube](wjsG2Os0--o?end=22&rel=0)

::: problem id=1_6 marks=3
__1.6.__ If you pick 2 socks at random (from 12 black and 12 white socks), what is the probability of getting a matching pair?

<input type="text" solution="0.48"/>  

---

It does not matter which sock you pick first, but the second sock has to be the same colour. Whatever the colour of the first sock, there will only 11 similarly coloured socks out of the remaining 23 socks. So, the probability of two socks of the same colour is 11/23, which is 0.48.
:::

::: problem id=1_7 marks=3
__1.7.__ If you pick 2 cards at random from a deck of 52 cards, what is the probability of getting a matching pair of the same value, i.e., two 7s or two jacks or 2 aces?

<input type="text" solution="0.06"/>  

---

It does not matter which card you pick first, but the second card has to be the same value. Whatever the value of the first card, there will only 3 similarly valued cards out of the remaining 51 cards. So, the probability of two cards of the same value is 3/51, which is 0.06.
:::


## 2. Parking puzzle

::: problem id=2_1 marks=3
__2.1.__ What is the number of parking space taken by the car? This is a tough question, so you might need to use the hints, but each hint will cost you 1 mark if you then get the answer right.

![](/resources/9-03-lots-of-socks/2-cars.png){image align="center"}

^^^ hint id=1
Symmetry.
^^^

^^^ hint id=2
Look at it from the driver’s point of view.
^^^

<input type="text" solution="87"/>  

---

The answer is 87, because if you look it at from the driver's point of the view, then the numbers read 86 (not 98), 87, 88, 89, 90, 91 (not 16).
:::


## 3.	Intermediate Maths Challenge Problem

As I mentioned last week, if you are a Year 9 student, then it likely that you will taking part in the United Kingdom Maths Trust (UKMT) competition known as the Intermediate Maths Challenge (IMC). If you do particularly well, you might earn yourself a gold, silver or bronze certificate, but you will have to work hard as you will be competing against Year 9, Year 10 and Year 11 students from across the country.

Your teachers will help you prepare for this national maths competition, but in each week's Parallelogram we will always include one UKMT Junior Maths Challenge question.

::: problem id=3_1 marks=3
__3.1__ The consecutive digits 1, 2, 3, 4 in that order can be arranged to make the correct division, 12 ÷ 3 = 4. One _other_ sequence of four consecutive digits `p`, `q`, `r`, `s` makes a correct division, `pq` ÷ `r` = `s`. What is the value of `s` in this case?

* [x] 4
* [ ] 5
* [ ] 6
* [ ] 7
* [ ] 8

---

In the context of the IMC it is good enough to try out all the cases in turn until we find a correct sum. We see that 23 ÷ 4 ≠ 5 , 34 ÷ 5 ≠ 6 , 45 ÷ 6 ≠ 7 but 56 ÷ 7 = 8.

To check that this really gives the only sequence that gives a correct division sum you could just check the remaining case p = 6. However, it is more illuminating to tackle the question algebraically.

Suppose the digits p, q, r and s are consecutive, then q = p + 1, r = p + 2 and s = p + 3.

Now ‘pq’ represents the number 10p + q, that is, the number 10p + (p + 1) = 11p + 1.

So the equation ‘pq’ ÷ r = s is equivalent to (11p + 1) ÷ (p + 2) = p + 3.

We now have that, as p + 2 ≠ 0,
(11p + 1) ÷ (p + 2) = p + 3
if and only if 11p + 1 = (p + 2)(p + 3),
if and only if 11p + 1 = p<sup>2</sup> + 5p + 6,
if and only if p<sup>2</sup> - 6p + 5 = 0,
if and only if (p - 1)(p - 5) = 0.

This gives just the two solutions p = 1,5 corresponding to the correct equations 12 ÷ 3 = 4 and 56 ÷ 7 = 8.
:::


***

If you missed the first two Parallelograms, then try to go back and complete them. After all, you can earn reward points and badges by completing each Parallelogram. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

There will be another Parallelogram next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 4pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important that what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.


::: submit


---
