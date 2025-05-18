# leetcode
class Solution(object):
    def isValid(self, s):
        array = []
        for char in s:
            if char == "(" or char == "[" or char == "{":
                array.append(char)
            elif char == ")" and array[-1] == "(":
                array.pop()
            elif char == "]" and array[-1] == "[":
                array.pop()
            elif char == "}" and char[-1] == "{":
                array.pop()
            else:
                return False