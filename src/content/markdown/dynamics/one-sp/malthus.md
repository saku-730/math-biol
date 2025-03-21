---
title: "マルサス型増殖"
date: "2025-03-01"
tags: ["マルサス型増殖"]
---

## マルサス型増殖の導出

一種類だけの[個体群](/glossary#glossary/population)を考える。この個体群が子孫を作り出すことでどのように個体数が変化するかを考えるのが個体群動態の第一歩である。

ここで個体群中の個体数を$N$とする。まだ時刻を$t$とする。これらの変数の設定は生物学で一般的である。

時刻$t$における個体数を$N(t)$とかける。個体数は時刻によって決まる、つまり個体数は時刻の関数である。そのため$N$を$t$(とその他の変数)で表すことが目的である。表すことができれば個体群の変化、動態を予測することが可能になる。

個体群の変化速度(割合)を$r$で表し、以下のように考える。

$$
\frac{dN}{dt}=Nr ...(1)
$$

ここで$\frac{dN}{dt}$は個体数を時間で微分したものである。つまり、時間によって個体数の変化率である。$t$が1から2に変化したときに個体数がどのくらい変化するか、ということである。

$r$が0であれば個体数は変化せず、正の数であれば個多数が増加し負の数であれば個体数が減少する。

## マルサス型増殖の解と解釈

ここで(1)は$N$という$t$の関数を求める微分方程式である。次の用に変数分離法で解ける。


$$
\begin{aligned}
\frac{dN}{dt}&=Nr\\[10pt]
\frac{1}{N}\frac{dN}{dt}&=r ：変数分離するためにNを左辺に集める\\[10pt]
\int\frac{1}{N}\frac{dN}{dt} dt&=\int r dt ：両辺をtで積分する \\[10pt]
\int \frac{1}{N}dN &= rt+C ：変数変換(置換積分公式)により左辺が簡単にかける。\\[10pt]
\log|N|&=rt+C \\
N&=e^{rt+C} \\
N&=C'e^{rt}...(2)
\end{aligned}
$$

ここで$C,C'$は積分定数である。初期条件として$t=0$のとき$N=N_0$としよう。(2)に$t=0$を代入すると

$$
N_0=C'
$$

これによって(2)は次のようにかける。

$$
N(t)=N_0e^{rt}...(3)
$$

$N(t)$というのは$t$の関数であるためである。(3)を図示すると次のようになる。横軸は世代、縦軸は世代$t$のときの個体数である。


<iframe src="http://localhost:3838/dynamics/one-sp/malthus" style="width: 100%; height: auto; aspect-ratio: 3 / 2; border: none;"></iframe>

図1では$N_0=10$として$-3≦r≦3$である。$r$の値によって増加するか、減少するか、一定かが変わることがわかる。また値が大きいほど増殖の勢いは大きくなる(小さいときも同様である)。

$r$の値が小さいとしても急激に増加/減少することがわかるだろう。このような増殖を指数関数的増殖、またはマルサス(Malthus)型増殖と呼ぶ。(3)の$r$をマルサス(Malthus)係数という。

$r$が正のときは生物個体群が増殖している過程、負のときは絶滅に向かって個体群が減少している過程、0のときには個体群の消滅と誕生が釣り合っている状態といえる。一般に生物は環境、天敵などの制限要因がなければ$r$が正のときの指数関数的増殖を行いこれを内的自然増加率と呼ぶ。

ねずみ算式に増えていく、というのはこれのことである。

----

## Thomas Robert Malthus

![alt text](/img/dynamics/one-sp/Thomas_Malthus.jpg)

マルサス型増殖、マルサス係数はイギリス人経済学者の Thomas Robert Malthus にちなんだものである。マルサスの人口論はチャールズ・ダーウィンが進化論を思いつくきっかけになったとも言われる。

----

## 参考文献

- [1]
- 
