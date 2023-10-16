// Define a Blockly block for importing SwiftUI
Blockly.Blocks['import_swiftui'] = {
  init: function() {
    // Add a dummy input to display the text "Import SwiftUI" on the block
    this.appendDummyInput()
        .appendField("Import SwiftUI");
    // Define where this block can be connected in the Blockly workspace
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // Set the color of the block to 230
    this.setColour(230);
    // Set tooltip and help URL, which are currently empty
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// // Generate the corresponding Swift code for importing SwiftUI
// Blockly.JavaScript['import_swiftui'] = function(block) {
//   // Generate the Swift code for importing SwiftUI
//   var code = "import SwiftUI\n";
//   return code;
// };

Blockly.Swift['import_swiftui'] = function(block) {
  var code = "import SwiftUI\n";
  return code;
};


// Define a generic import block for importing any library
Blockly.Blocks['import'] = {
  init: function() {
    // Add a dummy input and a text input field for the library name
    this.appendDummyInput()
        .appendField("Import")
        .appendField(new Blockly.FieldTextInput("Enter import name"), "IMPORT");
    // Define where this block can be connected in the Blockly workspace
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // Set the color of the block to 230
    this.setColour(230);
    // Set tooltip and help URL, which are currently empty
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generate the corresponding Swift code for a generic import
Blockly.JavaScript['import'] = function(block) {
  // Get the library name from the block field
  var var_import = block.getFieldValue('IMPORT');
  // Generate the Swift code for importing the specified library
  var code = "import " + var_import + "\n";
  return code;
};

// Define a block for creating a ContentView structure in SwiftUI
Blockly.Blocks['content_view_structure'] = {
  init: function() {
    // Add a dummy input to display the text "Content View Structure" on the block
    this.appendDummyInput()
        .appendField("Content View Structure");
    // Add a statement input for the content of the ContentView
    this.appendStatementInput("CONTENT")
        .setCheck(null)
        .appendField("Content");
    // Set the color of the block to 230
    this.setColour(230);
    // Set a tooltip explaining what this block does
    this.setTooltip('This block creates a content view structure with opening and closing functionalities.');
    // Define where this block can be connected in the Blockly workspace
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


// Initialize the Blockly.Swift object
Blockly.Swift = new Blockly.Generator('Swift');

// Then add your existing code
Blockly.Swift['content_view_structure'] = function(block) {
    // Extract the code inside the 'CONTENT' statement block
    var contentCode = Blockly.Swift.statementToCode(block, 'CONTENT');
    // Initialize the Swift code for creating a UIView named 'contentView'
    var code = 'let contentView = UIView()\n';
    // Append the code inside the 'CONTENT' statement block
    code += contentCode;
    // Add the 'contentView' to the main view
    code += 'self.view.addSubview(contentView)\n';
    // Return the generated Swift code
    return code;
};

// Define a Blockly block for creating a 'var body' in SwiftUI
Blockly.Blocks['var_body'] = {
  init: function() {
    // Add dummy inputs to display text on the block
    this.appendDummyInput("BODY_NAME")
        .appendField("Create var body with name:");
    this.appendDummyInput("BODY_CONTENT")
        .appendField("Body Content");
    // Define where this block can be connected
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // Set the color and tooltip
    this.setColour(160);
    this.setTooltip("Create a var body for ContentView");
    this.setHelpUrl("");
  }
};

// Generate the corresponding Swift code for 'var body'
Blockly.JavaScript['var_body'] = function(block) {
  // Generate the Swift code for defining 'var body'
  var code = "\nvar body: some View {\n";
  return code;
};

// Define a Blockly block for creating a variable in Swift
Blockly.Blocks['variable'] = {
  init: function() {
    // Add dummy inputs for the variable name and value
    this.appendDummyInput("VAR_NAME")
        .appendField("variable named:")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.appendDummyInput("VAR_VALUE")
        .appendField("Value:")
        .appendField(new Blockly.FieldTextInput("Enter value"), "VALUE");
    // Make the inputs appear inline
    this.setInputsInline(true);
    // Define where this block can be connected
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // Set the color and tooltip
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

// Generate the corresponding Swift code for creating a variable
Blockly.JavaScript['variable'] = function(block) {
  // Get the variable name and value from the block
  var var_name = block.getFieldValue('NAME');
  var var_value = block.getFieldValue('VALUE');
  // Generate the Swift code for creating the variable
  var code = "\nvar " + var_name + " = " + var_value;
  return code;
};

// Define a Blockly block for creating a state variable in SwiftUI
Blockly.Blocks['state_variable'] = {
  init: function() {
    // Add dummy inputs for the state variable name and value
    this.appendDummyInput("VAR_NAME")
        .appendField("state variable named:")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    this.appendDummyInput("VAR_VALUE")
        .appendField("Value:")
        .appendField(new Blockly.FieldTextInput("Enter value"), "VALUE");
    // Make the inputs appear inline
    this.setInputsInline(true);
    // Define where this block can be connected
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // Set the color and tooltip
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

// Generate the corresponding Swift code for creating a state variable
Blockly.JavaScript['state_variable'] = function(block) {
  // Get the state variable name and value from the block
  var var_name = block.getFieldValue('NAME');
  var var_value = block.getFieldValue('VALUE');
  // Generate the Swift code for creating the state variable
  var code = "@State var " + var_name + " = " + var_value + "\n";
  return code;
};


// Define a Blockly block for creating a user-defined variable
Blockly.Blocks['user_variable'] = {
  init: function() {
    // Add a dummy input with a text field for the variable name
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter variable name"), "NAME");
    // Set the output type to "Variable"
    this.setOutput(true, "Variable");
    // Set the color of the block
    this.setColour(430);
    // Tooltip and Help URL are empty
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generate the corresponding JavaScript code for the user-defined variable
Blockly.JavaScript['user_variable'] = function(block) {
  // Get the variable name from the block
  var var_name = block.getFieldValue('NAME');
  // Return the variable name as code
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Define a Blockly block for creating a text input
Blockly.Blocks['text_input'] = {
  init: function() {
    // Add a dummy input with a text field for the text value
    this.appendDummyInput()
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Enter text"), "TEXT_VALUE");
    // Set the output type to "String"
    this.setOutput(true, "String");
    // Set the color and tooltip
    this.setColour(430);
    this.setTooltip("Input a text value.");
    this.setHelpUrl("");
  }
};

// Generate the corresponding JavaScript code for the text input
Blockly.JavaScript['text_input'] = function(block) {
  // Get the text value from the block
  var var_value = block.getFieldValue('TEXT_VALUE');
  // Return the text value as code
  var code = var_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Define a Blockly block for creating a list
Blockly.Blocks['list_input'] = {
  init: function() {
    // Add various dummy inputs for list properties like state, access level, etc.
    this.appendDummyInput()
      .appendField("@State or none:")
      .appendField(new Blockly.FieldTextInput(''), 'STATE');
    // ... (similar dummy inputs for other properties)
    // Add a statement input for list items
    this.appendStatementInput('ITEMS')
      .setCheck('List_Item')
      .appendField('insert blocks as items in list');
    // Set the output type, color, tooltip, and help URL
    this.setOutput(true, 'List');
    this.setColour(230);
    this.setTooltip('Create a List');
    this.setHelpUrl('');

    // Additional logic for updating the block shape based on ': or =' field
    // ...
  },

  // Function to update the block shape based on the value of the ': or =' field
  updateShape_: function() {
    // ...
  },
  
  // Event handler for changes to the block
  onchange: function(event) {
    // ...
  }
};

// Define a Blockly block for creating a list item
Blockly.Blocks['list_item'] = {
  init: function() {
    // Add a dummy input with the label 'Item:'
    this.appendDummyInput()
      .appendField('Item:');
    // Add a value input for the item
    this.appendValueInput('ITEM')
      .setCheck(null);
    // Define where this block can be connected
    this.setPreviousStatement(true, 'List_Item');
    this.setNextStatement(true, 'List_Item');
    // Set the color and tooltip
    this.setColour(60);
    this.setTooltip('List item');
    this.setHelpUrl('');
  }
};

// Generate JavaScript code for the 'list_input' Blockly block
Blockly.JavaScript['list_input'] = function(block) {
  // Retrieve field values from the block
  var var_state = block.getFieldValue('STATE');
  var var_ppn = block.getFieldValue('PPN');
  var var_vorl = block.getFieldValue('VORL');
  var var_name = block.getFieldValue('NAME');
  var var_equals = block.getFieldValue('EQUALS');
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS').trim(); // Trim to remove leading/trailing spaces

  // Initialize the code string
  var code = '';
  // Add state if it exists
  if (var_state) code += var_state + ' ';
  // Add public/private/none if it exists
  if (var_ppn) code += var_ppn + ' ';
  // Add 'var' or 'let'
  code += var_vorl + ' ' + var_name + ' ' + var_equals + ' ';

  // If the list is typed (indicated by ':'), add the type group name
  if (var_equals === ':') {
    var group_name = block.getFieldValue('GROUP_NAME');
    code += group_name + ' ';
  }
  
  // Add the list items and close the statement
  code += '[' + items + '];\n';
  
  return code;
};

// Generate JavaScript code for the 'list_item' Blockly block
Blockly.JavaScript['list_item'] = function (block) {
  // Retrieve the item value from the block
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};

// Define a Blockly block for creating an array
Blockly.Blocks['array_input'] = {
  init: function() {
    // Initialize the block with a dropdown for '=' or ':'
    this.appendDummyInput()
        .appendField("Array")
        .appendField(new Blockly.FieldDropdown([["=", "="], [":", ":"]]), "EQUALS");
    // Set output type, color, and tooltips
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    // Ensure the block shape is correct initially
    this.updateShape_();
  },
  
  // Function to update the block shape based on the value of the ': or =' field
  updateShape_: function() {
    // Check if the 'GROUP_NAME_INPUT' exists
    var inputExists = this.getInput('GROUP_NAME_INPUT');
    // Get the current value of 'EQUALS'
    var equalsValue = this.getFieldValue('EQUALS');
    
    // Add or remove the 'GROUP_NAME_INPUT' based on the value of 'EQUALS'
    if (equalsValue === ':' && !inputExists) {
      this.appendDummyInput('GROUP_NAME_INPUT')
          .appendField('group name:')
          .appendField(new Blockly.FieldTextInput('Enter name'), 'GROUP_NAME');
    } else if (equalsValue !== ':' && inputExists) {
      this.removeInput('GROUP_NAME_INPUT');
    }
  },
  
  // Event handler for changes to the block
  onchange: function(event) {
    if (event.blockId === this.id) {
      this.updateShape_();
    }
  }
};

// Define a Blockly block for creating an array item
Blockly.Blocks['array_item'] = {
  init: function() {
    // Initialize the block with a label and a value input
    this.appendDummyInput()
      .appendField('Item:');
    this.appendValueInput('ITEM')
      .setCheck(null);
    // Define where this block can be connected
    this.setPreviousStatement(true, 'Array_Item');
    this.setNextStatement(true, 'Array_Item');
    // Set color and tooltips
    this.setColour(60);
    this.setTooltip('Array item');
    this.setHelpUrl('');
  }
};

// Generate JavaScript code for the 'array_input' Blockly block
Blockly.JavaScript['array_input'] = function (block) {
  // Similar to the 'list_input' code generator, but for arrays
  // ...
};

// Generate JavaScript code for the 'array_item' Blockly block
Blockly.JavaScript['array_item'] = function (block) {
  // Retrieve the item value from the block
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_NONE);
  return item;
};
