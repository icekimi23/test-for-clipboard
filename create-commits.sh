#!/usr/bin/env bash

numberTest="7 8 9"
number="10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55"

for i in $number
do echo "HODOR-1: commit #$i" >> ./adapter/commits.txt; git add .; git commit -m "HODOR-1: commit #$i"
done