/*
This is the Custom Blocks File. The purpose of this file is to house all the blocks that are being used in our code. 
Each block that gets created("Blockly.Blocks"), must have its own javascript("Blockly.JavaScript"). After creating a block,
you must add it to the library of blocks that are displayed in the index file. All of the provided blocks are meant to build 
a block in the UI and create some sort of code when used and code is either downloaded or generated.
*/

// Import SwiftUI and create ContentView block
Blockly.Blocks['import_swiftui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import SwiftUI")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates import in swift
Blockly.JavaScript['import_swiftui'] = function(block) {
  var code = "import SwiftUI\n";
  return code;
};

Blockly.Blocks['on_tap_gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Tap Gesture");
    this.appendStatementInput("ACTION")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_tap_gesture'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
  var code = ".onTapGesture {\n" + statements_action + "}\n";
  return code;
};

Blockly.Blocks['struct'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("struct")
        .appendField(new Blockly.FieldTextInput("struct name"), "STRUCTNAME");
    this.appendStatementInput("FUNCTION")
        .setCheck(null)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.JavaScript['struct'] = function(block) {
  var name = block.getFieldValue('STRUCTNAME');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'FUNCTION');
  var code = "struct " + name + ": View {\n" + statements_action + "\n}\n";
  return code;
};

Blockly.Blocks['var_body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var body")
        .appendField(new Blockly.FieldTextInput("view type"), "VIEWTYPE");
    this.appendStatementInput("VIEW")
        .setCheck(null)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.JavaScript['var_body'] = function(block) {
  var view = block.getFieldValue('VIEWTYPE');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'VIEW');
  var code = "\nvar body: " + view + " {\n" + statements_action + "\n}\n";
  return code;
};


// Import SwiftUI and create ContentView block
Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import")
        .appendField(new Blockly.FieldTextInput("Enter import name"), "IMPORT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates import in swift
Blockly.JavaScript['import'] = function(block) {
  var var_import = block.getFieldValue('IMPORT');
  var code = "import " + var_import + "\n";
  return code;
};

// Create Content View
Blockly.Blocks['create_contentview'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create ContentView")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates content view in swift
Blockly.JavaScript['create_contentview'] = function(block) {
  var code = "struct ContentView: View {\n";
  return code;
};

// Create Content View
Blockly.Blocks['contentview_preview'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Content Preview")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generates content view in swift
Blockly.JavaScript['contentview_preview'] = function(block) {
  var code = "struct ContentView_Previews: PreviewProvider {\nstatic var previews: some View {\nContentView()\n}\n}";
  return code;
};

Blockly.Blocks['content_closer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Close Content")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Closes out content
Blockly.JavaScript['content_closer'] = function(block) {
  var code = "\n\n";
  code += "}";
  return code;
};


// Create a variable block
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput("VAR_NAME")
        .appendField("variable named:")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.appendDummyInput("VAR_VALUE")
        .appendField("Value:")
        .appendField(new Blockly.FieldTextInput("Enter value"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['variable'] = function(block) {
  var var_name = block.getFieldValue('NAME'); // Get the variable name value
  var var_value = block.getFieldValue('VALUE'); // Get the variable value
  var code = "\n";
  code += "var " + var_name + " = " + var_value;
  return code; // Return the code as a string directly, no need for an array
};

// Create a state variable block
Blockly.Blocks['state_variable'] = {
  init: function() {
    this.appendDummyInput("VAR_STATE")
        .appendField("Public or Private:")
        .appendField(new Blockly.FieldTextInput("public or private or "), "STATE");
    this.appendDummyInput("VAR_NAME")
        .appendField("state variable named:")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.appendDummyInput("VAR_VALUE")
        .appendField("Value:")
        .appendField(new Blockly.FieldTextInput("Enter value"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['state_variable'] = function(block) {
  var var_state = block.getFieldValue('STATE'); // Get the state value
  var var_name = block.getFieldValue('NAME'); // Get the variable name value
  var var_value = block.getFieldValue('VALUE'); // Get the variable value
  var code = "\n";
  code += "@state " + var_state + " " + var_name + " = " + var_value;
  return code; // Return the code as a string directly, no need for an array
};

Blockly.Blocks['foreground_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(".foregroundColor(");
    this.appendValueInput("TERNARY_OPERATOR")
        .setCheck(null)
        .appendField("Condition");
    this.appendDummyInput()
        .appendField(")");
    this.appendValueInput('Action')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("Set foreground color based on a condition");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['foreground_color'] = function(block) {
  var ternaryOperator = Blockly.JavaScript.valueToCode(block, 'TERNARY_OPERATOR', Blockly.JavaScript.ORDER_NONE);
  
  var code = ".foregroundColor" + ternaryOperator;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['ternary_operator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ternary Operator");
    this.appendDummyInput()
        .appendField("Condition")
        .appendField(new Blockly.FieldTextInput(""), "CONDITION");
    this.appendDummyInput()
        .appendField("?")
    this.appendDummyInput()
        .appendField("True Value")
        .appendField(new Blockly.FieldTextInput(""), "TRUE_VALUE");
    this.appendDummyInput()
        .appendField(":");
    this.appendDummyInput()
        .appendField("False Value")
        .appendField(new Blockly.FieldTextInput(""), "FALSE_VALUE");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("Ternary operator");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['ternary_operator'] = function(block) {
  var condition = block.getFieldValue('CONDITION');
  var trueValue = block.getFieldValue('TRUE_VALUE');
  var falseValue = block.getFieldValue('FALSE_VALUE');
  
  var code = "(" + condition + " ? " + trueValue + " : " + falseValue + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['variable_toggle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Toggle state variable named:")
        .appendField(new Blockly.FieldTextInput("stateVariable"), "VAR_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Toggle the state variable");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['variable_toggle'] = function(block) {
  var var_name = block.getFieldValue('VAR_NAME');
  var code = var_name + ".toggle();\n";
  return code;
};

// Create a variable block
Blockly.Blocks['user_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.setOutput(true, "Variable");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['user_variable'] = function(block) {
  var var_name = block.getFieldValue('NAME'); // Get the variable name value
  var code = var_name
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a text block
Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Enter text"), "TEXT_VALUE");
    this.setOutput(true, "String");
    this.setColour(430);
    this.setTooltip("Input a text value.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['text_input'] = function(block) {
  var var_value = block.getFieldValue('TEXT_VALUE'); // Get the variable value
  var code = var_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a variable block
Blockly.Blocks['user_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAMES");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['user_single'] = function(block) {
  var var_name = block.getFieldValue('NAMES'); // Get the variable name value
  var code = var_name
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a text block
Blockly.Blocks['text_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Enter text"), "TEXT_VALUE_S");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(430);
    this.setTooltip("Input a text value.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['text_single'] = function(block) {
  var var_value = block.getFieldValue('TEXT_VALUE_S'); // Get the variable value
  var code = var_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Create a list block
Blockly.Blocks['list_input'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("@State or none:")
      .appendField(new Blockly.FieldTextInput('none'), 'STATE'); // Provide a default value
    this.appendDummyInput()
      .appendField('public, private, or none:')
      .appendField(new Blockly.FieldTextInput('none'), 'PPN'); // Provide a default value
    this.appendDummyInput()
      .appendField('var or let:')
      .appendField(new Blockly.FieldTextInput('var'), 'VORL'); // Provide a default value
    this.appendDummyInput()
      .appendField('list name:')
      .appendField(new Blockly.FieldTextInput('Enter name'), 'NAME'); // Provide a placeholder
    this.appendDummyInput()
      .appendField(': or =')
      .appendField(new Blockly.FieldTextInput(':'), 'EQUALS'); // Provide a default value
    // Create an input for group name only if EQUALS is ":"
    if (this.getFieldValue('EQUALS') === ':') {
      this.appendDummyInput()
        .appendField('group name:')
        .appendField(new Blockly.FieldTextInput('Enter name'), 'GROUP_NAME'); // Provide a placeholder
    }
    this.appendStatementInput('ITEMS')
      .setCheck('List_Item')
      .appendField('insert blocks as items in list');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, 'List');
    this.setColour(230);
    this.setTooltip('Create a List');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['list_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('List Item:');
    this.appendValueInput('ITEM')
      .setCheck(null);
    this.setPreviousStatement(true, 'List_Item');
    this.setNextStatement(true, 'List_Item');
    this.setColour(60);
    this.setTooltip('List item');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['list_input'] = function (block) {
  var var_state = block.getFieldValue('STATE');
  var var_ppn = block.getFieldValue('PPN');
  var var_vorl = block.getFieldValue('VORL');
  var var_name = block.getFieldValue('NAME');
  var var_equals = block.getFieldValue('EQUALS');
  var var_group_name = block.getFieldValue('GROUP_NAME');
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS');
  
  var code = '';
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

Blockly.JavaScript['list_item'] = function (block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};

// Create an array item block
Blockly.Blocks['array_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Array Item: ");
    this.appendValueInput("ITEM")
      .setCheck(null);
    this.setPreviousStatement(true, 'Array_Item');  // Set the type to whatever you want, for example, 'Array_Item'
    this.setNextStatement(true, 'Array_Item');  // Set the type to whatever you want, for example, 'Array_Item'
    this.setColour(60);
    this.setTooltip("Array item");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['array_item'] = function(block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item + ', ';  // Make sure to return the code in a way that is compatible with your 'array_input' block
};

// Create an array block
Blockly.Blocks['array_input'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("@State or none:")
      .appendField(new Blockly.FieldTextInput('none'), 'STATE'); // Provide a default value
    this.appendDummyInput()
      .appendField('public, private, or none:')
      .appendField(new Blockly.FieldTextInput('none'), 'PPN'); // Provide a default value
    this.appendDummyInput()
      .appendField('var or let:')
      .appendField(new Blockly.FieldTextInput('var'), 'VORL'); // Provide a default value
    this.appendDummyInput()
      .appendField('array name:')
      .appendField(new Blockly.FieldTextInput('Enter name'), 'NAME'); // Provide a placeholder
    this.appendDummyInput()
      .appendField(': or =')
      .appendField(new Blockly.FieldTextInput(':'), 'EQUALS'); // Provide a default value
    // Create an input for group name only if EQUALS is ":"
    if (this.getFieldValue('EQUALS') === ':') {
      this.appendDummyInput()
        .appendField('group name:')
        .appendField(new Blockly.FieldTextInput('Enter name'), 'GROUP_NAME'); // Provide a placeholder
    }
    this.appendStatementInput('ITEMS')
      .setCheck('Array_Item')
      .appendField('insert blocks as items in array');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, 'Array');
    this.setColour(230);
    this.setTooltip('Create an Array');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['array_input'] = function (block) {
  var var_state = block.getFieldValue('STATE');
  var var_ppn = block.getFieldValue('PPN');
  var var_vorl = block.getFieldValue('VORL');
  var var_name = block.getFieldValue('NAME');
  var var_equals = block.getFieldValue('EQUALS');
  var var_group_name = block.getFieldValue('GROUP_NAME');
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS');
  
  var code = '';
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

Blockly.JavaScript['array_item'] = function (block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};
