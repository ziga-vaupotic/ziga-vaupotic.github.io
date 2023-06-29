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
In computational fluid dynamics, one of four methods is usually used. Namely, Finite Difference Method (FDM), Finite Element Method (FEM), Finite Volume Method (FVM) and Spectral Methods (SM). Many consider FDM to be the easiest and while this is mainly true, the FDM method has a bit of an issue with complex and unordinary grids. Hence, I believe that instead of FDM, one should use FVM.
### Finite Volume Method
In this section, we will go through steps to numerically solve a PDE using FVM. Firstly, we must discretize a smooth bounded domain $\Omega$ in $n$ control volumes. The control volumes must not overlap each other (this will be important later on). Let $v_1, v_2, ..., v_n$ denote a control volume. The following must therefore be true

$$
\begin{equation}
  \bigcup_{i=1}^{n} v_i = \Omega \quad \bigcap_{i=1}^{n} v_i = \emptyset
\end{equation}
$$

While not obvious at first, we integrate each term over the control volume. This has to be done since the key factor of this method is to establish a local conservativity. If we use a divergence theorem, we quickly notice that some important terms of integrals can be generalized into surface integrals. Thus, the method implies that the output and input fluxes of the control volume must equal 0. Furthermore, this fact by the continuity theorem concludes local conservativity, since the fluxes are not overlapping. Let us consider the following PDE

$$
  \frac{\partial u}{\partial t} + (u \cdot \nabla) u = \mu \nabla^2 u
$$

Integrating over each control volume gives us

$$
  \int_V \frac{\partial u}{\partial t} dV + \int_V (u \cdot \nabla) u dV =  \int_V \mu \nabla^2 u dV
$$

Using divergence theorem the integrals become ($\partial V = \Gamma$)

$$
\begin{equation}
  \int_V \frac{\partial u}{\partial t} dV + \oint_\Gamma 
\end{equation}
$$

## Connection between FVM and FDM




