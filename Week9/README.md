
# Developing Locally: Terminal, IDEs, & GitHub

Link to [lecture slides](https://docs.google.com/presentation/d/1Hl067WdQl-gck1nUBMkbV2zJwt5NjJj6OiHhNhntZ4s/edit#slide=id.p).


### Terminal Cheat Sheet

To change directory into a folder:

	cd "name of folder" 

To go one level up:

	cd ".." 

To see what's in the current folder:

	ls 

To go back to your desktop:

	cd ~/Desktop  

To make a new folder:

	mkdir "name of folder" 

To make a new text file:

	touch "nameoffile.txt" 

To make a new text file called kitty.txt with the words "woof woof" in it:

	echo "woof woof" > kitty.txt 

Open a text file:
	
	open "nameoffile.txt" 

Read the text file in terminal:

	cat "nameoffile.txt" 

Open a folder in finder * Macs:

	open "nameoffolder" 

Open a folder in file explorer * PC:

	explorer "nameoffolder" 

Delete a folder or file (BE VERY CAREFUL! YOU CAN'T UNDO):

	rm -rf "nameoffolder" 

Open Finder Window (mac):

	open .

### Python HTTP Server:

Run an local server:

	python3 -m http.server 8000

Then go to http://localhost:8000/ on a web browser.


- https://ryanblunden.com/create-a-http-server-with-one-command-thanks-to-python-29fcfdcd240e 

- https://www.digitalocean.com/community/tutorials/python-simplehttpserver-http-server 


### Installing Python:

You might need to install Python and HomeBrew 
- https://docs.python-guide.org/starting/install3/osx/

### Notes on Ports:

- https://www.techtarget.com/searchnetworking/definition/port-number#:~:text=Localhost%20is%20the%20default%20name,using%20a%20loopback%20address%20network




### Boiler Plate HTML:

- https://html5boilerplate.com/ 





### Git:

- https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html

- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

- https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github




### Notes on Terminal errors:

- https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal

- https://stackoverflow.com/questions/25233133/launch-sublime-text-3-in-terminal-with-zsh


### Git when you are starting a new repo:

	git init
	git add README.md
	git branch -M main
	git remote add origin https://github.com/<user name>/<repo name>
	git add -A 
	git status
	git commit -m "first commit" 
	git push -u origin main


### Git when you have an existing repo you want to add code to:

	git add -A  
	git status    
	git commit -m "comment"
	git push -u origin main  



### Git Desktop:

This is the link to the desktop version:
- https://desktop.github.com/


### Git Manual Download:

If you want to download one folder rather than an entire repo:

- https://download-directory.github.io/

