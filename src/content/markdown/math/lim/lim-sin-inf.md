---
title: "lim sinθ/θ"
date: "2025-03-18"
tags: ["極限","三角関数","sin"]
---
$$
\lim_{\theta \to \infty} \frac{sin\theta}{\theta}=0　の証明、解法
$$

$$
\begin{aligned}
0 \leqq |sin\theta | &\leqq 1　 \therefore\\
\left|\frac{sint\theta}{\theta}\right| &\leqq \frac{1}{\theta}　はさみうちの定理により\\
\lim_{\theta \to \infty} \left|\frac{sin\theta}{\theta}\right|&=0\\
\lim_{\theta \to \infty} \frac{sin\theta}{\theta}&=0
\end{aligned}
$$

絶対値を取っているのは大小関係の場合分けが無駄に増えるのを防ぐため。

絶対値がないと次のようになる。

$$
\begin{aligned}
-1 \leqq sin\theta  &\leqq 1　 \therefore0\leqq\thetaのとき\\
-\frac{1}{\theta} \leqq sin\theta  &\leqq \frac{1}{\theta} ...(1)
\end{aligned}
$$

(1)は$0\leqq\theta$のときのみ成立しており$\theta=0,\theta<0$のときは別で同じようにやる必要がでてきてしまう。
