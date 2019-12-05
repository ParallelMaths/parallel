# Proof

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by Sunday night if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.


## 1. Proof

For some reason, there are loads of movies about mathematics, or rather about mathematicians.  

I say “for some reason”, but actually I know the reason – mathematics is amazing, and so are mathematicians.  

“Proof” is a film starring Anthony Hopkins, Gwyneth Paltrow and Jake Gyllenhaal. The plot concerns a mathematician who dies, and his daughter and one of his students are going through is study and discover an remarkable proof that mathematicians having been struggling to find for centuries. However, does the proof really belong to the father? Is he the real genius?

@[youtube](pnvy9q4UpZw?end=101&rel=0)

The film never identifies the proof at the centre of the plot, but in the clip Jake Gyllenhaal mentions that it has something to do with primes. It might be a proof of the twin prime conjecture, which asks whether there is an infinite number of twin primes, namely pairs of primes that are just two apart, such as 3 and 5.

::: problem id=1_1 marks=1
__1.1__ Are 13 and 15 twin primes?

* [ ] Yes
* [x] No

---

15 is not prime!
:::

::: problem id=1_2 marks=2
__1.2__ Are 107 and 109 twin primes?

* [x] Yes
* [ ] No
:::

::: problem id=1_3 marks=3
__1.3__ Is 61 one half of a twin prime pair?

* [x] Yes
* [ ] No

---

63 is not a prime (3 × 21), but 59 is a prime
:::

::: problem id=1_4 marks=3
__1.4__ A prime triplet is a set of three primes in which the smallest and largest of the three differ by 6, such as 41, 43, 47. Try to work out the first prime triplet bigger than 50, and identify the middle prime.

<input solution="71"/>

---

The first triple prime bigger than 50 is 67, 71 and 73.
:::


## 2. The fiendish bus puzzle

::: problem id=2_1 marks=3
__2.1__ Let’s assume that this bus in London, or Edinburgh... or India... or Bangladesh... or Australia... or Lesotho. Is driving towards the left or the right?

![](/resources/10-14-proof/2-bus.png){image align="center"}  

* [ ] Left
* [x] Right

^^^ hint id=2_1 marks=1
Where is the door that allows passengers on and off?
^^^

---

The bus looks symmetrical, so you might initially think that the question is impossible to answer.  

However, remember that the bus must have door for passengers to get on and off, and it must be on the other side of the bus (the side we cannot see). That door is always next to the pavement, and vehicles drive on the left side of the road in the countries named in the question.  

So if the bus driver was facing to the right, then bus would be on left side of the road and the passengers could safely enter and leave the bus. So the bus must be heading to the right.
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q5 --->

::: problem id=3_1 marks=3
![](/resources/10-14-proof/3-circle.png){image align="right"}
__3.1__ The diagram shows two circles with the same centre.  

The radius of the outer circle is twice the radius of the inner circle.  

The region between the inner circle and the outer circle is divided into six equal segments as shown.  

What fraction of the area of the outer circle is shaded?

* [ ] `3/5`
* [x] `3/8`
* [ ] `3/9`
* [ ] `3/10`
* [ ] `3/11`
{.col-5}

---

We suppose that the radius of the inner circle is `r`. It follows that the radius of the outer circle is `2r`. Therefore the inner circle has area `πr^2` and the outer circle has area `π(2r)^2`, that is, `4πr^2`.  

Hence, the area of the region between the inner and outer circles is `4πr^2 − πr^2 = 3πr^2`. Half of this region is shaded. Therefore the shaded area is `3/2 πr^2`.  

It follows that the fraction of the area of the outer circle that is shaded is given by `(3/2 πr^2)/(4πr^2) = 3/8`.
:::


## 4.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q12 --->

::: problem id=4_1 marks=4
__4.1__ The combined age of Alice and Bob is 39. The combined age of Bob and Clare is 40.  

The combined age of Clare and Dan is 38. The combined age of Dan and Eve is 44. The total of all five ages is 105.  

Which of the five is the youngest?

* [ ] Alice
* [ ] Bob
* [ ] Clare
* [x] Dan
* [ ] Eve
{.col-5}

^^^ hint id=4_1 marks=1
Eve’s age is the total of all their ages, less the ages of Alice, Bob, Clare and Dan. Therefore wecan find Eve’s age by subtracting from the total of all five ages both the combined total of the ages of Alice and Bob, and the combined total of the ages of Clare and Dan.
^^^

---

Eve’s age is the total of all their ages, less the ages of Alice, Bob, Clare and Dan. Therefore we can find Eve’s age by subtracting from the total of all five ages both the combined total of the ages of Alice and Bob, and the combined total of the ages of Clare and Dan.  

Therefore Eve’s age is 105 − 39 − 38 = 28.  

Since the combined age of Dan and Eve is 44, we deduce that Dan is 16. Since the combined age of Clare and Dan is 38, it follows that Clare is 22. Since the combined age of Bob and Clare is 40, Bob is 18. Finally, since the combined age of Alice and Bob is 39, Alice is 21.  

Hence the youngest is Dan.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q17 --->

::: problem id=5_1 marks=5
![](/resources/10-14-proof/5-pentagon.jpg){image align="right"}
__5.1__ The diagram shows two rectangles and a regular pentagon.  

One side of each rectangle has been extended to meet at `X`.  

What is the value of `x`?

* [ ] 52
* [x] 54
* [ ] 56
* [ ] 58
* [ ] 60
{.col-5}

^^^ hint id=5_1 marks=1

It’s not as difficult as it looks.
^^^

^^^ hint id=5_2 marks=2
If you are stuck, just try a brute force approach and try calculating a few values for increasing values of n. You will notice that many of the terms under the square root cancel out.
^^^

---
![](/resources/10-14-proof/5-pentagon-answer1.jpg){image align="right"}
__Method 1__

We use the fact that the sum of the angles of a pentagon is 540°. Hence, each interior angle of a regular pentagon is 108°. We also know that the interior angles of the rectangles are each 90°.  

We now consider the pentagon `TUVWX`, as shown in the figure. The interior angles of this polygon at `T` and `W` are each 90°. The interior angle at `U` is the interior angle of the regular polygon, namely 108°. The interior angle at `V` is the sum of an interior angle of the regular pentagon and a right angle, that is, 108° + 90°.  

Therefore `90 + 108 + (108 + 90) + 90 + x = 540`. Hence, `x + 486 = 540`. Therefore `x = 540 − 486 = 54`.

![](/resources/10-14-proof/5-pentagon-answer2.jpg){image align="right"}
__Method 2__

We label the vertices of the pentagon and one of the rectangles as shown in the figure.  

Let `YZ` be a line through `S` that is parallel to `UV`. It follows that the alternate angles, `∠SXU` and `∠XSZ` are equal. Hence `∠XSZ = x°`.  

By the symmetry of the pentagon about the line through `S` perpendicular to `YZ`, we have `∠YST = ∠RSZ`. Let `∠YST = ∠RSZ = y°`.  

The angles on the line at the point `S` have sum 180°. Because it is the angle of a regular pentagon, `∠TSR = 108°`. Because it is the angle of a rectangle, `∠TSX = 90°`. Therefore `2y + 108 = 180`.
:::



There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
