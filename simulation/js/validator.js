import { getBoxOrder } from "./main.js";
export function isFilled(){
    // checking verilog module
    let moduleName = document.getElementById("module-name");
    let input1 = document.getElementById("input1-selector");
    let output = document.getElementById("output-selector");
    let condition = document.getElementById("condition-selector");
    let LHS = document.getElementById("LHS-selector");
    let operator1 = document.getElementById("operator1-selector");
    let RHS1 = document.getElementById("RHS1-selector");
    let operator2 = document.getElementById("operator2-selector");
    let RHS2 = document.getElementById("RHS2-selector");
    let error = "Highlighted part of the code is incomplete.";
    let assign_LHS = document.getElementById("assignLHS-selector");
    let assign_RHS = document.getElementById("assignRHS-selector");
    
    if (moduleName.value.trim() == '')
    {
        printErrors(error,moduleName);
        return false;
    }
    if(input1.value==="")
    {
        printErrors(error,input1);
        return false;   
    }
    if(output.value==="")
    {
        printErrors(error,output);
        return false;   
    }
    if(condition.value==="")
    {
        printErrors(error,condition);
        return false;   
    }
    if(LHS.value==="")
    {
        printErrors(error,LHS);
        return false;   
    }
    if(operator1.value==="")
    {
        printErrors(error,operator1);
        return false;   
    }
    if(RHS1.value==="")
    {
        printErrors(error,RHS1);
        return false;   
    }
    if(operator2.value==="")
    {
        printErrors(error,operator2);
        return false;   
    }
    if(RHS2.value==="")
    {
        printErrors(error,RHS2);
        return false;   
    }
    if(assign_LHS.value==="")
    {
        printErrors(error,assign_LHS);
        return false;   
    }
    if(assign_RHS.value==="")
    {
        printErrors(error,assign_RHS);
        return false;   
    }

    // checking verilog testbench
    let tbName = document.getElementById("tb-name");
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let moduleNameTB = document.getElementById("module-name-tb");
    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    if (tbName.value.trim() == '')
    {
        printErrors(error,tbName);
        return false;
    }
    if(input1TB.value === "")
    {
        printErrors(error,input1TB);
        return false;   
    }
    if(input2TB.value === "")
    {
        printErrors(error,input2TB);
        return false;   
    }
    if (moduleNameTB.value.trim() == '')
    {
        printErrors(error,moduleNameTB);
        return false;
    }
    if(arg1.value === "")
    {
        printErrors(error,arg1);
        return false;   
    }
    if(arg2.value==="")
    {
        printErrors(error,arg2);
        return false;   
    }
    return true;
}

export function printErrors(errorMsg, errorID){
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if(errorID) {
        errorID.classList.add('highlight');
        setTimeout(function() {
            errorID.classList.remove('highlight');
          }, 3000);
    }
}

export function isValid(){
    
    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('module');
    const boxOrder2 = getBoxOrder('tb');
    let container = document.getElementById("container");
    let containerTB = document.getElementById("containerTB");
    if(boxOrder1[0]!=="1" || boxOrder1[1]!=="2" || boxOrder1[2]!=="3")
    {
        let msg = "Please rearrange the code blocks of the Verilog Module in the correct order."
        printErrors(msg,container);
        return false;
    }
    if(boxOrder2[0]!=="1TB" || boxOrder2[1]!=="2TB" || boxOrder2[2]!=="3TB" || boxOrder2[5]!=="6TB")
    {
        let msg = "Please rearrange the code blocks of the Verilog Testbench in the correct order."
        printErrors(msg,containerTB);
        return false;
    }

    
    // Checking if the module and testbench names are valid
    let tbName = document.getElementById("tb-name");
    let moduleNameTB = document.getElementById("module-name-tb");
    let moduleName = document.getElementById("module-name"); 
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    if(!regex.test(moduleName.value.trim()))
    {
        let msg = "Invalid Module Name.";
        printErrors(msg,moduleName);
        return false;
    }
    if(!regex.test(moduleNameTB.value.trim()))
    {
        let msg = "Invalid Module Name.";
        printErrors(msg,moduleNameTB);
        return false;
    }
    if(!regex.test(tbName.value.trim()))
    {
        let msg = "Invalid Testbench Name."
        printErrors(msg,tbName);
        return false;
    }

    // checking if module name matches in both code and tb
    if(moduleName.value.trim()!==moduleNameTB.value.trim())
    {
        let msg = "There is no verilog module defined with the name " +  moduleNameTB.value.trim();
        printErrors(msg,moduleNameTB);
        return false;
    }

    // checking if module name is not equal to the temporary function name used to call the module in the testbench
    if(moduleNameTB.value.trim()==="dut")
    {
        let msg = "The name of the module instantiated and the temporary function name (dut) used to instantiate the module in the testbench cannot be the same.";
        printErrors(msg,moduleNameTB);
        return false;
    }

    // checking the input and output argument declaration in the module
    let input1 = document.getElementById("input1-selector");
    let output = document.getElementById("output-selector");
    if(input1.value===output.value)
    {
        let msg = 'Highlighted variable declared more than once'
        printErrors(msg,input1);
        return false;
    }

    // checking always block
    let condition = document.getElementById("condition-selector");
    let LHS = document.getElementById("LHS-selector");
    let operator1 = document.getElementById("operator1-selector");
    let RHS1 = document.getElementById("RHS1-selector");
    let operator2 = document.getElementById("operator1-selector");
    let RHS2 = document.getElementById("RHS1-selector");
    if(condition.value.split(" ")[1]===output.value)
    {
        let msg = "The variables in the sensitivity list of an always block cannot include the output register of the same module";
        printErrors(msg,condition);
        return false;
    }
    if(LHS.value===input1.value)
    {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg,LHS);
        return false;
    }
    if(operator1.value==="=")
    {
        let msg = "This operator is incorrect for a sequential behaviour.";
        printErrors(msg,operator1);
        return false;
    }

    // checking assign statement
    let assign_LHS = document.getElementById("assignLHS-selector");
    let assign_RHS = document.getElementById("assignRHS-selector");
    if (assign_LHS==input1)
    {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg,assign_LHS);
        return false;
    }

    // checking i/o and function call arguments in test bench
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    if(input1TB.value===input2TB.value) 
    {
        let msg = 'Highlighted variable declared more than once'
        printErrors(msg,input1TB);
        return false;
    }
    if(input2TB.value==="CLK")
    {
        let msg = 'Highlighted code part is incorrect.'
        printErrors(msg,input2TB);
        return false;
    }
    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    if(arg2.value==="CLK")
    {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg2);
        return false;
    }
    if(arg1.value==="Out")
    {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg1);
        return false;
    }
    return true;
}

