# _Year 8 • Parallelogram 14_ The Seven Bridges of Konigsberg

<div class="dictionary">

__Noun__: Parallelogram
__Pronunciation__: /ˌparəˈlɛləɡram/

1. a portmanteaux word combining parallel and telegram. A message sent each
week by the Parallel Project to bright young mathematicians.

</div>

This is the final parallelogram of the school year. If you score highly enough in the last 4 Parallelograms (12, 13, 14 & this one) by June 1, __then you will receive a Parallel certificate__. An average of more than 40% in these four Parallelograms wins a bronze certificate, then 60% or more wins silver and 80% or more wins gold.

* Start and stop whenever you like – your work will be saved each time.
* But it is better to tackle each Parallelogram in one go.
* Complete by 7pm Sunday if your whole class is doing Parallelograms.
* Return after 7pm on Sunday to find your score, answers and explanations.
* Make sure you complete every challenge and hit the SUBMIT button.

__IMPORTANT__ – it does not really matter what score you get, because the main thing is that you think hard about the problems... and then learn where you went wrong when the answer sheet appears.


## 1.	The Seven Bridges of Königsberg

![](/resources/8-15-seven-bridges-konigsberg/1-seven-bridges.png){image align="right"}
Last week, we had a problem that involved drawing this house with just one single line. [If you haven’t completed last week’s Parallelogram then go back and have a go](/8-14-ada-lovelace){target="_blank"}.

This week we’ll look at a video that explains the origin of this type of problem and how you can solve such puzzles.

@[youtube](nZwSo4vfw6c?rel=0)

To summarise:
* a network is a collection of lines meeting at “nodes”.
* the number of lines meeting at a node is called the “degree” of the node.
* if a  network can be drawn with a single line, you typically have to enter each node and exit eacg node, so the degree of any node is going to be even.
* the only exception is if you start at one node and end at another node, in which case only those two nodes are allowed to have an odd degree.
* if you start and finish at the same node, then all nodes have to have an even degree.

To really summarise, a network can only be drawn with a single if:
* every node has an even degree.
* every node has an even degree, except two nodes with odd degrees.

Bearing in mind the video and particularly these rules, answer the questions in the next three sections.


## 2. Can you draw it with a single line?

::: problem id=2_1 marks=1
![](/resources/8-15-seven-bridges-konigsberg/2-network-1.png){image align="right"}
__2.1.__

* [x] Yes
* [ ] No

---

Exactly two nodes (on the left and right) have an odd degree.
:::

::: problem id=2_2 marks=1
![](/resources/8-15-seven-bridges-konigsberg/2-network-2.png){image align="right"}
__2.2.__

* [x] Yes
* [ ] No

---

Exactly two nodes (at the upper corners of the square) have an odd degree.
:::

::: problem id=2_3 marks=1
![](/resources/8-15-seven-bridges-konigsberg/2-network-3.png){image align="right"}
__2.3.__

* [ ] Yes
* [x] No

---

Three nodes have an odd degree, so this network cannot be drawn.
:::

::: problem id=2_4 marks=1
![](/resources/8-15-seven-bridges-konigsberg/2-network-4.png){image align="right"}
__2.4.__

* [ ] Yes
* [x] No

---

Only one node has an odd degree, so this network cannot be drawn.
:::


## 3. What’s behind the splodge?

::: problem id=3_1 marks=2
__3.1__ This network can be drawn with a single line. Unfortunately, I spilt some ink on it, so you cannot see the part of the network on the left. What do you know for sure about the hidden part of the network?

![](/resources/8-15-seven-bridges-konigsberg/3-splodge.png){image align="center"}

* [ ] All the nodes must have an odd degree.
* [ ] All the nodes must have an even degree.
* [ ] All the nodes must have an even degree, except two odd degree nodes.
* [x] We cannot be certain of any of the above.

---

All the visible nodes have an even degree. The network can be drawn with a single line, so the hidden part must have all even nodes... or all even except for two odd nodes.
:::


## 4. Junior Maths Challenge 2011 (10)

