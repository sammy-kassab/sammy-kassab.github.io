function [p,n] = fixedpt(g,p0,tol)

  for n=1:100
    p=g(p0);
    if abs(p-p0)<tol, break; end
    p0=p;
  end
