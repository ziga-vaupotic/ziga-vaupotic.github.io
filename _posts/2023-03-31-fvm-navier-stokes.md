---
title: "Simple FVM scheme for solving Navier-Stokes equations"
date: 2023-03-31T18:21:30-04:00
categories:
  - blog
tags:
  - Navier-Stokes
  - Partial diffirential equations
  - Numerical Methods
---
### Introduction
In computational fluid dynamic one of four methods is usually used. Namely, Finite Difference Method (FDM), Finite Element Method (FEM), Finite Volume Method (FVM) and Spectral Methods (SM). Many consider FDM to be the easiest and while this is mainly true, the FDM method has a bit of an issue with complex and unordinary grids. Hence, I believe that instead of FDM, one should use FVM.
### Finite Volume Method
In its purest form FVM is an alghoritem that discretizes smooth bounded domain $\Omega$ in $n$ control volumes. The control volumes must not overlap each other (this will be important later on). Let $v_1, v_2, ..., v_n$ denote a control volume. The following must therefore be true

$$
\begin{equation}
  \bigcup_{i=1}^{n} v_i = \Omega \quad \bigcap_{i=1}^{n} = \emptyset
\end{equation}
$$




