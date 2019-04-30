function [p,n] = newton(f,df,p0,tol)

  for n=1:100
    p = p0 - f(p0)/df(p0);
    if abs(p-p0)<tol, break; end
    p0 = p;
  end
