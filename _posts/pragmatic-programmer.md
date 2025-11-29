---
title: '[EN] The Pragmatic Programmer'
excerpt: 'Learnings extracted from the book "The Pragmatic Programmer".'
coverImage: '/assets/blog/covers/cover_2.webp'
date: '2025-11-06T19:54:00.000Z'
language: 'en'
author:
  name: Gustavo Mello
  picture: '/assets/blog/authors/gmello.jpeg'
ogImage:
  url: '/assets/blog/covers/cover_2.webp'
---

## Pragmatic Programmer

The book emphasizes the importance of the developer knowing about the business domain at various times, where programmers who understand the user and the pain point they are solving are capable of providing more effective solutions and code that better represents what the user needs.

_This leads me to think about how I can act to ensure that I and my developers learn more and more about the product we develop._

The book talks extensively about customer interaction and working with feedback cycles. Every feature needs to go through cycles where prototypes and examples of how to solve the customer's problem are shown to them. Getting quick and efficient feedback is the main key to building quality software.

Another point it brings up, and I believe it is one of the most important, is how we should be proud of the code we write. Being satisfied with the solution you conceived, prototyped, and validated through multiple customer interactions is what motivates the programmer.

_I wonder how I can get my team to take pride in their work, just as an artist signs their canvas upon finishing the piece._

In the book, he cites a few ways to achieve this goal, one of which is precisely the interaction with the customer. A good developer cares if the customer is satisfied with the solution delivered to them. _Here, the ideal is to analyze other ways to allow the team to be proud of the project._

Another very interesting thing the book brought up is how we programmers must be sure about what we develop. This certainty should come from different means, whether through automated tests focused on behavior — not lines of code — it should also come through constant and iterative feedback with the client, and mainly about how we should not blindly trust our intuition.

I say this from personal experience; I frequently find myself in situations where I am relying on my intuition, and when I need to explain why I am doing something in a certain way, I have difficulty expressing my intention. The motivation for this is simple: instead of thinking rationally about the problem I want to solve, I end up trusting my feelings about it.

**Be certain of what you are doing to the point where you can clearly and objectively explain why you are doing it and, above all, express that certainty in the code.**

Automate everything possible. This mantra repeats itself at several moments in the book. We live in a digital world, we are programmers, and we can build whatever we want.

Computers follow a precise execution queue that we define, and they are experts at following it. Unlike a human being, where a cake recipe presented to 100 people will result in 100 completely different cakes, for a computer, this is impossible.

We must be able to use this excellent predictability of computers to ensure that essential steps in our daily lives are always carried out with the perfect precision we expect them to occur with.

_Always look for ways to automate everything important in our day-to-day._

Automated tests need to test behavior, not lines of code. A very good example the author presents is a function that divides two numbers, x and y. It is an extremely small and easy-to-test function—insert infinite values, and you will get the result. However, if the denominator is 0, the function totally breaks. This means that tested lines are a metric that gives a good view of the system, but it is definitely not the most important one. **Tests should be created based on what that block is expected to do, not by what was written in it.**

Requirements documentation is the code. The book heavily emphasizes how important it is for us to follow the DRY principle. According to the author, repetition is one of the main reasons for projects to fail or become extremely difficult to change (along with coupling).

Highly detailed, or worse, extremely technical requirements documentation is a direct copy of what the code needs to represent, leading to scenarios where, for example, if an edge case is found, it will be necessary to change the code, the tests, and the documentation.

In other words, any change will be extremely costly, involving several files and perhaps even teams.

However, the bigger problem is not just the time spent; there is another factor that is even more serious. If the programmer forgets to change one of the locations, the information may become incorrect, leading other people to believe that a certain process occurs in a specific way, when in reality, it happens completely differently.
