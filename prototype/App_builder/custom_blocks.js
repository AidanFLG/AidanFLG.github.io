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

// Create a var body block
Blockly.Blocks['var_body'] = {
  init: function() {
    this.appendDummyInput("BODY_NAME")
        .appendField("Create var body with name:")
    this.appendDummyInput("BODY_CONTENT")
        .appendField("Body Content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Create a var body for ContentView");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['var_body'] = function(block) {
  var code = "\n\n";
  code += "var body: some View{";
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

// Create a variable block
Blockly.Blocks['user_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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

// Create a list block
Blockly.Blocks['list_input'] = {
  init: function() {
    // Define a block to create a list
    this.appendDummyInput()
      .appendField("@State or none:")
      .appendField(new Blockly.FieldTextInput('none'), 'STATE');
    this.appendDummyInput()
      .appendField('public, private, or none:')
      .appendField(new Blockly.FieldTextInput('none'), 'PPN');
    this.appendDummyInput()
      .appendField('var or let:')
      .appendField(new Blockly.FieldTextInput('var'), 'VORL');
    this.appendDummyInput()
      .appendField('list name:')
      .appendField(new Blockly.FieldTextInput('Enter name'), 'NAME');
    this.appendDummyInput()
      .appendField(': or =')
      .appendField(new Blockly.FieldTextInput(':'), 'EQUALS');

    // Create an input for list items
    this.appendStatementInput('ITEMS')
      .setCheck('List_Item')
      .appendField('insert blocks as items in list');

    this.setOutput(true, 'List');
    this.setColour(230);
    this.setTooltip('Create a List');
    this.setHelpUrl('');
  },
  onchange: function(event) {
    // Handle changes
    if (this.getFieldValue('EQUALS') === ':') {
      if (!this.getInput('GROUP_NAME')) {
        this.appendDummyInput('GROUP_NAME')
          .appendField('group name:')
          .appendField(new Blockly.FieldTextInput('Enter name'), 'GROUP_NAME');
      }
    } else if (this.getFieldValue('EQUALS') === '=') {
      if (this.getInput('GROUP_NAME')) {
        this.removeInput('GROUP_NAME');
      }
    } else {
      // Handle errors (optional)
    }
  }
};


// Define a block to create a list item
Blockly.Blocks['list_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Item:');
    this.appendValueInput('ITEM')
      .setCheck(null);
    this.setPreviousStatement(true, 'List_Item');
    this.setNextStatement(true, 'List_Item');
    this.setColour(60);
    this.setTooltip('List item');
    this.setHelpUrl('');
  }
};

// Generates code for a list in Swift
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

// Generates code for a list item in Swift
Blockly.JavaScript['list_item'] = function (block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};

// Create an array item block
Blockly.Blocks['array_item'] = {
  init: function() {
    // Define a block to create an array item
    this.appendDummyInput()
      .appendField("Array Item");
    this.appendValueInput("ITEM")
      .setCheck(null);
    this.setPreviousStatement(true, 'Array_Item');  // Set the type to whatever you want, for example, 'Array_Item'
    this.setNextStatement(true, 'Array_Item');  // Set the type to whatever you want, for example, 'Array_Item'
    this.setColour(60);
    this.setTooltip("Array item");
    this.setHelpUrl("");
  }
};

// Generates code for an array item in Swift
Blockly.JavaScript['array_item'] = function(block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item + ', ';  // Make sure to return the code in a way that is compatible with your 'array_input' block
};

// Create an array block
Blockly.Blocks['array_input'] = {
  init: function() {
    // Define a block to create an array
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
    this.setOutput(true, 'Array');
    this.setColour(230);
    this.setTooltip('Create an Array');
    this.setHelpUrl('');
  }
};

// Generates code for an array in Swift
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

// Generates code for an array item in Swift
Blockly.JavaScript['array_item'] = function (block) {
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};
