---
title: "Numerical stability of Rayleigh Benard convection at high Rayleigh numbers"
date: 2023-06-28T15:06:30-04:00
categories:
  - blog
tags:
  - Rayleigh Benard
  - Navier Stokes
  - Partial diffirential equations
  - Numerical Methods
---


Rayleigh Benard convection is known to be unstable for $Ra > 10^7$. Moreover, the closer that we get to $10^9$ more likely it is for our implicit system to get singular and therefore unsolvable. If the system is solvable it is also likely to be wrong. Many solutions have been proposed, but the one that caught my eye is called a hyperviscosity solution. The solutions state that the turbulent Navier Stokes schemes can be solved by adding additional higher-order artificial viscosity terms.

## System of PDEs

Let $$\Omega \subset \mathbb{R}^2$$ be a bounded smooth domain. The following system of strong partial differential equations is considered

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

## Higher Order Laplacians

Let $$\nabla^4$$ be a second order laplacian and let $ f: \mathbb{R}^2 \to \mathbb{R} $. One can calculate it as such

$$
  \nabla \cdot \nabla(\nabla \cdot \nabla f) = \\
  \nabla \cdot \nabla (\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} ) = \\
  \nabla \cdot \begin{bmatrix}
\partial_{xxx} f + \partial_{yyx} f\\
\partial_{xxy} f + \partial_{yyy} f
\end{bmatrix} = \\
   \frac{\partial^4 f}{\partial x^4} + \frac{\partial^4 f}{\partial y^2 \partial x^2}  + \frac{\partial^4 f}{\partial x^2 \partial y^2} + \frac{\partial^4 f}{\partial y^4}
$$

Theorem 1: Let $\alpha$ be a laplacian order and let $f: \mathbb{R}^k \to \mathbb{R}$ be a function such that $f \in C^n(\mathbb{R}^k)$. One can prove that the higher order laplacian is obtained by

$$
  \nabla^\alpha = \prod^\alpha_{i=0}  \binom{\alpha}{i} \frac{\partial}{\partial x_{i\mod k}} \frac{\partial}{\partial x_{i\mod k}}}
$$

## Numerical derivation

I will use a generalized finite difference scheme for the numerical approximation. We are looking for a discrete differential operator $\mathcal{L}$. For every 
$$
\begin{equation}
  (\mathcal{L}m_k)(p) \approx \sum^{n}_{i=1} w_i m_k(x_{p,i})
\end{equation}
$$

The weights are pre-obtained for every $x_i$. For approximating higher-order terms one would need a larger set of stencil points. For example approximating higher order Laplace operators $\nabla^\alpha$, using monomials at point $p$ looks like

$$
\begin{equation}
  \frac{\partial^\alpha u_k}{ \partial x_j^\alpha} (p) \approx \sum^{n}_{i=1} w_i m_k(x_{p,i})
\end{equation}
$$

The issue itself comes from the fact that one would need more stencils to approximate 4th-order derivatives. A great stencil neighborhood for approximating first-order derivatives consists of 9 closest discrete points. Thus, approximation of the n-th order derivative would require a stencil neighborhood of $9^n$ discrete points. While the issue is not obvious at first, we can see that if one would approximate such derivatives at the boundary a lot of ghost points would be needed.
