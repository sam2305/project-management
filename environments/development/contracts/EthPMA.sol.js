// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"description","type":"string"},{"name":"amount","type":"uint256"},{"name":"recipient","type":"address"},{"name":"assignTo","type":"string"},{"name":"status","type":"string"},{"name":"assets","type":"string"}],"name":"startRFP","outputs":[{"name":"projectID","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"status","type":"string"},{"name":"assets","type":"string"}],"name":"updateContract","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"description","type":"string"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"projectID","type":"uint256"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"assignTo","type":"string"},{"indexed":false,"name":"status","type":"string"},{"indexed":false,"name":"assets","type":"string"}],"name":"Update","type":"event"}],
    binary: "6060604052610b96806100126000396000f3606060405260e060020a600035046377e817b68114610026578063ad847487146101eb575b005b6040805160206004803580820135601f81018490048402850184019095528484526102da94919360249390929184019190819084018382808284375050604080516020601f8935808c0135918201839004830284018301909452808352979998604498929750929092019450925082915084018382808284375050604080516020608435808b0135601f810183900483028401830190945283835297999835986064359890975060a4965091945060249190910192508190840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760c4979196506024919091019450909250829150840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760e497919650602491909101945090925082915084018382808284375094965050505050505060018054808201825560008181526020818152604082208b5181548285529383902094959194600292851615610100026000190190941691909104601f90810183900484019391928d01908390106102ec57805160ff19168380011785555b5061031c9291505b8082111561037f57600081556001016101d7565b60408051602060046024803582810135601f81018590048502860185019096528585526100249583359593946044949392909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a01909352828252969897606497919650602491909101945090925082915084018382808284375094965050505050505060008381526020818152604082206005810180548651828652948490209294919360026000196101006001851615020190921691909104601f908101829004840193918801908390106107e157805160ff19168380011785555b506108119291506101d7565b60408051918252519081900360200190f35b828001600101855582156101cf579182015b828111156101cf5782518260005055916020019190600101906102fe565b5050600081815260208181528851604083206001908101805481865294849020909460029281161561010002600019011691909104601f9081018490048201938c019083901061038357805160ff19168380011785555b506103b39291506101d7565b5090565b82800160010185558215610373579182015b82811115610373578251826000505591602001919060010190610395565b5050600081815260208181526040822060028181018a905560038201805473ffffffffffffffffffffffffffffffffffffffff19168a17905587516004929092018054818652948490209094600181161561010002600019011691909104601f90810184900482019389019083901061043f57805160ff19168380011785555b5061046f9291506101d7565b82800160010185558215610433579182015b82811115610433578251826000505591602001919060010190610451565b505060008181526020818152604082208551600591909101805481855293839020909360026001821615610100026000190190911604601f9081018490048201938801908390106104d357805160ff19168380011785555b506105039291506101d7565b828001600101855582156104c7579182015b828111156104c75782518260005055916020019190600101906104e5565b505060008181526020818152604082208451600691909101805481855293839020909360026001821615610100026000190190911604601f90810184900482019387019083901061056757805160ff19168380011785555b506105979291506101d7565b8280016001018555821561055b579182015b8281111561055b578251826000505591602001919060010190610579565b50507f8bedeef2d59cb7701a55758bfda6427497802dd5df8023bc18c71cf06e4050b188888884898989896040518080602001806020018981526020018881526020018773ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200186810386528e8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561065a5780820380516001836020036101000a031916815260200191505b5086810385528d8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106b35780820380516001836020036101000a031916815260200191505b508681038452898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561070c5780820380516001836020036101000a031916815260200191505b508681038352888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156107655780820380516001836020036101000a031916815260200191505b508681038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156107be5780820380516001836020036101000a031916815260200191505b509d505050505050505050505050505060405180910390a1979650505050505050565b828001600101855582156102ce579182015b828111156102ce5782518260005055916020019190600101906107f3565b505081816006016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061086c57805160ff19168380011785555b5061089c9291506101d7565b82800160010185558215610860579182015b8281111561086057825182600050559160200191906001019061087e565b50506040805160028381015460038501549383018190526060830188905273ffffffffffffffffffffffffffffffffffffffff93909316608083018190526101008084528554600181811615830260001901909116939093049084018190527f8bedeef2d59cb7701a55758bfda6427497802dd5df8023bc18c71cf06e4050b19486949385019390928a9290916004870191600588019160068901918190602082019060a083019060c084019060e08501906101208601908f9080156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505086810385528d5460026001821615610100026000190190911604808252602091909101908e908015610a185780601f106109ed57610100808354040283529160200191610a18565b820191906000526020600020905b8154815290600101906020018083116109fb57829003601f168201915b50508681038452895460026001821615610100026000190190911604808252602091909101908a908015610a8d5780601f10610a6257610100808354040283529160200191610a8d565b820191906000526020600020905b815481529060010190602001808311610a7057829003601f168201915b505086810383528854600260018216156101000260001901909116048082526020919091019089908015610b025780601f10610ad757610100808354040283529160200191610b02565b820191906000526020600020905b815481529060010190602001808311610ae557829003601f168201915b505086810382528754600260018216156101000260001901909116048082526020919091019088908015610b775780601f10610b4c57610100808354040283529160200191610b77565b820191906000526020600020905b815481529060010190602001808311610b5a57829003601f168201915b50509d505050505050505050505050505060405180910390a15050505056",
    unlinked_binary: "6060604052610b96806100126000396000f3606060405260e060020a600035046377e817b68114610026578063ad847487146101eb575b005b6040805160206004803580820135601f81018490048402850184019095528484526102da94919360249390929184019190819084018382808284375050604080516020601f8935808c0135918201839004830284018301909452808352979998604498929750929092019450925082915084018382808284375050604080516020608435808b0135601f810183900483028401830190945283835297999835986064359890975060a4965091945060249190910192508190840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760c4979196506024919091019450909250829150840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760e497919650602491909101945090925082915084018382808284375094965050505050505060018054808201825560008181526020818152604082208b5181548285529383902094959194600292851615610100026000190190941691909104601f90810183900484019391928d01908390106102ec57805160ff19168380011785555b5061031c9291505b8082111561037f57600081556001016101d7565b60408051602060046024803582810135601f81018590048502860185019096528585526100249583359593946044949392909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a01909352828252969897606497919650602491909101945090925082915084018382808284375094965050505050505060008381526020818152604082206005810180548651828652948490209294919360026000196101006001851615020190921691909104601f908101829004840193918801908390106107e157805160ff19168380011785555b506108119291506101d7565b60408051918252519081900360200190f35b828001600101855582156101cf579182015b828111156101cf5782518260005055916020019190600101906102fe565b5050600081815260208181528851604083206001908101805481865294849020909460029281161561010002600019011691909104601f9081018490048201938c019083901061038357805160ff19168380011785555b506103b39291506101d7565b5090565b82800160010185558215610373579182015b82811115610373578251826000505591602001919060010190610395565b5050600081815260208181526040822060028181018a905560038201805473ffffffffffffffffffffffffffffffffffffffff19168a17905587516004929092018054818652948490209094600181161561010002600019011691909104601f90810184900482019389019083901061043f57805160ff19168380011785555b5061046f9291506101d7565b82800160010185558215610433579182015b82811115610433578251826000505591602001919060010190610451565b505060008181526020818152604082208551600591909101805481855293839020909360026001821615610100026000190190911604601f9081018490048201938801908390106104d357805160ff19168380011785555b506105039291506101d7565b828001600101855582156104c7579182015b828111156104c75782518260005055916020019190600101906104e5565b505060008181526020818152604082208451600691909101805481855293839020909360026001821615610100026000190190911604601f90810184900482019387019083901061056757805160ff19168380011785555b506105979291506101d7565b8280016001018555821561055b579182015b8281111561055b578251826000505591602001919060010190610579565b50507f8bedeef2d59cb7701a55758bfda6427497802dd5df8023bc18c71cf06e4050b188888884898989896040518080602001806020018981526020018881526020018773ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200186810386528e8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561065a5780820380516001836020036101000a031916815260200191505b5086810385528d8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106b35780820380516001836020036101000a031916815260200191505b508681038452898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561070c5780820380516001836020036101000a031916815260200191505b508681038352888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156107655780820380516001836020036101000a031916815260200191505b508681038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156107be5780820380516001836020036101000a031916815260200191505b509d505050505050505050505050505060405180910390a1979650505050505050565b828001600101855582156102ce579182015b828111156102ce5782518260005055916020019190600101906107f3565b505081816006016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061086c57805160ff19168380011785555b5061089c9291506101d7565b82800160010185558215610860579182015b8281111561086057825182600050559160200191906001019061087e565b50506040805160028381015460038501549383018190526060830188905273ffffffffffffffffffffffffffffffffffffffff93909316608083018190526101008084528554600181811615830260001901909116939093049084018190527f8bedeef2d59cb7701a55758bfda6427497802dd5df8023bc18c71cf06e4050b19486949385019390928a9290916004870191600588019160068901918190602082019060a083019060c084019060e08501906101208601908f9080156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505086810385528d5460026001821615610100026000190190911604808252602091909101908e908015610a185780601f106109ed57610100808354040283529160200191610a18565b820191906000526020600020905b8154815290600101906020018083116109fb57829003601f168201915b50508681038452895460026001821615610100026000190190911604808252602091909101908a908015610a8d5780601f10610a6257610100808354040283529160200191610a8d565b820191906000526020600020905b815481529060010190602001808311610a7057829003601f168201915b505086810383528854600260018216156101000260001901909116048082526020919091019089908015610b025780601f10610ad757610100808354040283529160200191610b02565b820191906000526020600020905b815481529060010190602001808311610ae557829003601f168201915b505086810382528754600260018216156101000260001901909116048082526020919091019088908015610b775780601f10610b4c57610100808354040283529160200191610b77565b820191906000526020600020905b815481529060010190602001808311610b5a57829003601f168201915b50509d505050505050505050505050505060405180910390a15050505056",
    address: "0x096f7fe0aa9251f696caad7c49e2102f7ed1d678",
    generated_with: "2.0.9",
    contract_name: "EthPMA"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("EthPMA error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("EthPMA error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("EthPMA error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("EthPMA error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.EthPMA = Contract;
  }

})();
