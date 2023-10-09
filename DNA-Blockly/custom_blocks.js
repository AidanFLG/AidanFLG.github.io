// Define the DNA block.
Blockly.Blocks['dna_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DNA Strand:")
        .appendField(new Blockly.FieldTextInput("Enter DNA strand"), "DNA_STRAND");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Define the Mutation block.
Blockly.Blocks['mutation_block'] = {
  init: function() {
    this.appendValueInput("DNA_STRAND")
        .setCheck("DNA")
        .appendField("Mutation")
        .appendField(new Blockly.FieldNumber(0, 0), "MUTATION_COUNT")
        .appendField("mutations");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Mutate DNA strand");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['mutation_block'] = function(block) {
  var mutationCount = block.getFieldValue('MUTATION_COUNT');
  var dnaStrand = Blockly.JavaScript.valueToCode(block, 'DNA_STRAND', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Generate JavaScript code to mutate the DNA strand.
  var code = '';
  if (mutationCount > 0) {
    code = `
      var mutatedStrand = ${dnaStrand};
      for (var i = 0; i < ${mutationCount}; i++) {
        var position = Math.floor(Math.random() * mutatedStrand.length);
        var mutation = 'ATCG'[Math.floor(Math.random() * 4)];
        mutatedStrand = mutatedStrand.substring(0, position) + mutation + mutatedStrand.substring(position + 1);
      }
      console.log(mutatedStrand);
    `;
  } else {
    code = `console.log(${dnaStrand});`;
  }
  
  return code;
};
