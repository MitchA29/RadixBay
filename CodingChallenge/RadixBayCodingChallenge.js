/*

Given a string of round, curly, and square open and closing brackets,

return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.

*/

 
const isBalanced = (str) => {
    let stack = []
    let char

	for (let i = 0; i < str.length; i++) {
		char = str.charAt(i);

		if (char == "("||char == "{"||char == "[") {
			stack.push(char);
		}
		else {
            if (char == ")" && stack.pop() != "(") {
                return false;
            }else if (char == "}" && stack.pop() != "{") {
                return false;
            }else if (char == "]" && stack.pop() != "[") {
                return false;
			}
		}
	}
    if (stack.length > 0) {
        return false;
    }else{
        return true;
    }
}

console.log(isBalanced("([])[]({})"));

console.log(isBalanced("([)]"));

console.log(isBalanced("((()"));