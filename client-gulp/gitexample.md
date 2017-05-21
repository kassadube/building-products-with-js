
push working branch to the master branch
----------------------------------
git checkout master
git pull               # to update the state to the latest remote master state
git merge develop      # to bring changes to local master from your develop branch
git push origin master # push current HEAD to remote master branch
----------------------------------------

create new working branch
--------------------------------------

git checkout -b livestream10 
git push --set-upstream origin livestream10 

after doing that need to make change

--------------------------------------