---
title: "Numerical stability of Rayleigh Benard convection at high Rayleigh numbers"
date: 2023-06-28T15:06:30-04:00
categories:
  - blog
tags:
  - Rayleigh Benard
  - Numerical Methods
---


Rayleigh benard convection is known to be unstable for $Ra > 10^7$. Moreover closer that we get to $10^9$ more likely it is for over implicit system to get singular and therefore unsolvable. If the system is solvable it is also likely to be wrong. Many solutions have been proposed, but the one that cought my eye is called a hyperoviscosity solution. The solutions states that the turbulent Navier Stokes schemes can be solved by adding additional higher order arificial viscosity term.

Let $$\Omega \subset \mathbb{R}^2$$ be a bounded smooth domain. The following system of strong partial diffirential equations is cosidered

$$
\begin{equation}
\left\{ \begin{aligned} 
  \frac{Du}{Dt} &= -\frac{1}{\rho_0} \nabla p +  \mu \nabla^2 u + g \hat{j} \beta (T-T_{ref})\\
 \nabla \cdot u &= 0\\
 \frac{DT}{D t} &= \frac{\lambda}{ \rho Cp}\nabla^2T
\end{aligned} \right.
\end{equation}
$$
