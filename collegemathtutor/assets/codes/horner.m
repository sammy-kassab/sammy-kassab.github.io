function [y,z] = horner(a,x)

  n=length(a);
  y=a(1);
  z=a(1);
  for j=2:n-1
    y = x*y + a(j);
    z = x*z + y;
  end
  y = x*y + a(n);
