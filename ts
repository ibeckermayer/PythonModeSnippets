# -*- mode: snippet -*-
# The skeleton of a test suite in python
# name: Python Test Suite
# key: ts
# type: snippet
# contributor: ibeckermayer
# --
import unittest
${1:func} = __import__('${2:module_name}').$1

class TestFunc(unittest.TestCase):
\"\"\"Test $1 from $2
\"\"\"$0

    def test_func_empty(self):
        \"\"\"Test that the max of an empty list
        \"\"\"
        result = $1()
        self.assertIsNone(result)

    def test_func_err(self):
        \"\"\"Testing with an error
        \"\"\"
        self.assertRaises(TypeError, lambda: $1(1))

    def test_func_1(self):
        \"\"\"Test for list with length 1
        \"\"\"
        result = $1([1])
        self.assertEqual(result, 1)


if __name__ == '__main__':
    unittest.main()
