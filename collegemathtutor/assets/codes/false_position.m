function [p,n] = false_position(f,p0,p1,tol)

  for n=2:100
    p = p1 - (p1-p0)*f(p1)/(f(p1)-f(p0));
    if abs(p-p1)<tol, break; end
    if f(p)*f(p1) < 0, p0 = p1; end
    p1 = p;
  end
