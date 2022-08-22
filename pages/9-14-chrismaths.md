# Chrismaths - Part 1

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteau word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

![](/resources/9-14-chrismaths/santa-simon.png){image align="right"}
It’s nearly Christmas. Not very many people realise that the original name for this holiday was Chrismaths. For centuries, children traditionally completed mathematics problems during the festive period. The amount of effort that children put into their mathematics problems allowed Santa to decide who had been naughty and who had been nice.

With this in mind, this next few week’s of Parallelogram contain a WHOLE maths challenge paper, to stretch your brain over Chrismaths.

Good luck and happy Chrismaths. Don’t eat too many mince pie charts!

Simon.

PS: I want to say thank you to the UK Mathematics Trust, who own the copyright to these questions.


## 1.

::: problem id=1_1 marks=3
Three positive integers are all different. Their sum is 7.  

What is their product?

* [ ] A) 12
* [ ] B) 10
* [ ] C) 9
* [x] D) 8
* [ ] E) 5
{.col-5}

---

It can be seen that 1 + 2 + 4 = 7 and 1 × 2 × 4 = 8, so assuming that there is just one solution, the answer must be 8.

In the context of the IMC, that is enough, but if you are asked to give a full solution, you need to give an argument to show there are no other possibilities. This is not difficult.

For example, suppose `a, b` and `c` are three different positive integers with sum 7, and that `a < b < c`.

If `a ≥ 2`, then `b ≥ 3` and `c ≥ 4`, and so `a + b + c ≥ 9`.

So we must have that `a = 1`. It follows that `b + c = 6`.

If `b ≥ 3` then `c ≥ 4` and hence `b + c ≥ 3 + 4 = 7`. So `b = 2`. Since `a = 1` and `b = 2`, it follows that `c = 4`.
:::


## 2.

::: problem id=2_1 marks=3
The prime numbers `p` and `q` are the smallest primes that differ by 6.  

What is the sum of `p` and `q`?

* [ ] A) 12
* [ ] B) 14
* [x] C) 16
* [ ] D) 20
* [ ] E) 28
{.col-5}

---

Suppose `p < q`. Then `q = p + 6`. The prime numbers are 2, 3, 5, 7,….

With `p = 2, q = 8`, which is not prime.

Similarly if `p = 3, q = 9,` which is also not prime.

However, when `p = 5, q = 11`, which is prime.

So, `p = 5`, `q = 11` gives the smallest primes that differ by 6. Then `p + q = 5 + 11 = 16`.
:::


## 3.

::: problem id=3_1 marks=3
Which of the following has a different value from the others?

* [ ] A) 18% of £30
* [x] B) 12% of £50
* [ ] C) 6% of £90
* [ ] D) 4% of £135
* [ ] E) 2% of £270
{.col-3}

---

We have that 18% of £30 = £`(18/100 × 30)` = £5.40.

Similarly, 12% of £50 is £6.00, and 6% of £90 is £5.40.  

We already see that option B must be the odd one out.

It is easy to check that 4% of £135 and 2% of £270 are also both £5.40.
:::


## 4.

::: problem id=4_1 marks=4
The first term in a sequence of positive integers is 6. The other terms in the sequence follow these rules:
* if a term is even then divide it by 2 to obtain the next term;
* if a term is odd then multiply it by 5 and subtract 1 to obtain the next term.  

For which values of `n` is the `n` th term equal to `n`?

* [ ] A) 10 only
* [ ] B) 13 only
* [ ] C) 16 only
* [ ] D) 10 and 13 only
* [x] E) 13 and 16 only
{.col-3}

---

Since the options refer only to the 10th, 13th and 16th terms of the sequence, as far as this IMC question is concerned it is only necessary to check the first 16 terms in the sequence. These are as shown in the table below:

![](/resources/9-14-chrismaths/17-table-answer.jpg){image align="right"}

From this we see that the 13th term is 13, and the 16th term is 16, and that these are the only cases where the `n` th term is equal to `n`.  

However, a complete answer requires a proof that for all `n` > 16, the nth term is not equal to n. It can be seen that after the 16th term the sequence continues 8, 4, 2, 1, 4, 2, 1… with the cycle 4, 2, 1 now repeating for ever. It follows that, for `n` ≥ 17, the only values taken by the `n`th term are 8, 4, 2 and 1. We deduce that for `n` ≥ 16, the `n`th term is not equal to `n`.
:::


## 5.

::: problem id=5_1 marks=5
What is the maximum possible value of the median number of cups of coffee bought per customer on a day when Sundollars Coffee Shop sells 477 cups of coffee to 190 customers, and every customer buys at least one cup of coffee?

* [ ] A) 1.5
* [ ] B) 2
* [ ] C) 2.5
* [ ] D) 3
* [x] E) 3.5
{.col-5}

---

Put the set of numbers of cups of coffee drunk by the individual customers into numerical order with the smallest first. This gives an increasing sequence of positive integers with sum 477. Because 190 is even, the median of these numbers is the mean of the 95th and 96th numbers in this list. Suppose these are `a` and `b`, respectively. Then the median is `1/2(a + b)`.  

We note that `1 ≤ a ≤ b`. Also, each of the first 94 numbers in the list is between `1` and `a`, and each of the last 94 numbers is at least `b`. So if we replace the first 94 numbers by 1, and the last 94 numbers by `b`, we obtain the sequence of numbers

![](/resources/9-14-chrismaths/22-sequence1.jpg){image align="center"}

whose sum does not exceed 477, the sum of the original sequence. Therefore

![](/resources/9-14-chrismaths/22-sequence2.jpg){image align="center"}

As `1 ≤ a`, it follows that `95 + 95b ≤ 94 + a + 95b ≤ 477`, hence `95b ≤ 477 - 95 = 382` and therefore `b ≤ 382/95`.  

Therefore, since b is an integer, `b ≤ 4`.  

When `b = 4`, it follows from (2) that `94 + a + 380 ≤ 477`, giving `a ≤ 3`.  

This shows that the maximum possible values for a and b are 3 and 4, respectively. We can see that these values are possible, as, if we substitute these values in (1), we obtain a sequence of numbers with sum `94 × 1 + 3 + 95 × 4 = 477`.  

So 3.5 is the maximum possible value of the median.
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
