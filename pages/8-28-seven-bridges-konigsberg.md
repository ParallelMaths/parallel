# The Seven Bridges of Konigsberg

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


## 1.	The Seven Bridges of Königsberg

![](/resources/8-28-seven-bridges-konigsberg/1-seven-bridges.png){image align="right"}
Last week, we had a problem that involved drawing this house with just one single line. [If you haven’t completed last week’s Parallelogram then go back and have a go](/8-27-ada-lovelace){target="_blank"}.

This week we’ll look at a video that explains the origin of this type of problem and how you can solve such puzzles.

@[youtube](nZwSo4vfw6c?rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

![](/resources/8-28-seven-bridges-konigsberg/1-graph-diagram.jpg){image align="center"}

To summarise:
* a network is a collection of lines meeting at “nodes”.
* the number of lines meeting at a node is called the “degree” of the node.
* if a network can be drawn with a single line, you typically have to enter each node and exit each node, so the degree of any node is going to be even.
* the only exception is if you start at one node and end at another node, in which case only those two nodes are allowed to have an odd degree.
* if you start and finish at the same node, then all nodes have to have an even degree.

To really summarise, a network can only be drawn with a single line if it obeys one of the two following rules:
1. every node has an even degree, OR
2. every node has an even degree, except two nodes which have odd degrees.

Bearing in mind the video and particularly these rules, answer the questions in the next three sections.


## 2. Can you draw it with a single line?

::: problem id=2_1 marks=1
![](/resources/8-28-seven-bridges-konigsberg/2-network-1.png){image align="right"}
__2.1.__

* [x] Yes
* [ ] No

---

Exactly two nodes (on the left and right) have an odd degree.
:::

::: problem id=2_2 marks=1
![](/resources/8-28-seven-bridges-konigsberg/2-network-2.png){image align="right"}
__2.2.__

* [x] Yes
* [ ] No

---

Exactly two nodes (at the upper corners of the square) have an odd degree.
:::

::: problem id=2_3 marks=1
![](/resources/8-28-seven-bridges-konigsberg/2-network-3.png){image align="right"}
__2.3.__

* [ ] Yes
* [x] No

---

Four nodes have an odd degree, so this network cannot be drawn with a single line.
:::

::: problem id=2_4 marks=1
![](/resources/8-28-seven-bridges-konigsberg/2-network-4.png){image align="right"}
__2.4.__

* [x] Yes
* [ ] No

---

With the addition of the new line segment, two of the odd degree nodes become even degree nodes. Now only two of the nodes have an odd degree, so yes, this network can be drawn with a single line.
:::


## 3. What’s behind the splodge?

::: problem id=3_1 marks=2
__3.1__ This network can be drawn with a single line. Unfortunately, I spilt some ink on it, so you cannot see the part of the network on the left. What do you know for sure about the hidden part of the network?

![](/resources/8-28-seven-bridges-konigsberg/3-splodge.png){image align="center"}

* [ ] All the nodes must have an odd degree.
* [ ] All the nodes must have an even degree.
* [ ] All the nodes must have an even degree, except two odd degree nodes.
* [x] We cannot be certain of any of the above.

---

All the visible nodes have an even degree. The network can be drawn with a single line, so the hidden part must have all even nodes... or all even except for two odd nodes.
:::


## 4. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (10) --->

::: problem id=4_1 marks=2
![](/resources/8-28-seven-bridges-konigsberg/4-pentagon-question.jpg){image align="right"}
__4.1.__ You want to draw the shape on the right without taking your pen off the paper and without going over any line more than once?  

Where should you start?

* [ ] Only at `T` or `Q`
* [ ] Only at `P`
* [x] Only at `S` or `R`
* [ ] At any point
* [ ] The task is impossible

---

The nodes (sometimes called vertices) have the following degrees or numbers of connected lines (sometimes called edges):

* P = 4  
* Q = 2  
* R = 3  
* S = 3  
* T = 2  

From the previous section, we know that a network can only be drawn with a single line if every node has an even number of connected lines... unless there are exactly two nodes with an odd number of lines. The two nodes with an odd number of lines must be the start and end nodes, because otherwise the lines come in pairs (in and then out). Please refer back to the previous section and the video if this does not make sense.

There are several ways to draw the diagram starting at `R` without taking the pen off the paper or going over a line more than once. Here is one example of such a path:

`R` → `P` → `S` → `R` → `Q` → `P` → `T` → `S`.
{.text-center}  

If we reverse this path, we have a way to draw the diagram starting at `S`.  
:::


## 5. Junior Maths Challenge Problem (UKMT)
<!--- 2011 (13) --->

::: problem id=5_1 marks=2
__5.1__ What is the mean of `2/3` and `4/9`?

* [ ] `1/2`
* [ ] `2/9`
* [ ] `7/9`
* [ ] `3/4`
* [x] `5/9`
{.col-5}

---

The mean of two numbers, `a` and `b`, is the average `1/2` `(a + b)`. Hence the mean of `2/3` and `4/9` is:

`1/2` `(2/3 + 4/9)` = `1/2` `((6 + 4)/9)` = `1/2` `(10/9)` = `5/9`.
:::


## 6. Joseph's Most Complex Machine Ever!

If you scroll down, you will see one of my favourite YouTube videos, which features a complex machine designed to serve cake. It is the work of the crazy inventor Joseph Herscher.

::: problem id=6_1 marks=1
__6.1.__ While you watch it, can you see what makes it easier for the block of butter to slide down the ramp?

* [ ] A spring pulls the butter across.
* [x] A candle melts the butter.
* [ ] A hammer hits the butter.
* [ ] The butter is suspended from a rope.
:::

::: problem id=6_2 marks=1
__6.2.__ Why does the paddle wheel not hit Joseph?

* [ ] Joseph ducks just in time.
* [ ] The wheel is blocked by a wall.
* [ ] A bowling bowl redirects the wheel.
* [x] The wheel is missing a section.
:::

@[youtube](auIlGqEyTm8?rel=0&end=111)


## 7. Harry Hill’s discovery

The great scientist and comedian Harry Hill made the following startling observation:
“It's only when you look at an ant through a magnifying glass on a sunny day that you realize how often they burst into flames.”



Before you hit the SUBMIT button, here are some quick reminders:

*	You will receive your score immediately, and collect your reward points.
*	You might earn a new badge... if not, then maybe next week.
*	Make sure you go through the solution sheet – it is massively important.
*	A score of less than 50% is ok – it means you can learn lots from your mistakes.
*	The next Parallelogram is next week, at 3pm on Thursday.
*	Finally, if you missed any earlier Parallelograms, make sure you go back and complete them. You can still earn reward points and badges by completing missed Parallelograms.

Cheerio,
Simon.



## Additional Stuff

In this video, Joseph reveals some of the tricks behind his video.

@[youtube](ulL0uKBX0wQ?rel=0) _(If you have any problems watching the video then just right click and open it in a new window)_

Hopefully you’ll see lots of the Sun over the summer, but I bet it will never look like this. Our Sun is so hot that it emits X-rays, as shown by this photo taken by Japan’s Yohkoh Soft X-ray Telescope. The surface of the Sun has a temperature of thousands of degrees, which is not hot enough to generate X-rays, but the atmosphere of the Sun is millions of degrees hotter and this so-called corona is the origin of the X-rays. Why is the atmosphere so much hotter than the surface of the Sun? Nobody fully understands, but the Sun’s magnetic field is probably responsible. This picture comes from NASA’s [Astronomy Picture of the Day website](https://apod.nasa.gov/apod/){target="_blank"}, which is worth checking out every morning.

![](/resources/8-28-seven-bridges-konigsberg/additional-apod.gif){image align="centre"}
