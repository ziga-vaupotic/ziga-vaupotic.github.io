---
title: "Numerical stability of Rayleigh Benard convection at high Rayleigh numbers"
date: 2023-06-28T15:06:30-04:00
categories:
  - blog
tags:
  - Rayleigh Benard
  - Numerical Methods
---


Rayleigh benard convection is known to be unstable for $Ra > 10^7$. Moreover closer that we get to $10^9$ more likely it is for our implicit system to get singular and therefore unsolvable. If the system is solvable it is also likely to be wrong. Many solutions have been proposed, but the one that cought my eye is called a hyperviscosity solution. The solutions states that the turbulent Navier Stokes schemes can be solved by adding additional higher order arificial viscosity term.

Let $$\Omega \subset \mathbb{R}^2$$ be a bounded smooth domain. The following system of strong partial diffirential equations is cosidered

$$
\begin{equation}
\left\{ \begin{aligned} 
  \frac{Du}{Dt} &= -\frac{1}{\rho_0} \nabla p +  \mu \nabla^2 u + g \hat{j} \beta (T-T_{ref}) + \epsilon \nabla^4 u\\
 \nabla \cdot u &= 0\\
 \frac{DT}{D t} &= \frac{\lambda}{ \rho Cp}\nabla^2T
\end{aligned} \right.
\end{equation}
$$

$\epsilon$ is considered to be small. 

I will use a generalized finite difference scheme for the numerical approximation. We are looking for a discrete diffirential operator $\mathcal{L}$. For every 

$$
\begin{equation}
  (\mathcal{L}m_k)(p) \approx \sum^{n}_{i=1} w_i m_k(x_{p,i})
\end{equation}
$$

The weights are pre-obtained for every $x_i$. For approximating higher order terms one would need a larger set of stencil points. For example approximating higher order laplace operators $\nabla^\alpha$, using monomials at point $p$ looks like

$$
\begin{equation}
  \frac{\partial^\alpha u_k}{ \partial x_j^\alpha} (p) \approx \sum^{n}_{i=1} w_i m_k(x_{p,i})
\end{equation}
$$

The issue itself comes from the fact that one would need more stencils to approximate 4th order derivatives. A great stencil neighborhood for approximating first order derivatives consist of 9 closest discrete points. Thus, approximation of n-th order derivative would require a stencil neighberhood of $9^n$ discrete points. While the issue is not obvious at first, we can clearly see that if one would approximate such derivatives at boundary a lot of ghost points would be needed.