export function printObsTable() {
    
    let condition = document.getElementById('condition-selector').value;
    let input1 = document.getElementById("input1-selector").value;
    let arg1 = document.getElementById("argument1-selector").value;
    let arg2 = document.getElementById("argument2-selector").value;
    let RHS1 = document.getElementById("RHS1-selector").value;
    let RHS2 = document.getElementById("RHS2-selector").value;
    let operator2 = document.getElementById("operator2-selector").value;
    let assign_LHS = document.getElementById("assignLHS-selector").value;
    let assign_RHS = document.getElementById("assignRHS-selector").value;
    let edge = condition.split(" ")[0];
    let output = document.getElementById("output-selector").value;
    let LHS = document.getElementById("LHS-selector").value;
    

    let map = {0:"00", 1:"01", 2:"10", 3:"11", "x":"x"};
    let arr = {"CLK" : [0,1,0,1,0,1,0,1,0,1], "Out": [0,0,1,1,2,2,3,3,0,0]};
    let body = "";
    let isCorrect = true;
    let  counter= {"counter_up":0,"Out":"x"};
    for(let i=0; i<10;++i)
    {
        counter[input1] = arr[arg1][i];
        let clk = 0;
        if(edge==="posedge")
        clk = 1;
        console.log("reached");
        console.log(arr["CLK"][i]);
        console.log(clk);
        if(parseInt(arr["CLK"][i])===clk && i!==0 && parseInt(arr["CLK"][i-1])===1-clk)
        {
            let rhs= 0;

            console.log(rhs);
            if(operator2=="+")
            rhs= rhs+parseInt(RHS2);
            else
            rhs=rhs-parseInt(RHS2);
            
            console.log(rhs);
            console.log(counter[RHS1]);
            if(counter[RHS1]!=="x")
            rhs = rhs+ counter[RHS1];
            
            else
            rhs = "x";
            
            console.log(rhs);

            counter[LHS] = rhs;
            if(counter["counter_up"]!=="x" && counter["counter_up"]>3)
            counter["counter_up"] %= 4;
            if(counter["counter_up"]!=="x" && counter["counter_up"]>3)
            counter["counter_up"] %= 4;
        }
        if(counter["counter_up"]!=="x" && counter["counter_up"]>3)
        counter["counter_up"] %= 4;
        if(counter["Out"]!=="x" && counter["Out"]>3)
        counter["Out"] %= 4;

        counter[assign_LHS] = counter[assign_RHS];

        if(arr[arg2][i]!==counter[output])
        {
            isCorrect = false;
            body+=`<tr class="bold-table"><th>${i}</th><th>${arr["CLK"][i]}</th><td class="failure-table"> ${map[arr["Out"][i]]} </td><td class="failure-table"> ${map[counter["Out"]]}</td>`;
        }
        else
        {
            body+=`<tr class="bold-table"><th>${i}</th><th>${arr["CLK"][i]}</th><td class="success-table"> ${map[arr["Out"][i]]} </td><td class="success-table"> ${map[counter["Out"]]}</td>`;
        }
    }
    document.getElementById("table-body").innerHTML = body;
    if(isCorrect)
    {
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else
    {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}