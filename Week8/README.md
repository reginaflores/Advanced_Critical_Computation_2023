
# Terminal and GitHub 


### Terminal Cheat Sheet

To change directory into a folder:

	cd "name of folder" 


	cd "../" go one level up
	ls see what's in the current folder
	cd ~/Desktop go back to your desktop 
	mkdir "name of folder" make a new folder
	touch "nameoffile.txt" make a new text file
	echo "woof woof" > kitty.txt make a new text file called kitty.txt with the words "woof woof" in it
	open "nameoffile.txt" open the text file
	cat "nameoffile.txt" read the text file in terminal
	open "nameoffolder" open the folder in finder * Macs
	explorer "nameoffolder" open the folder in file explorer * PC
	rm -rf "nameoffolder" delete a folder or file (BE VERY CAREFUL! YOU CAN'T UNDO)




### Python HTTP Server:

Run an local server:

	python3 -m http.server 8000

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


### Git when you have an existing repo:

	git add -A  
	git status    
	git commit -m "comment"
	git push -u origin main  



### Git Manual Download:

If you want to download one folder rather than an entire repo:

- https://download-directory.github.io/

