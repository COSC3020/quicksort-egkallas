[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Worst case runtime for this version of quicksort is $\Theta(n^2)$;
If the pivot chosen is the largest or smallest element in the array, it leads to every element needed to be compared and then sorted around it. If every element in the array needs a comparison and a swap, this is $\Theta(n^)$ This can happen in both this iterative implementation and the recursive implementation, so both have the same worst case runtime. 
