# Preliminary design

## Components for Swift Code Blocks

### Import SwiftUI Block:
* This block is meant to be the first block to be inputted
* This block creates a line of code: "import SwiftUI"
* This code imports Swift's basic UI

### Import Block:
* This Block creates an import block
* This Block creates "import " + var_import + "\n"
* This allows the user to Import whatever they need

### Create ContentView Block:
* This block is meant to go after any import blocks
* This Block creates "struct ContentView: View {"
* This block creates the content view that a user will see while using the app

### Create Content Preview Block:
* This is the last block that should be used
* This Block creates "struct ContentView_Previews: PreviewProvider {\nstatic var previews: some View {\nContentView()\n}\n}"
* This block displays the Context view in the app

### Close Content Block:
* This is a closer block for any big blocks
* This Block creates "}"
* This helps close out any groups of code that aren't already closed

### On Tap Gesture Block:
* This block allows something to happen when a user clicks a button in the app
* This Block creates ".onTapGesture {\n" + statements_action + "}\n"
* This allows specific actions to happen with user input

### Struct Block:
* This Block allows the user to create multiple structures within the code
* This Block creates "struct " + name + ": View {\n" + statements_action + "\n}\n"
* This is good for making different objects, views, and actions

### Var Body Block:
* This block creates the body of a page and what it will look like/have
* This Block creates "\nvar body: " + view + " {\n" + statements_action + "\n}\n"
* This block will house everything in the page

### Ternary Operator Block:
* This block is meant to help create conditions of when an action should happen
* This Block creates "(" + condition + " ? " + trueValue + " : " + falseValue + ")"
* For example, this block can use the .forgroundcolor block to change the color of something based on a user's gesture.

### .foregroundColor Block:
* This allows the user to change the color of an object
* This Block creates ".foregroundColor" + ternaryoperator
* usually matched with a Ternary Block

### Toggle State Variable Block:
* This block creates a variable that is able to be adjusted/changed
* This Block creates var_name + ".toggle();\n"
* This block allows change based on a user input/gesture

### List Block:
* This block allows the user to create a list
* This Block creates =  var code = '';
  if (var_state) {
    code += var_state + ' ';
  }
  if (var_ppn) {
    code += var_ppn + ' ';
  }
  code += var_vorl + ' ' + var_name + ' ' + var_equals + ' ';

  if (var_equals === ':') {
    code += var_group_name + ' ';
  }
  
  code += '[' + items + ']';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

### List Item Block:
* This block allows the user to create a block to add to a list
* This Block creates Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
* This item is only for adding list items to a list

### Array Block:
* This block allows the user to create a array
* This Block creates = var code = '';
  if (var_state) {
    code += var_state + ' ';
  }
  if (var_ppn) {
    code += var_ppn + ' ';
  }
  code += var_vorl + ' ' + var_name + ' ' + var_equals + ' ';

  if (var_equals === ':') {
    code += var_group_name + ' ';
  }
  
  code += '[' + items + ']';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

### Array Item Block:
* This block allows the user to create a block to add to an array
* This Block creates Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item + ', ';
* This item is only for adding array items to an array

### Variable Block:
* This is a basic variable block
* This Block creates "var " + var_name + " = " + var_value
* This block allows a user to adjust the name and value of a block

### State Variable Block:
* This block creates a variable that can be private or public
* This Block creates "@state " + var_state + " " + var_name + " = " + var_value
* This allows the user to make blocks that can be accessed throughout different pages

### Var Block:
* There are two different kinds, one with a side connection, and another with an upper/lower connection
* This Block creates var_name
* This is a basic block that allows a user to add a variable to an object

### Text Block:
* There are two different kinds, one with a side connection, and another with an upper/lower connection
* This Block creates var_value
* This is a basic block that allows a user to add text to a block

