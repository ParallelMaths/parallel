# Proof

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

* Tackle each Parallelogram in one go. Don’t get distracted.
* When you finish, remember to hit the SUBMIT button.
*	Finish by Sunday night if your whole class is doing parallelograms.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then examine the solution sheet to learn from your mistakes.


## 1. Proof

For some reason, there are loads of movies about mathematics, or rather about mathematicians.  

I say “for some reason”, but actually I know the reason – mathematics is amazing, and so are mathematicians.  

“Proof” is a film starring Anthony Hopkins, Gwyneth Paltrow and Jake Gyllenhaal. The plot concerns a mathematician who dies, leaving his daughter with a pile of notebooks full of working. When one of his former students goes through the notebooks, he finds a remarkable proof that mathematicians having been struggling to find for centuries. However, does the proof really belong to the father? Is he the real genius?

@[youtube](pnvy9q4UpZw?end=101&rel=0) _(If you have problems watching the video, right click to open it in a new window)_

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

The first prime triplet bigger than 50 is 67, 71 and 73.
:::


## 2. The fiendish bus puzzle

::: problem id=2_1 marks=3
__2.1__ Let’s assume that this bus in London, or Edinburgh... or India... or Bangladesh... or Australia... or Lesotho. Is it driving towards the left or the right?

![](/resources/10-18-proof/2-bus.png){image align="center"}  

* [ ] Left
* [x] Right

^^^ hint id=2_1 marks=1
Where is the door that allows passengers on and off?
^^^

---

The bus looks symmetrical, so you might initially think that the question is impossible to answer.  

However, remember that the bus must have a door for passengers to get on and off, and it must be on the other side of the bus (the side we cannot see). That door is always next to the pavement, and vehicles drive on the left side of the road in the countries named in the question.  

So if the bus driver was facing to the right, then bus would be on left side of the road and the passengers could safely enter and leave the bus. So the bus must be heading to the right.
:::


## 3.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q5 --->

::: problem id=3_1 marks=3
![](/resources/10-18-proof/3-circle.png){image align="right"}
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
Eve’s age is the total of all their ages, less the ages of Alice, Bob, Clare and Dan. Therefore we can find Eve’s age by subtracting from the total of all five ages both the combined total of the ages of Alice and Bob, and the combined total of the ages of Clare and Dan.
^^^

---

Eve’s age is the total of all their ages, less the ages of Alice, Bob, Clare and Dan. Therefore we can find Eve’s age by subtracting from the total of all five ages both the combined total of the ages of Alice and Bob, and the combined total of the ages of Clare and Dan.  

Therefore Eve’s age is 105 − 39 − 38 = 28.  

Since the combined age of Dan and Eve is 44, we deduce that Dan is 16. Since the combined age of Clare and Dan is 38, it follows that Clare is 22. Since the combined age of Bob and Clare is 40, Bob is 18. Finally, since the combined age of Alice and Bob is 39, Alice is 21.  

Hence the youngest is Dan.
:::


## 5.	Intermediate Maths Challenge Problem (UKMT)
<!--- (2017) Q24 --->

::: problem id=5_1 marks=5
The `n` th term of a certain sequence is calculated by multiplying together all the numbers

![](/resources/10-18-proof/5-formula-1.jpg){image align="center"}

where `k` takes all the integer values from 2 to `n + 1` inclusive. For example, the third term in the sequence is:  

![](/resources/10-18-proof/5-formula-2.jpg){image align="center"}

What is the smallest value of `n` for which for the `n` th term of the sequence is an integer?

* [ ] 3
* [ ] 5
* [x] 6
* [ ] 7
* [ ] more than 7
{.col-5}

^^^ hint id=5_1 marks=1
It’s not as difficult as it looks.
^^^

^^^ hint id=5_2 marks=2
If you are stuck, just try a brute force approach and try calculating a few values for increasing values of n. You will notice that many of the terms under the square root cancel out.
^^^

---

Let `n` be a positive integer. The `n` th term of the sequence is

![](/resources/10-18-proof/5-formula-answer1.jpg){image align="center"}

This expression may be rewritten as

![](/resources/10-18-proof/5-formula-answer2.jpg){image align="center"}

which is equivalent to

![](/resources/10-18-proof/5-formula-answer3.jpg){image align="center"}

In the product above we may cancel all the terms other than the denominator of `3/2` and the numerator of `(n + 2)/(n + 1)`.  

In this way the above expression may be simplified to

![](/resources/10-18-proof/5-formula-answer4.jpg){image align="center"}

For this to be an integer, we require that `(n + 2)/2` be a square and hence that `n + 2` is twice a square. Because `n + 2 > 2`, the least possible value of `n + 2` is `2 × 2^2`, that is, 8. Now `n + 2 = 8` for `n = 6`.  

Therefore 6 is the smallest value of `n` for which the `n` th term of the sequence is an integer.
:::


## 6. Very short songs and very long songs

__This question was suggested by Mr McKennan, a maths tutor from Wimbledon.__

::: problem id=6_1 marks=2
Famously, the shortest piece of music registered with a publisher is the song _You Suffer_ by the grindcore band Napalm Death, which is 1.316 seconds long.  

You can listen to it here:

@[youtube](ybGOT4d2Hs8?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

Meanwhile, the longest piece of music of which I'm aware is _Longplayer_ by ex-Pogues musician Jem Finer. According to the website for the song:

_"Longplayer is a one thousand year long musical composition. It began playing at midnight on the 31st of December 1999, and will continue to play without repetition until the last moment of 2999, at which point it will complete its cycle and begin again."_
{.text-center}

The phase patterns used to generate 1000 years of unique music are mathematically fascinating, and worth studying themselves.

But my question for you is this: how many times could Napalm Death play _You Suffer_ in the time that it takes _Longplayer_ to play out?

To make it a little fairer, I'd like you to give your answer to __1 significant figures__.

<input type="number" solution="20,000,000,000"/>
:::


There will be more next week, and the week after, and the week after that. So check your email or return to the website on Thursday at 3pm.

In the meantime, you can find out your score, the answers and go through the answer sheet as soon as you hit the SUBMIT button below.

When you see your % score, this will also be your reward score. As you collect more and more points, you will collect more and more badges. Find out more by visiting the Rewards Page after you hit the SUBMIT button.

It is really important that you go through the solution sheet. Seriously important. What you got right is much less important than what you got wrong, because where you went wrong provides you with an opportunity to learn something new.

Cheerio,
Simon.
