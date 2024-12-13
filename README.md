This repository contains a Javascript function that has an uncommon error. The function is supposed to return a/b, but it returns 0 when a and b are both 0. This is because the if statement does not handle the case when a and b are both 0. The solution is to add another condition to the if statement to handle this case. This bug is easily missed, it is only triggered in some specific conditions. This makes it a good example of an uncommon Javascript bug.