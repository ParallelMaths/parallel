# Teapot Time

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


## 1. Disney recycling

I was fascinated when I heard that in many of Disney’s classic early animated films, the studio recycled and rehashed earlier sequences to save time on drawing new scenes. The clip below shows some of the most remarkable examples. Watch carefully and answer the question below.

@[youtube](FepHIzaXTyg?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=1_1 marks=1
__1.1.__ One of my favourite films as a kid – even now – is Disney’s “Robin Hood”. The dance scene is largely built by stealing sequences from other films.

Which film is NOT recycled in a dance scene from “Robin Hood”?

* [ ] The Jungle Book
* [ ] Snow White
* [ ] The Aristocats
* [x] Lady and the Tramp
:::

Nowadays most animated films rely on mathematics to draw and animate scenes, which means we have amazing films like “Toy Story” and “Shrek”. In fact, mathematics (and computer science) is at the heart of the animation film industry.  

Below is a short video clip about the Utah teapot, which played an important role in the history of computer animation. Take a look at the video and find out how and why mathematics was used to model the teapot, and then answer the question below.

@[youtube](TIxt9guMbXo?rel=0) _(If you have problems watching the video, right click to open it in a new window)_

::: problem id=1_2 marks=2
__1.2.__ Why was the Utah teapot such a good object for testing how to mathematically model 3D objects?

* [ ] It has concave surfaces
* [ ] It has convex surfaces
* [ ] It can cast shadows on itself
* [ ] It is not too complicated
* [x] All of the above
:::


## 2. Intermediate Maths Challenge Problem (UKMT)
<!--- 2011 (13) --->

::: problem id=2_1 marks=3
__2.1.__ The three blind mice stole a piece of cheese. In the night, the first mouse ate `1/3` of the cheese.  

Later, the second mouse ate `1/3` of the remaining cheese. Finally, the third mouse ate `1/3` of what was then left of the cheese.  

Between them, what fraction of the cheese did they eat?

* [ ] `16/27`
* [ ] `17/27`
* [ ] `2/3`
* [x] `19/27`
* [ ] `20/27`
{.col-5}

---

Our first method is a direct calculation: The first mouse ate `1/3` of the cheese, leaving `1 - 1/3 = 2/3`.

The second mouse ate `1/3` of this, namely `1/3 × 2/3 = 2/9`. This left `2/3 - 2/9 = 4/9` of the cheese.

The third mouse ate `1/3` of this, namely `1/3 × 4/9 = 4/27`.

So between them, the amount of the cheese that the three mice ate was `1/3 + 2/9 + 4/27 = (9 + 6 + 4)/27 = 19/27`.

Our second method is to first calculate the amount of cheese that remains. Each mouse eats `1/3`rd of the remaining cheese, and so leaves `2/3`rd of it. Hence, after the three mice have eaten the cheese, there remains `(2/3)^3` of the initial amount of cheese.

So the fraction which is eaten is `1 - (2/3)^3 = 1 - 8/27 = 19/27`.
:::


## 3. Mouse extension problem (UKMT)
<!--- 2011 (13e) --->

::: problem id=3_1 marks=4
__3.1.__  Suppose there are `n` mice, and each, in turn, eats `1/n`th of the remaining amount of cheese.

Find a formula for the fraction of cheese that they eat between them.

* [ ] `n/n^n`
* [ ] `n^n`
* [x] `1 - ((n-1)/n)^n`
* [ ] `1 - 1/(n - 1)^n`
* [ ] `(n - 1)/n^n`

^^^ hint id=1
For this question, it is easier to work out how much of the cheese is left after each stage, and then subtract the total amount eaten from 1 to find out how much has been eaten. This is already a big hint, because it probably means that the answer is (1 – something).
^^^

^^^ hint id=2
A crude way to do this problem is to test out the formulae given as with a simple example, or the example you have already looked at in question 2.

If `n = 2`, then mouse one eats half the cheese, and then another mouse half the remaining cheese... you will only have `1/4` of the cheese left, and so `3/4` will have been eaten. In this case `n = 2`. Which of the options works for this scenario?
^^^

---

For this question, it is easier to work out how much of the cheese is NOT eaten after each stage, and then subtract the total amount NOT eaten from 1 to find out how much has been eaten. If each mouse eats `1/n` of the cheese, then each mouse doesn’t eat `(n-1)/n`. So after the first mouse, the fraction of cheese remaining is `(n-1)/n`, then after the second mouse the cheese remaining is `((n-1)/n)^2`, then after the nth mouse the cheese remaining is `((n-1)/n)^n`. Therefore, the amount of cheese eaten is `1 – ((n-1)/n)^n`.

A crude way to do this problem is to test out the formulae given with a simple example, or the example you have already looked at in question 2. You will find out which formula works, without really understanding why, but at least you will probably get the right answer.
:::


## 4. Find the letter

This is a terrific puzzle from puzzle master Scott Kim. You’ll be able to find out more about him and how he constructed this puzzle when you click on the solution sheet.  

::: problem id=4 marks=3
__4.1__ The figure below is a letter of the alphabet that has been cut out of paper and folded just once. It is NOT the letter L. What letter is it?

![](/resources/9-18-teapot-time/4-find-letter-question.png){image align="center"}

In case it helps, the letter is taken from this alphabet, with this particular font (or type-face).

![](/resources/9-18-teapot-time/4-find-letter-alphabet.png){image align="center"}

^^^ hint id=3
If you unfold the folded bit of paper, perhaps there is another bit of paper hidden underneath?
^^^

<input type="text" solution="F"/>  

---

The obvious approach is to unfold the paper and then we have an L-shape, but rotated, so that it is almost upside-down. But we have been told that the answer is NOT L. However, it is possible that there is a piece of paper under the folded arm of paper, so when the arm is unfolded we would see another arm, revealing something that looks like a flipped F-shape. Of course, because it is just a bit of paper, we can turn it over and make a real F.  

You can find out more about Scott Kim’s thoughts on this puzzle and more generally by [reading this article by him](http://cs.wellesley.edu/~cs215/Lectures/L17-IntroGamesJigsawPuzzle/ScottKim-What_is_a_Puzzle.pdf){target="_blank"}, or you can [visit his website](http://www.scottkim.com/){target="_blank"}.
:::


## 5. Intermediate Maths Challenge Problem (UKMT)
<!--- 2011 (14) --->

::: problem id=5 marks=3
__5.1__ The number 6 lies exactly halfway between `3` and `3^2`.

Which of the following is not halfway between a positive integer and its square?

* [ ] 3
* [ ] 10
* [ ] 15
* [ ] 21
* [x] 30
{.col-5}

---

The first approach might be to check each answer A to E. For example, D (21) is halfway between `6` and `6^2`, so it can’t be D. Eventually, you realise that all the answers A to D sit halfway between `n` and `n^2`. So, the answer is E.  

The second approach is to realise that to fit the rule, then a number, `k`, must obey the following equation `(k – n = n^2 – k)`, which says that the distance between `k` and `n` is the same as the distance between `k` and `n^2`.  

Rearranging this equation gives `k = 1/2 (n + n^2)`. We can input values for `n` (1, 2, 3, 4, 5, 6, 7, 8, …) to generate values for `k ` (1, 3, 6, 10, 15, 21, 28, 36…). And answer E (30) does not appear in this list, so that is the correct answer.
:::


## 6. A New Year reminder

As it is the start of the year, I thought it would be good just to remind you that Parallelograms are really tough, they cover topics that you might not have seen before and they are designed to confuse you. If too many people get 100%, then I will just have to make the Parallelograms tougher, weirder and more confusing. In short, if you only get 50%, don’t worry. If you get less than 50%, don’t worry. Just make sure you go through the solution sheet and try to find out why you got a question wrong. I really do mean it when I say that I am overjoyed if a student gets 25%, as long as they did their best, looked at the solution sheet, and then learned something. That is far better than getting 100% and learning nothing... although well done if you do get 100%.

Does that make sense? I just wanted to remind students, teachers and parents that Parallelograms are a major challenge, and to a large extent the scores don’t matter.

By the way, it does say at the start of every Parallelogram: “Don’t worry if you score less than 50%, because it means you will learn something new when you check the solutions.”

::: problem id=6_1 marks=3
__6.1__ Are you cool about Parallelograms being hard and therefore not necessarily getting a high score every week?

* [x] Yes, I am very cool about it. Positively chilled. Or maybe negatively chilled.
:::

::: problem id=6_2 marks=3
__6.2__ Are you going to promise to go through the solution sheet every week and learn from your mistakes?

* [x] Yes, I promise to go through the solution sheet every week. Really. Seriously. I mean it. If not, may the ghosts of dead mathematicians haunt me during maths lessons.
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
