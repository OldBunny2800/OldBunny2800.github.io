# Only runnable by someone with edit access to the git repository.
function newUser()
{
	if [ -n $1 ]
	then
		DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
		cd $DIR
		if [ -d $1 ]
		then
			echo "User already exists."
			exit 3
		else
			mkdir Users/$1
			mkdir CSS/Users/$1
			mkdir JS/Users/$1
			cat blankUserHTML.html > Users/$1/user.html
			cat blankUserCSS.css > CSS/Users/$1/user.css
			cat blankUserJS.js > JS/Users/$1/user.js
			echo "User $1 created. Remember to edit the HTML."
			git add Users/$1 CSS/Users/$1 JS/Users/$1
			git commit -m "User $1 automatically created."
			git push
		fi
	else
		echo "An argument is needed."
		exit 4
	fi
}