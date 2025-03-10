---
title: "再帰方程式"
date: "2025-03-01"
tags: ["再帰方程式","差分方程式"]
---
自分自身を呼び出すような関数を再帰関数と呼ぶ。再帰関数を含む方程式を再帰方程式と呼ぶ。

数学的な形は差分方程式とほとんど変わらない。$a_{n+1}-a_n=x$のように差分だけを取り出すとき、差分方程式と呼び、$a_{n+1}=a_n+x$のように$n+1$のときの値を説明しているようなとき再帰方程式と呼ぶことが多い。

ただし参考書、ソフトウェアでどちらを主に扱っているかは異なる。書籍では差分方程式と呼ぶことが多い。なお差分方程式の場合には微分方程式との対比が考えられる場合が多いが再帰方程式はそうでもない。

### Mathematica

#### 数値解

具体的な数値解をMathematicaで求める方法。[RecurrenceTable](https://reference.wolfram.com/language/ref/RecurrenceTable.html?q=RecurrenceTable)を使う。

#### 解析解



### 参考

- [うさぎでもわかる再帰関数のいろは](https://www.momoyama-usagi.com/entry/info-algo-saiki) 2025/03/06閲覧
- [Mathematica RSolve](https://reference.wolfram.com/language/ref/RSolve.html) 2025/03/06閲覧
- [Mathematica RecurrenceTable](https://reference.wolfram.com/language/ref/RecurrenceTable.html?q=RecurrenceTable)2025/03/06閲覧

