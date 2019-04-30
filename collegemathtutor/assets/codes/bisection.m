function [p,n] = bisection(f,a,b,tol)

  for n=1:100
    p = (a+b)/2;
    if abs(p-a)<tol || abs(b-p)<tol || f(p)==0, break; end
    if f(a)*f(p) > 0
      a=p;
    else
      b=p;
    end
  end