::: problem id=4_1 marks=2
![](/resources/8-15-seven-bridges-konigsberg/4-pentagon-question.jpg){image align="right"}
__4.1.__ You want to draw the shape on the right without taking your pen off the paper and without going over any line more than once?  

Where should you start?

* [ ] Only at `T` or `Q`
* [ ] Only at `P`
* [x] Only at `S` and `R`
* [ ] At any point
* [ ] The task is impossible

---

There are several ways to draw the diagram starting at `R` without taking the pen off the paper or going over a line more than once. Here is one example of such a path:

`R` → `P` → `S` → `R` → `Q` → `P` → `T` → `S`.
{.text-center}  

If we reverse this path, we have a way to draw the diagram starting at `S`.  

How can we be sure that there are no other possible starting points? Notice that each time the path goes through a vertex it uses up two of the edges that have that vertex as one of their endpoints. We use the technical term _degree_ of a vertex, for the number of edges that have that vertex as one of its endpoints. Since the path uses each edge just once, the degree of each vertex must be even (twice the number of times the path goes through the vertex), except for the case where the path starts at one vertex and ends at a different vertex, when these two vertices have degrees that are odd numbers (twice the number of times the path goes through the vertex plus one for the initial or final edge of the path). The degrees of the five vertices in the diagram are shown in the table.

| Vertex | Degree |
| ------ | ------ |
| `P`    | 4      |
| `Q`    | 2      |
| `R`    | 3      |
| `S`    | 3      |
| `T`    | 2      |

We see that there are just two vertices, `R` and `S`, whose degrees are odd numbers. So `R` and `S` must be the endpoints of any path which goes along each edge once, and drawing which does not involve taking your pen off the paper.

We have seen that a _necessary_ condition that we can draw a diagram made up of lines joining points in this way is that _there are at most two vertices whose degrees are odd numbers_.

In fact, it turns out that this condition is also sufficient. So we can draw a diagram of this kind without taking our pen off the paper and without going over any line more than once, if and only if, there are at most two vertices whose degrees are odd numbers. The proof of this, while not very difficult, takes some care.

This problem has its origin in the Königsberg Bridge Problem. You will find it discussed in many books; for example, in Robin Wilson’s book _Introduction to Graph Theory_ where it comes under the heading of Eulerian graphs.
:::


## 5. Junior Maths Challenge 2011 (13

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

This is one of my favourite YouTube videos, which features a complex machine designed to serve cake. It is the work of the crazy inventor Joseph Herscher.

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
* [x] The wheel is missing section.
:::

@[youtube](auIlGqEyTm8?rel=0&end=111)


## 7. Harry Hill’s discovery

The great scientist and comedian Harry Hill made the following startling observation:
“It's only when you look at an ant through a magnifying glass on a sunny day that you realize how often they burst into flames.”


***

And that’s the end of Parallelograms for this school year. To have a chance of earning your Parallel certificate, make sure you have completed Parallelograms 12, 13, 14 and 15 by June 1st.

In the meantime, you can go through the answer sheet after 7pm on Sunday, but first remember to hit the SUBMIT button below, and then maybe take a look at the “Additional Stuff” section.

And... don’t be cruel to ants!

Have a great summer. Parallel will be back in September. Thanks for taking part.

Cheerio,
Simon.

::: submit


## Additional Stuff

* In this video, Joseph reveals some of the tricks behind his video.

@[youtube](ulL0uKBX0wQ?rel=0)

* Hopefully you’ll see lots of the Sun over the summer, but I bet it will never look like this. Our Sun is so hot that it emits X-rays, as shown by this photo taken by Japan’s Yohkoh Soft X-ray Telescope. The surface of the Sun has a temperature of thousands of degrees, which is not hot enough to generate X-rays, but the atmosphere of the Sun millions of degrees hotter and this so-called corona is the origin of the X-rays. Why the atmosphere so much hotter than the surface of the Sun? Nobody fully understands, but the Sun’s magnetic field is probably responsible. This picture comes from NASA’s [Astronomy Picture of the Day website](https://apod.nasa.gov/apod/){target="_blank"}, which is worth checking out every morning.

![](/resources/8-15-seven-bridges-konigsberg/additional-apod.gif){image align="centre"}
