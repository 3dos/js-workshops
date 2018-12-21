# TDD Workshop

## Problem to solve

We want to develop a function which will strip away sections from a URL.

## Specs

* Given `'some/path'` should return `'path'`
* Given `'some/path(/:keepme)'` should return `'path(/:keepme)'`
* Given `'some/path(/:keepme)(/:andme)'` should return `'path(/:keepme)(/:andme)'`
* Given `'some/path/(:keepme)` should return `'path(/:keepme)'`
* Given `'unchanged'` should return `'unchanged'`
* Given `'unchanged/'` should return `'unchanged/'`

## Exercice

Write a function using TDD. What is important here is writing the tests _before_ implementing their solution.

Remember to write a test, see it fail and just give the most simple solution to it until your function is fully implemented.

One your function is working properly, it's your choice to make it better through refactoring. This is where your test suite will come in handy and ensure you're not breaking code while refactoring.
