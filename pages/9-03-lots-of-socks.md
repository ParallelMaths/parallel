# Lots of Socks

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by midnight on Sunday if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then look at the solution sheet to see where you went wrong, and then next time you’ll know what to do.


## 1. Probability

This week we have a big video question that is all about probability, so here are some warm up questions.

In every case, __write your answer as a decimal accurate to two decimal places__.

So don’t write 2/3, but instead write 0.67. And don’t write 50%, but instead write 0.50.

::: problem id=1_1 marks=1
__1.1.__ If I roll a dice, what is the probability that I roll an even number?

<input type="text" solution="0.50"/>  

---

There are 6 numbers on a dice, and three are even, so the probability is 3/6 = 0.50
:::

::: problem id=1_2 marks=1
__1.2.__ If I roll a dice, what is the probability that I roll a prime number? Remember 1 is not a prime number.

<input type="text" solution="0.50"/>  

---

There are 6 numbers on a dice, and 2, 3 and 5 are prime, so the probability is 3/6 = 0.50
:::

::: problem id=1_3 marks=2
__1.3.__ If I roll two dice, what is the probability that they show two even numbers?

<input type="text" solution="0.25"/>  

---

The chance of an even number is 0.5 for the first dice and 0.5 for the second dice, so the result is 0.5 x 0.5 = 0.25.
:::

::: problem id=1_4 marks=3
__1.4.__ If I roll two dice, what is the probability that neither of them are prime nor even?

<input type="text" solution="0.03"/>  

---

The first dice has to show 1, as all the other numbers are either prime or even or both, and the probability of this is 1/6. The second dice also has to show 1, so the chance that they both show 1 is 1/6 x 1/6 = 1/36 = 0.03.
:::

::: problem id=1_5 marks=3
__1.5.__ If I roll two dice, what is the probability that both of them are both prime and even?

<input type="text" solution="0.03"/>  

---

The first dice has to show 2, as it is both even and prime, and the probability of this is 1/6. The second dice also has to show 2, so the chance that they both show 2 is 1/6 x 1/6 = 1/36 = 0.03.
:::

Next, take a look at this puzzle posed by Presh Talwalkar of the excellent Mind Your Decisions video channel, and then answer the question in the video, repeated below. It’s a question from the Amazon interview process, so it is designed to make you think.

@[youtube](wjsG2Os0--o?end=22&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=1_6 marks=3
__1.6.__ If you pick 2 socks at random (from 12 black and 12 white socks), what is the probability of getting a matching pair?

<input type="text" solution="0.48"/>  

---

It does not matter which sock you pick first, but the second sock has to be the same colour. Whatever the colour of the first sock, there will only be 11 similarly coloured socks out of the remaining 23 socks. So, the probability of picking two socks of the same colour is 11/23, which is 0.48.
:::

::: problem id=1_7 marks=3
__1.7.__ If you pick 2 cards at random from a deck of 52 cards, what is the probability of getting a matching pair of the same value, i.e., two 7s or two jacks or 2 aces?

<input type="text" solution="0.06"/>  

---

It does not matter which card you pick first, but the second card has to be the same value. Whatever the value of the first card, there will only be 3 similarly valued cards out of the remaining 51 cards. So, the probability of picking two cards of the same value is 3/51, which is 0.06.
:::


## 2. Parking puzzle

::: problem id=2_1 marks=3
__2.1.__ What is the number of parking space taken by the car? This is a tough question, so you might need to use the hints, but each hint will cost you 1 mark if you then get the answer right.

![](/resources/9-03-lots-of-socks/2-cars.png){image align="center"}

^^^ hint id=1 marks=0.5
Symmetry.
^^^

^^^ hint id=2 marks=0.5
Look at it from the driver’s point of view.
^^^

<input type="text" solution="87"/>  

---

The answer is 87, because if you look it at from the driver's point of the view, then the numbers read 86 (not 98), 87, 88, 89, 90, 91 (not 16).
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)

As I mentioned last week, if you are a Year 9 student, then it is likely that you will be taking part in the United Kingdom Maths Trust (UKMT) competition known as the Intermediate Maths Challenge (IMC). If you do particularly well, you might earn yourself a gold, silver or bronze certificate, but you will have to work hard as you will be competing against Year 9, Year 10 and Year 11 students from across the country.

Your teachers will help you prepare for this national maths competition, but in each week's Parallelogram we will always include one UKMT Junior Maths Challenge question.

<!--- (2011) Q3 --->
::: problem id=3_1 marks=3
__3.1__ The consecutive digits 1, 2, 3, and 4 in that order can be arranged to make the correct division, 12 ÷ 3 = 4. One _other_ sequence of four consecutive digits `p`, `q`, `r`, `s` makes a correct division, `pq` ÷ `r` = `s`. What is the value of `s` in this case?

* [ ] 4
* [ ] 5
* [ ] 6
* [ ] 7
* [x] 8

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


## 4. Measure for measure

::: problem id=4_1 marks=2
__4.1__ Convert 0.5432 kilograms into grams.

<input solution="543.2"/>g
:::

::: problem id=4_2 marks=2
__4.2__ Convert 3.4 centilitres to millilitres.

<input solution="34"/> ml
:::

::: problem id=4_3 marks=2
__4.3__ A marathon is 42.195km. What is a half marathon in m, to the nearest whole metre?

<input solution="21098"/> m
:::

::: problem id=4_4 marks=2
__4.4__ How many whole 330ml cans fit into a 2 litre jug?

<input solution="6"/>
:::



## 5. Parallel emails

If you use Parallel on an email address from your school, some school IT systems prevent you from receiving the emails we send out to remind you when a new Parallelogram is released, or when we have another exciting and nerdy maths thing to tell you about. To avoid this, you could give us a different email address we can contact you on - either a personal email address, or one for you parents or guardian. If you'd like to do that, [you can put it in this form](https://landing.mailerlite.com/webforms/landing/k6y9h6){target="_blank"}, but please ask a parent first if you are not yet 13 years old.

::: problem id=5_1 marks=1
__5.1__ If you do want to give us an alternate email address, be sure to click the link above (if you haven’t already). Either way, here's a free mark, just for being a fan of Parallel.

* [x] Thank you!
:::


## 6. Big changes in the Parallel Universe

There are some big changes to the Parallel Universe, so here is a quick message from Simon.  

@[youtube](watch?v=GFFcRY235fI?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=6_1 marks=2
__6.1__ In the video, Simon talks about Parallel maths circles (you can [find out more about maths circles here](/circles)).  

According to Simon, how many maths circles are available to join for free on the Parallel website every week?

* [ ] 10
* [ ] 11
* [ ] 12
* [x] 13
* [ ] 14
{.col-5}
:::


If you missed the first two Parallelograms, then try to go back and complete them. After all, you can earn reward points and badges by completing each Parallelogram. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

There will be another Parallelogram next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
